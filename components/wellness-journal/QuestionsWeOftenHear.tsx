'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function QuestionsWeOftenHear() {

const [openIndex, setOpenIndex] = useState<number | null>(0);

return (

<section className="py-24">

  <div className="max-w-[1000px] mx-auto px-6 lg:px-16">

    <div className="text-center">

      <div className="flex items-center justify-center gap-5 mb-8">

        <div className="w-14 h-[1px] bg-[#d8c4ad]" />

        <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">
          Questions We Often Hear
        </span>

        <div className="w-14 h-[1px] bg-[#d8c4ad]" />

      </div>

      <h2 className="text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

        Frequently Asked
        <br />
        Questions

      </h2>

    </div>

    <div className="mt-16 space-y-5">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="
            bg-white
            rounded-[28px]
            border
            border-[#efe4d6]
            overflow-hidden
          "
        >

          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="
              w-full
              px-8
              py-6
              flex
              justify-between
              items-center
              text-left
            "
          >

            <span className="text-[#2f372f] text-[20px] font-medium">
              {faq.question}
            </span>

            <span className="text-[#b08b66] text-[24px]">
              {openIndex === index ? '−' : '+'}
            </span>

          </button>

          {openIndex === index && (

            <div className="px-8 pb-8">

              <p className="text-[#6f5d4b] leading-[1.9]">
                {faq.answer}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>

  </div>

</section>

);

}