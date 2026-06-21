'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/90 backdrop-blur-lg border-b border-[#E8DDD1]">

      <nav className="max-w-7xl mx-auto h-[88px] px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">

          <div className="relative w-[82px] h-[82px]">

            <Image
              src="/logo.png"
              alt="AaharSakhi"
              fill
              priority
              className="object-contain"
            />

          </div>

        </Link>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-12">

          <Link
            href="/"
            className="text-[#3A2A21] font-medium hover:text-[#9B6B3F] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[#3A2A21] font-medium hover:text-[#9B6B3F] transition"
          >
            About Us
          </Link>

          <Link
            href="/wellness-journal"
            className="text-[#3A2A21] font-medium hover:text-[#9B6B3F] transition"
          >
            Wellness Journal
          </Link>

          <Link
            href="/connect-us"
            className="text-[#3A2A21] font-medium hover:text-[#9B6B3F] transition"
          >
            Connect Us
          </Link>

          <Link
            href="/login"
            className="
              border
              border-[#B9824C]
              text-[#7A4B22]
              px-6
              py-2.5
              rounded-full
              font-medium
              hover:bg-[#B9824C]
              hover:text-white
              transition
            "
          >
            Login
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {menuOpen && (

        <div className="lg:hidden bg-white border-t border-[#E8DDD1] px-6 py-6 flex flex-col gap-5">

          <Link href="/">Home</Link>

          <Link href="/about">About Us</Link>

          <Link href="/wellness-journal">Wellness Journal</Link>

          <Link href="/connect-us">Connect Us</Link>

          <Link href="/login">Login</Link>

        </div>

      )}

    </header>
  );
}