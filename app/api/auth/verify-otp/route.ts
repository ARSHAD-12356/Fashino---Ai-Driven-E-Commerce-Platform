import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';

export async function POST(request: NextRequest) {
    try {
        const { email, otp } = await request.json();

        if (!email || !otp) {
            return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
        }

        await connectDB();

        const user = await User.findOne({
            email: email.toLowerCase(),
            otp: otp,
            otpExpires: { $gt: new Date() } // Check if not expired
        });

        if (!user) {
            return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
        }

        // OTP is valid
        return NextResponse.json({ message: 'OTP verified successfully' });

    } catch (error: any) {
        console.error('Verify OTP Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
