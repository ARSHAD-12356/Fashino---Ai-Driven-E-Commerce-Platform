import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        await connectDB();

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            // For security, don't reveal if user exists or not
            // But for this project, we might want to be helpful or stick to standard practice
            // Let's return success even if user not found to prevent enumeration, 
            // BUT the user asked for "Backend checks if user exists". 
            // If I return success here, the frontend will show "Email sent", but no email is sent.
            // Let's return a generic error or specific one if user prefers. 
            // The prompt says: "If yes -> generate... If no -> ?" 
            // I'll return a 404 for now to be explicit as per "checks if user exists".
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        // Save to DB
        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();

        // Send Email
        // Note: In a real app, use environment variables. 
        // If not present, we'll log to console for testing.
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Password Reset OTP - Fashino',
                text: `Your OTP for password reset is: ${otp}. It expires in 5 minutes.`,
                html: `<p>Your OTP for password reset is: <strong>${otp}</strong></p><p>It expires in 5 minutes.</p>`,
            });
        } else {
            console.log(`[DEV MODE] OTP for ${email}: ${otp}`);
        }

        return NextResponse.json({ message: 'OTP sent successfully' });

    } catch (error: any) {
        console.error('Forgot Password Error:', error);
        // Return specific error message for debugging
        return NextResponse.json({
            error: error.message || 'Internal server error',
            details: error.toString()
        }, { status: 500 });
    }
}
