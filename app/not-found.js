'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className='notfound-container flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 h-full w-full bg-charcoal-gray'>
      <h1 className='notfound text-6xl text-flame-orange'>404 - Page Not Found</h1>
      <p className='redirecting mt-5 text-3xl text-warm-white'>Redirecting to the homepage...</p>
    </div>
  );
}
