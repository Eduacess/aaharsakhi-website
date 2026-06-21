'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import SayItWithSakhi from '@/components/wellness-journal/SayItWithSakhi';
import SakhiKaKhajana from '@/components/wellness-journal/SakhiKaKhajana';
import StoriesThatInspire from '@/components/wellness-journal/StoriesThatInspire';

import JourneyCTA from '@/components/JourneyCTA';

export default function WellnessJournalPage() {
return (

<main
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-[#fcfaf7]
    via-[#faf6f1]
    to-[#f7efe5]
  "
>

  {/* Background Glow */}

  <div className="absolute inset-0 pointer-events-none">

    <div
      className="
        absolute
        top-[-300px]
        left-[-200px]
        w-[900px]
        h-[900px]
        bg-[#f1dfca]
        rounded-full
        blur-[180px]
        opacity-50
      "
    />

    <div
      className="
        absolute
        bottom-[-300px]
        right-[-200px]
        w-[900px]
        h-[900px]
        bg-[#f7ebe0]
        rounded-full
        blur-[180px]
        opacity-50
      "
    />

  </div>

  <div className="relative z-10">

    <Navbar />

    {/* Wellness Quote */}

    <section className="relative py-6">

      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

        <div className="text-center">

          <p
            className="
              text-[#8a745e]
              text-[16px]
              lg:text-[22px]
              italic
              font-light
              leading-[1.8]
              font-serif
              text-center
            "
          >

            <span className="text-[#d7b998] text-[26px] lg:text-[34px] mr-2">
              “
            </span>

            Small rituals of nourishment often become the foundation of meaningful healing.

            <span className="text-[#d7b998] text-[26px] lg:text-[34px] ml-2">
              ”
            </span>

          </p>

        </div>

      </div>

    </section>

    <SayItWithSakhi />

    <SakhiKaKhajana />

    <StoriesThatInspire />

    <JourneyCTA />

    <Footer />

  </div>

</main>

);
}