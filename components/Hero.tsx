import Link from "next/link";
import {
  Heart,
  ClipboardList,
  Bell,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-transparent overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-[#F8F8F8]
                text-[#7B5535]
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                mb-8
              "
            >
              Nourishing Every Journey
            </div>

            <h1
              className="
                text-[48px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.03]
                font-bold
                tracking-[-2px]
                text-[#34251D]
              "
            >
              Your journey to
              <br />
              better health deserves
              <br />
              a trusted{" "}
              <span className="text-[#B67A42]">
                Sakhi
              </span>{" "}
              by your side.
            </h1>

            <div className="mt-8 max-w-2xl">

              <p className="text-xl leading-8 text-[#5C4A3C]">
                Personalized nutrition and continuous wellness
                support for Diabetes, Cancer Care, Pregnancy
                and Postpartum journeys.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#7A695A]">
                Designed around Indian food habits,
                regional preferences and everyday routines—
                combining expert nutrition guidance,
                progress tracking, smart reminders and
                ongoing support that stays with you
                beyond a single consultation.
              </p>

            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

              <div className="text-center">
                <Heart
                  size={24}
                  className="mx-auto text-[#B67A42]"
                />

                <p className="mt-3 text-sm font-medium text-[#4A2C22]">
                  Personalized
                  <br />
                  Nutrition
                </p>
              </div>

              <div className="text-center">
                <ClipboardList
                  size={24}
                  className="mx-auto text-[#B67A42]"
                />

                <p className="mt-3 text-sm font-medium text-[#4A2C22]">
                  Track
                  <br />
                  Progress
                </p>
              </div>

              <div className="text-center">
                <Bell
                  size={24}
                  className="mx-auto text-[#B67A42]"
                />

                <p className="mt-3 text-sm font-medium text-[#4A2C22]">
                  Smart
                  <br />
                  Reminders
                </p>
              </div>

              <div className="text-center">
                <Heart
                  size={24}
                  className="mx-auto text-[#B67A42]"
                />

                <p className="mt-3 text-sm font-medium text-[#4A2C22]">
                  Continuous
                  <br />
                  Support
                </p>
              </div>

            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-4 mt-12">

              <Link
                href="#programs"
                className="
                  bg-[#4A2C22]
                  hover:bg-[#5D3828]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-medium
                  flex
                  items-center
                  gap-2
                  transition
                "
              >
                Explore Programs

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/connect-us"
                className="
                  border-2
                  border-[#D6B18C]
                  text-[#4A2C22]
                  px-8
                  py-4
                  rounded-full
                  font-medium
                  hover:bg-white/70
                  transition
                "
              >
                Connect With A Sakhi
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            {/* Luxury Accent Circle */}

            <div
              className="
                absolute
                -top-6
                -right-6
                w-[260px]
                h-[260px]
                rounded-full
                bg-[#EAD5C0]
                opacity-60
              "
            />

            <img
              src="/hero-image.jpg"
              alt="AaharSakhi"
              className="
                relative
                z-10
                rounded-[40px]
                object-cover
                w-full
                h-[720px]
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}