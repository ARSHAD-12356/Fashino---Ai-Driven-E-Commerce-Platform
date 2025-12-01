import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';

export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        let token = cookieStore.get('auth_token')?.value;

        // Check Authorization header if no cookie
        if (!token) {
            const authHeader = request.headers.get('Authorization');
            if (authHeader && authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            }
        }

        await connectDB();
        let user = null;

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret') as any;
                user = await User.findById(decoded.userId).select('-password');
            } catch (err) {
                // Token invalid, try fallback
            }
        }

        // Fallback: Check x-user-id (for legacy support)
        if (!user) {
            const userId = request.headers.get('x-user-id');
            if (userId) {
                user = await User.findById(userId).select('-password');
            }
        }

        if (!user) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        return NextResponse.json({
            user: {
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address,
                profilePic: user.profilePic,
            }
        });

    } catch (error) {
        return NextResponse.json({ user: null }, { status: 200 });
    }
}
