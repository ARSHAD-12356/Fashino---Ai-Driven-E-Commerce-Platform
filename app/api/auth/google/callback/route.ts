import { NextRequest, NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
    try {
        const code = request.nextUrl.searchParams.get('code');
        if (!code) {
            return NextResponse.json({ error: 'No code provided' }, { status: 400 });
        }

        const client = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback'
        );

        const { tokens } = await client.getToken(code);
        client.setCredentials(tokens);

        const userInfoResponse = await client.request({
            url: 'https://www.googleapis.com/oauth2/v2/userinfo',
        });

        const userInfo = userInfoResponse.data as any;

        await connectDB();

        let user = await User.findOne({ email: userInfo.email });

        // Determine profile pic
        let profilePic = userInfo.picture;

        // Helper to get default pic based on gender or name
        const getDefaultPic = (gender: string, name: string) => {
            if (gender === 'male') return 'https://avatar.iran.liara.run/public/boy';
            if (gender === 'female') return 'https://avatar.iran.liara.run/public/girl';
            // Fallback to Initials Avatar for 'other' or unknown
            return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;
        };

        if (!profilePic || profilePic === 'undefined' || profilePic === 'null') {
            profilePic = getDefaultPic('other', userInfo.name);
        }

        if (!user) {
            // Create new user
            user = await User.create({
                email: userInfo.email,
                name: userInfo.name,
                googleId: userInfo.id,
                provider: 'google',
                profilePic: profilePic,
                gender: 'other', // Default to other
            });
        } else {
            // Update existing user
            let hasChanges = false;

            if (!user.googleId) {
                user.googleId = userInfo.id;
                hasChanges = true;
            }

            // Profile Picture Logic:
            // 1. If Google provides a picture, ALWAYS use it.
            // 2. If Google does NOT provide a picture:
            //    a. If current pic is default/missing, update based on current gender.

            if (userInfo.picture) {
                if (user.profilePic !== userInfo.picture) {
                    user.profilePic = userInfo.picture;
                    hasChanges = true;
                }
            } else {
                // Google has no picture. Check if we need to set a default.
                // Check if current pic is a default one (either iran.liara or ui-avatars) or empty
                const isDefaultPic = !user.profilePic ||
                    user.profilePic.includes('avatar.iran.liara.run') ||
                    user.profilePic.includes('ui-avatars.com');

                if (isDefaultPic) {
                    // Use existing gender to determine new default
                    const newPic = getDefaultPic(user.gender || 'other', user.name);

                    if (user.profilePic !== newPic) {
                        user.profilePic = newPic;
                        hasChanges = true;
                    }
                }
            }

            if (hasChanges) {
                await user.save();
            }
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: '7d' }
        );

        // Redirect to success page with token
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        return NextResponse.redirect(`${baseUrl}/auth/google/success?token=${token}`);

    } catch (error: any) {
        console.error('Google Auth Error:', error);
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        return NextResponse.redirect(`${baseUrl}/login?error=google_auth_failed`);
    }
}
