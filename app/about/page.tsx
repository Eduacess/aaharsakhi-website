'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgramModal from '@/components/ProgramModal';

export default function AboutPage() {

  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {

    const program = searchParams.get('program');

    if (
      program === 'cancer' ||
      program === 'pregnancy' ||
      program === 'diabetes'
    ) {
      setSelectedProgram(program);
    }

  }, [searchParams]);

  const programs = {
    cancer: {
      title: 'Cancer Poshanam',

      image:
        'https://www.news-medical.net/images/news/ImageForNews_803331_17405246138373449.jpg',

      description:
        'Thoughtfully guided nourishment support designed to accompany individuals through every stage of the cancer journey — from diagnosis, treatment support, emotional wellbeing, recovery nourishment, strength rebuilding, and long-term wellness care.',
    },

    pregnancy: {
      title: 'Vatsalya Poshanam',

      image:
        'https://forwhenhelpline.org.au/wp-content/uploads/2025/06/pregnancy-tummy-scaled.jpg',

      description:
        'Mindful nourishment support designed for every stage of motherhood — including pregnancy wellness, emotional balance, postpartum nourishment, recovery care, and supportive everyday wellbeing.',
    },

    diabetes: {
      title: 'Diabetes Poshanam',

      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsvCM0uZtDXn52xEtONRSS7nCsbXrsShZ7Pmts2KaClpNlUm-2Smc8RU-&s=10',

      description:
        'Balanced nourishment journeys focused on sustainable diabetes wellness, mindful routines, energy balance, emotional wellbeing, lifestyle nourishment, and long-term supportive care.',
    },
  };

  return (
    <main className="overflow-hidden bg-[#fcfaf7]">

      {/* Navbar */}
      <Navbar />

      {/* Quote Section */}
      <section className="relative pt-10 pb-14 overflow-hidden">

        <div className="absolute top-[-220px] left-[-180px] w-[500px] h-[500px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">

          <div className="text-center">

            <div className="flex items-center justify-center gap-4">

              <span className="text-[#d8b999] text-[40px] lg:text-[52px] leading-none font-serif">
                “
              </span>

              <p className="text-[18px] lg:text-[30px] italic font-light tracking-[0.3px] text-[#4d564d] leading-[1.8] font-serif">

                Take care of your body. It’s the only place you have to live.

              </p>

              <span className="text-[#d8b999] text-[40px] lg:text-[52px] leading-none font-serif">
                ”
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* Who We Are */}
      <section className="relative pb-28">

        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">

            {/* Content */}
            <div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

                <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

                  Who We Are

                </span>

              </div>

              <h2 className="mt-8 text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

                Nourishment,
                <br />
                Beyond Nutrition

              </h2>

              <div className="mt-10 space-y-7 text-[#6f5d4b] text-[17px] leading-[2.1] max-w-[820px]">

                <p>
                  Watching individuals navigate cancer, pregnancy, diabetes, and
                  emotionally demanding wellness journeys revealed how deeply
                  nourishment impacts healing, emotional wellbeing, and everyday
                  quality of life.
                </p>

                <p>
                  Yet meaningful nourishment support that truly understands
                  Indian lifestyles, emotional wellbeing, and cultural food
                  habits often remains inaccessible across the world.
                </p>

                <p>
                  AaharSakhi was envisioned to bridge that gap through mindful
                  nourishment journeys designed with empathy, comfort,
                  supportive care, and emotional understanding at their core.
                </p>

              </div>

            </div>

            {/* Founder */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative text-center">

                <div className="absolute inset-0 bg-[#f1dfcb] rounded-full blur-3xl opacity-40 scale-125"></div>

                <div className="relative w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden border border-[#ead9c5] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

                  <img
                    src="/founder.png"
                    alt="Manali Chandan"
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="mt-7">

                  <h3 className="text-[#2f372f] text-[22px] font-medium tracking-[-0.5px]">

                    Manali Chandan

                  </h3>

                  <p className="mt-2 text-[#9b8875] text-sm tracking-[3px] uppercase">

                    Founder, AaharSakhi

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Nourishment Journeys */}
      <section className="relative pb-32">

        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

          <div className="text-center">

            <div className="flex items-center justify-center gap-4">

              <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

              <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

                Nourishment Journeys

              </span>

              <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

            </div>

            <h2 className="mt-8 text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

              Thoughtfully designed
              <br />
              for every healing journey.

            </h2>

          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-10 mt-20">

            {/* Cancer */}
            <button
              onClick={() => setSelectedProgram('cancer')}
              className="group relative h-[540px] rounded-[42px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >

              <img
                src={programs.cancer.image}
                alt={programs.cancer.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10 text-left">

                <h3 className="text-white text-[34px] leading-[1.2] font-semibold">

                  {programs.cancer.title}

                </h3>

              </div>

            </button>

            {/* Pregnancy */}
            <button
              onClick={() => setSelectedProgram('pregnancy')}
              className="group relative h-[540px] rounded-[42px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >

              <img
                src={programs.pregnancy.image}
                alt={programs.pregnancy.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10 text-left">

                <h3 className="text-white text-[34px] leading-[1.2] font-semibold">

                  {programs.pregnancy.title}

                </h3>

              </div>

            </button>

            {/* Diabetes */}
            <button
              onClick={() => setSelectedProgram('diabetes')}
              className="group relative h-[540px] rounded-[42px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >

              <img
                src={programs.diabetes.image}
                alt={programs.diabetes.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10 text-left">

                <h3 className="text-white text-[34px] leading-[1.2] font-semibold">

                  {programs.diabetes.title}

                </h3>

              </div>

            </button>

          </div>

        </div>

      </section>

      {/* Modal */}
      {selectedProgram && (

        <ProgramModal
          isOpen={true}
          onClose={() => setSelectedProgram(null)}
          title={programs[selectedProgram as keyof typeof programs].title}
          image={programs[selectedProgram as keyof typeof programs].image}
          description={
            programs[selectedProgram as keyof typeof programs].description
          }
        />

      )}

      {/* Footer */}
      <Footer />

    </main>
  );
}