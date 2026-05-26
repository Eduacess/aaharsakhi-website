'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-[#fdfaf6]/75 backdrop-blur-2xl border-b border-[#efe4d6]"></div>

      <nav className="relative max-w-[1700px] mx-auto px-6 lg:px-16 h-[92px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <div className="relative w-[82px] h-[82px]">
              <Image
                src="/logo.png"
                alt="AaharSakhi"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-10 lg:gap-14 text-[#6f5d4b] text-[15px] tracking-[1px]">
          <Link
            href="/"
            className="hover:text-[#2f372f] transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#2f372f] transition duration-300"
          >
            About Us
          </Link>

          <Link
            href="/wellness-journal"
            className="hover:text-[#2f372f] transition duration-300"
          >
            Wellness Journal
          </Link>

          <Link
            href="/connect-us"
            className="hover:text-[#2f372f] transition duration-300"
          >
            Connect Us
          </Link>

          <Link
            href="/login"
            className="hover:text-[#2f372f] transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
