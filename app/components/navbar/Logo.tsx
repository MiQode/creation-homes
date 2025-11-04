'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <span
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer font-bold text-2xl text-rose-500"
    >
      CreationHomes
    </span>
    // <Image
    //   onClick={() => router.push('/')}
    //   alt="Logo"
    //   className="hidden md:block cursor-pointer"
    //   height="100"
    //   width="100"
    //   src="/images/logo.png"
    // />
  );
};

export default Logo;
