'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import LoginModal from '../components/modals/LoginModal';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  // Optional: automatically open modal if user lands here
  useEffect(() => {
    // You could also auto-call signIn() for providers
    // Example: signIn('google', { callbackUrl })
  }, [callbackUrl]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-neutral-800">
        <h1 className="mb-4 text-center text-2xl font-semibold text-neutral-800 dark:text-white">
          Sign in to Creation Homes
        </h1>
        <LoginModal callbackUrl={callbackUrl} />
      </div>
    </div>
  );
}
