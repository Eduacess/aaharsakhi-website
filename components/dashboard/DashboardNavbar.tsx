'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardNavbar() {

  const pathname = usePathname();

  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'My Tracker',
      href: '/my-tracker',
    },
    {
      name: 'Medicines',
      href: '/medicines',
    },
    {
      name: 'Profile',
      href: '/profile',
    },
  ];

  return (

    <div className="px-6 pt-6">

      {/* NAVIGATION BAR */}

      <div
        className="
        w-full h-[74px]
        rounded-[26px]
        bg-[#fffaf5]
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        flex items-center justify-between
        px-4 overflow-x-auto
      "
      >

        {/* LEFT */}

        <div className="flex items-center gap-3 min-w-fit">

          <img
            src="/logo.png"
            alt="Aahar Sakhi"
            className="w-[48px] h-[48px] object-contain"
          />

          <h2
            className="
            text-[22px]
            font-semibold
            tracking-[-1px]
            text-[#40342d]
            whitespace-nowrap
          "
          >

            Aahar Sakhi

          </h2>

        </div>

        {/* NAVIGATION BUTTONS */}

        <div className="flex items-center gap-3 ml-6 min-w-fit">

          {navItems.map((item) => {

            const isActive = pathname === item.href;

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`
                  h-[48px]
                  px-5
                  rounded-full
                  text-[14px]
                  font-medium
                  flex items-center justify-center
                  whitespace-nowrap
                  transition-all
                  ${
                    isActive
                      ? 'bg-[#cba789] text-white'
                      : 'bg-[#f4ece3] text-[#5f4b3c] hover:bg-[#eadccc]'
                  }
                `}
              >

                {item.name}

              </Link>

            );

          })}

        </div>

      </div>

    </div>

  );

}