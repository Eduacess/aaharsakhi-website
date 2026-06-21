'use client';

import { useEffect, useState } from 'react';
import { affirmations } from '@/data/affirmations';

export default function SayItWithSakhi() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setStartIndex((prev) => (prev + 3) % affirmations.length);
        setFade(true);
      }, 500);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const visibleAffirmations = [
    affirmations[startIndex % affirmations.length],
    affirmations[(startIndex + 1) % affirmations.length],
    affirmations[(startIndex + 2) % affirmations.length],
  ];

  return (
    <section className="py-10 overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-6 lg:px-16">

        <div className="flex items-center gap-5 mb-8">

          <div className="w-14 h-[1px] bg-[#d8c4ad]" />

          <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">
            Say It With Sakhi
          </span>

        </div>
        
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 transition-opacity duration-500 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >

          {visibleAffirmations.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#efe4d6] p-7 min-h-[240px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >

              <p className="text-[#d7b998] text-[50px] leading-none font-serif">
                “
              </p>

              <p className="mt-4 text-[#2f372f] text-[20px] leading-[1.8]">

                {item.quote}

              </p>

              <div className="mt-6 flex items-center justify-between">

                <p className="text-[#6f5d4b] uppercase tracking-[3px] text-xs">

                  {item.title}

                </p>

                <p className="text-[#b08b66] text-sm">

                  {item.category}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}