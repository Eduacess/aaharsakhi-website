"use client";

import { useState } from "react";

export default function DashboardNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        w-full
        bg-[#eef5fb]
        border-b
        border-[#e7ddd2]
        px-4
        py-4
        relative
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="AaharSakhi"
            className="
              w-14
              h-14
              rounded-full
              object-cover
            "
          />

          <div>
            <h1
              className="
                text-[24px]
                sm:text-[32px]
                leading-none
                font-bold
                text-[#243042]
              "
            >
              AaharSakhi
            </h1>

            <p
              className="
                text-[#5d6570]
                text-xs
                sm:text-sm
                mt-1
              "
            >
              Personalized Wellness Dashboard
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
          "
        >
          <button
            onClick={() => window.location.href = "/dashboard"}
            className="
              bg-[#8d3f3f]
              text-white
              rounded-2xl
              px-5
              py-3
              font-medium
              hover:bg-[#733232]
              transition
            "
          >
            Dashboard
          </button>

          <button
            onClick={() => window.location.href = "/dashboard/tracker"}
            className="
              bg-[#fffaf5]
              border
              border-[#eadfd2]
              rounded-2xl
              px-5
              py-3
              font-medium
              text-[#3d3027]
              hover:bg-[#f8efe8]
              transition
            "
          >
            My Tracker
          </button>

          <button
            onClick={() => window.location.href = "/dashboard/medications"}
            className="
              bg-[#fffaf5]
              border
              border-[#eadfd2]
              rounded-2xl
              px-5
              py-3
              font-medium
              text-[#3d3027]
              hover:bg-[#f8efe8]
              transition
            "
          >
            My Medications
          </button>

          <button
            onClick={() => window.location.href = "/dashboard/profile"}
            className="
              w-12
              h-12
              rounded-full
              bg-[#fffaf5]
              border
              border-[#eadfd2]
              flex
              items-center
              justify-center
              text-xl
              hover:bg-[#f8efe8]
              transition
            "
          >
            👩
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-3xl
            text-[#243042]
          "
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div
          className="
            md:hidden
            mt-4
            flex
            flex-col
            gap-3
            bg-white
            border
            border-[#eadfd2]
            rounded-2xl
            p-4
            shadow-sm
          "
        >
          <button
            onClick={() => window.location.href = "/dashboard"}
            className="
              w-full
              bg-[#8d3f3f]
              text-white
              rounded-2xl
              px-5
              py-3
              font-medium
            "
          >
            Dashboard
          </button>

          <button
            onClick={() => window.location.href = "/dashboard/tracker"}
            className="
              w-full
              bg-[#fffaf5]
              border
              border-[#eadfd2]
              rounded-2xl
              px-5
              py-3
              font-medium
              text-[#3d3027]
            "
          >
            My Tracker
          </button>

          <button
            onClick={() => window.location.href = "/dashboard/medications"}
            className="
              w-full
              bg-[#fffaf5]
              border
              border-[#eadfd2]
              rounded-2xl
              px-5
              py-3
              font-medium
              text-[#3d3027]
            "
          >
            My Medications
          </button>

          <button
            onClick={() => window.location.href = "/dashboard/profile"}
            className="
              w-full
              bg-[#fffaf5]
              border
              border-[#eadfd2]
              rounded-2xl
              px-5
              py-3
              font-medium
              text-[#3d3027]
            "
          >
            My Profile
          </button>
        </div>
      )}
    </header>
  );
}