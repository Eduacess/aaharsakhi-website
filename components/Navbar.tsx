'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

return (

<header className="sticky top-0 z-50 w-full">

  {/* Background */}

  <div className="
    absolute
    inset-0
    bg-[#fdfaf6]/80
    backdrop-blur-2xl
    border-b
    border-[#efe4d6]
  " />

  <nav className="
    relative
    max-w-[1700px]
    mx-auto
    px-4
    sm:px-6
    lg:px-16
    h-[88px]
    flex
    items-center
    justify-between
  ">

    {/* LEFT */}

    <Link
      href="/"
      className="flex items-center gap-3 relative z-20"
    >

      <div className="
        relative
        w-[64px]
        h-[64px]
        sm:w-[74px]
        sm:h-[74px]
      ">

        <Image
          src="/logo.png"
          alt="AaharSakhi"
          fill
          className="object-contain"
          priority
        />

      </div>

    </Link>

    {/* DESKTOP NAVIGATION */}

    <div className="
      hidden
      lg:flex
      items-center
      gap-12
      text-[#6f5d4b]
      text-[15px]
      tracking-[1px]
    ">

      <Link
        href="/"
        className="hover:text-[#2f372f] transition"
      >
        Home
      </Link>

      <Link
        href="/about"
        className="hover:text-[#2f372f] transition"
      >
        About Us
      </Link>

      <Link
        href="/wellness-journal"
        className="hover:text-[#2f372f] transition"
      >
        Wellness Journal
      </Link>

      <Link
        href="/connect-us"
        className="hover:text-[#2f372f] transition"
      >
        Connect Us
      </Link>

      <Link
        href="/login"
        className="hover:text-[#2f372f] transition"
      >
        Login
      </Link>

    </div>

    {/* MOBILE MENU BUTTON */}

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="
        lg:hidden
        relative
        z-20
        text-[#4e4037]
      "
    >

      {menuOpen ? <X size={28} /> : <Menu size={28} />}

    </button>

  </nav>

{/* MOBILE MENU */}

{menuOpen && (

<div className="
  lg:hidden
  absolute
  top-[88px]
  left-0
  w-full
  bg-[#fffaf5]
  border-b
  border-[#eadfd2]
  shadow-xl
  px-6
  py-6
  flex
  flex-col
  gap-6
  text-[#4e4037]
  text-[17px]
  font-medium
  tracking-[0.5px]
  z-50
"><Link
href="/"
onClick={() => setMenuOpen(false)}
className="hover:text-[#2f372f]"
>
Home
</Link>

<Link
href="/about"
onClick={() => setMenuOpen(false)}
className="hover:text-[#2f372f]"
>
About Us
</Link>

<Link
href="/wellness-journal"
onClick={() => setMenuOpen(false)}
className="hover:text-[#2f372f]"
>
Wellness Journal
</Link>

<Link
href="/connect-us"
onClick={() => setMenuOpen(false)}
className="hover:text-[#2f372f]"
>
Connect Us
</Link>

<Link
href="/login"
onClick={() => setMenuOpen(false)}
className="hover:text-[#2f372f]"
>
Login
</Link>

</div>

)}
  
</header>

);

}