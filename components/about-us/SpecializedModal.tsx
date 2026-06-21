'use client';

import Link from 'next/link';

interface SpecializedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  designedFor: string[];
  includes: string[];
}

export default function SpecializedModal({
  isOpen,
  onClose,
  title,
  image,
  designedFor,
  includes,
}: SpecializedModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
      "
    >
      <div
        className="
          bg-white
          rounded-[40px]
          overflow-hidden
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          shadow-[0_30px_120px_rgba(0,0,0,0.25)]
        "
      >
        <div className="relative">

          <img
            src={image}
            alt={title}
            className="w-full h-[320px] object-cover"
          />

          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6
              w-12
              h-12
              rounded-full
              bg-white
              text-[#2f372f]
              text-xl
              shadow-lg
            "
          >
            ✕
          </button>

        </div>

        <div className="p-8 lg:p-12">

          <h2 className="text-[42px] lg:text-[58px] leading-[1.1] font-semibold text-[#2f372f]">
            {title}
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-12">

            <div>

              <h3 className="text-[26px] font-semibold text-[#2f372f]">
                Designed For
              </h3>

              <div className="mt-6 space-y-4">

                {designedFor.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-[#b08b66]">✓</span>
                    <span className="text-[#5c4f42]">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            <div>

              <h3 className="text-[26px] font-semibold text-[#2f372f]">
                What Your Journey May Include
              </h3>

              <div className="mt-6 space-y-4">

                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="text-[#b08b66]">✓</span>
                    <span className="text-[#5c4f42]">{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          <div className="mt-12 flex flex-col lg:flex-row gap-4">

            <Link
              href="/connect-us"
              className="
                flex-1
                py-4
                rounded-full
                border
                border-[#d8c4ad]
                text-center
                text-[#2f372f]
                hover:bg-[#f8f3ec]
                transition
              "
            >
              Connect With A Sakhi
            </Link>

            <Link
              href="/login"
              className="
                flex-1
                py-4
                rounded-full
                bg-[#2f372f]
                text-white
                text-center
                hover:opacity-90
                transition
              "
            >
              Experience AaharSakhi
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}