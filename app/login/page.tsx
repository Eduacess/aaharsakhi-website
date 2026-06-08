'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageModal from '@/components/dashboard/LanguageModal';

export default function LoginPage() {

return (

<main className="min-h-screen bg-[#f8f6f2]">

  {/* Navbar */}

  <Navbar />

  {/* Language Switcher */}

  <div className="
    flex
    justify-end
    px-4
    sm:px-6
    lg:px-10
    pt-6
  ">

    <LanguageModal />

  </div>

  {/* Login Section */}

  <div className="
    flex
    items-center
    justify-center
    px-4
    sm:px-6
    py-10
    sm:py-16
  ">

    <div className="
      w-full
      max-w-md
      bg-[#fffdf9]
      border
      border-[#ece7df]
      rounded-[28px]
      sm:rounded-[32px]
      shadow-sm
      p-6
      sm:p-8
      md:p-10
    ">

      {/* Top Tag */}

      <div className="
        flex
        items-center
        gap-3
        mb-6
      ">

        <div className="
          w-10
          h-[1px]
          bg-[#b8aea2]
        " />

        <p className="
          text-[11px]
          tracking-[0.28em]
          uppercase
          text-[#8b8175]
        ">

          AaharSakhi Login

        </p>

      </div>

      {/* Heading */}

      <h1 className="
        text-[34px]
        sm:text-[42px]
        leading-[1.1]
        font-light
        text-[#1e1e1e]
        mb-4
      ">

        Welcome
        <br />
        Back

      </h1>

      {/* Description */}

      <p className="
        text-[14px]
        sm:text-[15px]
        leading-[1.8]
        text-[#6f6a63]
        mb-10
      ">

        Access your AaharSakhi wellness space using the login credentials
        shared with you during registration.

      </p>

      {/* Login Form */}

      <form className="space-y-5">

        {/* User ID */}

        <div>

          <label className="
            block
            text-[13px]
            text-[#5c554d]
            mb-2
          ">

            User ID

          </label>

          <input
            type="text"
            placeholder="Enter your user ID"
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-[#ddd6cc]
              bg-white
              px-5
              text-[15px]
              outline-none
              focus:border-[#bca58a]
              transition-all
            "
          />

        </div>

        {/* Password */}

        <div>

          <label className="
            block
            text-[13px]
            text-[#5c554d]
            mb-2
          ">

            Password

          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-[#ddd6cc]
              bg-white
              px-5
              text-[15px]
              outline-none
              focus:border-[#bca58a]
              transition-all
            "
          />

        </div>

        {/* Help Link */}

        <div className="flex justify-end">

          <a
            href="https://wa.me/919106094119"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[13px]
              text-[#8a7761]
              hover:text-[#5f5143]
              transition-all
            "
          >

            Need assistance accessing your account?

          </a>

        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="
            w-full
            h-14
            rounded-full
            bg-[#1e1e1e]
            text-white
            text-[14px]
            tracking-[0.18em]
            uppercase
            hover:opacity-90
            transition-all
            mt-3
          "
        >

          Login

        </button>

      </form>

      {/* Bottom Text */}

      <div className="
        mt-10
        border-t
        border-[#ece7df]
        pt-6
      ">

        <p className="
          text-[13px]
          leading-[1.8]
          text-[#8b8175]
          text-center
        ">

          Your login credentials are securely shared with you after
          registration and onboarding with AaharSakhi.

        </p>

      </div>

    </div>

  </div>

  {/* Footer */}

  <Footer />

</main>

);

}