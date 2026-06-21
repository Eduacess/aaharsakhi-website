'use client';

import { useState } from 'react';
import SpecializedModal from './SpecializedModal';

export default function SpecializedAreas() {
  const [selected, setSelected] = useState<any>(null);

  const programs = [
    {
      title: 'Cancer Poshanam',
      image:
        'https://www.news-medical.net/images/news/ImageForNews_803331_17405246138373449.jpg',

      designedFor: [
        'Individuals undergoing treatment',
        'Recovery journeys',
        'Long-term wellness support',
      ],

      includes: [
        'Personalized nutrition guidance',
        'Symptom-supportive meal planning',
        'Recovery nourishment',
        'Hydration support',
        'Wellness tracking',
        'Ongoing expert guidance',
      ],
    },

    {
      title: 'Matrutva Poshanam',
      image:
        'https://forwhenhelpline.org.au/wp-content/uploads/2025/06/pregnancy-tummy-scaled.jpg',

      designedFor: [
        'Pregnancy',
        'Postpartum recovery',
        'New motherhood',
      ],

      includes: [
        'Pregnancy nutrition guidance',
        'Trimester-specific support',
        'Postpartum nourishment',
        'Lactation support',
        'Maternal wellbeing',
        'Family-centered nutrition',
      ],
    },

    {
      title: 'Diabetes Poshanam',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsvCM0uZtDXn52xEtONRSS7nCsbXrsShZ7Pmts2KaClpNlUm-2Smc8RU-&s=10',

      designedFor: [
        'Diabetes management',
        'Prediabetes',
        'Lifestyle improvement',
      ],

      includes: [
        'Meal planning support',
        'Blood sugar awareness',
        'Habit-building strategies',
        'Progress tracking',
        'Recipe resources',
        'Long-term wellness support',
      ],
    },
  ];

  return (
    <section className="relative py-24">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        <div className="text-center">

          <h2 className="text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

            Our Poshanam Journeys

          </h2>

          <p className="mt-8 max-w-[850px] mx-auto text-[#7d6a57] text-[18px] leading-[2]">

            Specialized support thoughtfully designed for
            different stages of health, healing, and motherhood.

          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {programs.map((program) => (

            <button
              key={program.title}
              onClick={() => setSelected(program)}
              className="
                group
                relative
                h-[540px]
                rounded-[42px]
                overflow-hidden
                shadow-[0_25px_80px_rgba(0,0,0,0.06)]
              "
            >

              <img
                src={program.image}
                alt={program.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10 text-left">

                <h3 className="text-white text-[34px] font-semibold">
                  {program.title}
                </h3>

                <p className="mt-3 text-white/90">
                  Learn more →
                </p>

              </div>

            </button>

          ))}

        </div>

      </div>

      {selected && (
        <SpecializedModal
          isOpen={true}
          onClose={() => setSelected(null)}
          title={selected.title}
          image={selected.image}
          designedFor={selected.designedFor}
          includes={selected.includes}
        />
      )}

    </section>
  );
}