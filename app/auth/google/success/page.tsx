'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function SuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            // Store token in localStorage
            localStorage.setItem('token', token);

            // Fetch user profile using the token
            fetch('/api/auth/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.user) {
                        // Store user in localStorage for AuthContext
                        localStorage.setItem('user', JSON.stringify(data.user));
                        // Redirect to home
                        window.location.href = '/';
                    } else {
                        router.push('/');
                    }
                })
                .catch(err => {
                    console.error('Failed to fetch user:', err);
                    router.push('/login');
                });
        } else {
            router.push('/login');
        }
    }, [searchParams, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <p className="text-muted-foreground">Completing sign in...</p>
            </div>
        </div>
    );
}

export default function GoogleSuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
