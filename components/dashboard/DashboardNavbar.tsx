'use client';

import Link from 'next/link';

export default function DashboardNavbar() {

  return (

    <header className="w-full border-b border-[#eadccc] bg-[#fffaf5]">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* LEFT SIDE */}

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="AaharSakhi"
            className="w-[60px] h-[60px] object-contain"
          />

        </div>

        {/* CENTER */}

        <div className="flex-1 text-center px-10">

          <h1 className="text-[30px] lg:text-[40px] font-semibold tracking-[-1px] text-[#40342d]">

            Welcome Back, Manali 🌸

          </h1>

          <p className="mt-2 text-[14px] italic text-[#7b6f63]">

            “Healing begins gently, one nourishing step at a time.”

          </p>

        </div>

        {/* RIGHT SIDE */}

        <nav className="flex items-center gap-3 lg:gap-5">

          <Link
            href="/dashboard"
            className="px-5 h-[46px] rounded-full bg-[#f3e7da]
            hover:bg-[#ead8c2]
            transition-all duration-300
            flex items-center justify-center
            text-[14px] font-medium text-[#4b382d]"
          >

            Dashboard

          </Link>

          <Link
            href="/dashboard/tracker"
            className="px-5 h-[46px] rounded-full bg-[#f3e7da]
            hover:bg-[#ead8c2]
            transition-all duration-300
            flex items-center justify-center
            text-[14px] font-medium text-[#4b382d]"
          >

            My Tracker

          </Link>

          <Link
            href="/dashboard/medicine"
            className="px-5 h-[46px] rounded-full bg-[#f3e7da]
            hover:bg-[#ead8c2]
            transition-all duration-300
            flex items-center justify-center
            text-[14px] font-medium text-[#4b382d]"
          >

            My Medicine

          </Link>

          <Link
            href="/dashboard/profile"
            className="px-5 h-[46px] rounded-full bg-[#cba789]
            hover:opacity-90
            transition-all duration-300
            flex items-center justify-center
            text-[14px] font-medium text-white"
          >

            Profile

          </Link>

        </nav>

      </div>

    </header>

  );

}
