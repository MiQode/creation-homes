'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    // <span
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer font-bold text-2xl text-rose-500"
    // >
    //   CreationHomes
    // </span>
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="40"
      width="40"
      src="/images/ch-logo.png"
    />
  );
};

export default Logo;
