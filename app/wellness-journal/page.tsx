"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { useEffect, useState } from "react"

import { affirmations } from "@/data/affirmations"
import { wellnessArticles } from "@/data/wellnessArticles"
import { aaharSakhiGatherings } from "@/data/aaharSakhiGatherings"
import { gatherings } from "@/data/gatherings"

export default function WellnessJournalPage() {

  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setStartIndex((prev) => (prev + 3) % affirmations.length)

    }, 10000)

    return () => clearInterval(interval)

  }, [])

  const visibleAffirmations = [
    affirmations[startIndex % affirmations.length],
    affirmations[(startIndex + 1) % affirmations.length],
    affirmations[(startIndex + 2) % affirmations.length],
  ]

  return (

    <main className="overflow-hidden bg-[#fcfaf7]">

      <Navbar />

      {/* Quote */}
      <section className="relative pt-8 pb-16 overflow-hidden">

        <div className="absolute top-[-240px] left-[-180px] w-[650px] h-[650px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-[1500px] mx-auto px-6 lg:px-16 relative z-10">

          <div className="text-center">

            <p className="text-[#8a745e] text-[20px] lg:text-[32px] italic font-light leading-[1.8] font-serif max-w-[1000px] mx-auto">

              <span className="text-[#d7b998] text-[34px] lg:text-[50px] align-middle mr-2">
                “
              </span>

              Small rituals create meaningful healing.

              <span className="text-[#d7b998] text-[34px] lg:text-[50px] align-middle ml-2">
                ”
              </span>

            </p>

          </div>

        </div>

      </section>

      {/* Say It with Sakhi */}
      <section className="pb-24 overflow-hidden">

        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

            <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

              Say It With Sakhi

            </span>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 transition-all duration-700">

            {visibleAffirmations.map((item, index) => (

              <div
                key={index}
                className="rounded-[36px] bg-white border border-[#efe4d6] p-6 min-h-[300px] shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
              >

                <p className="text-[#d7b998] text-[54px] leading-none font-serif">
                  “
                </p>

                <p className="mt-5 text-[#2f372f] text-[22px] leading-[1.7] font-light">

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

      {/* Sakhi Ka Khajana */}
      <section className="pb-24 overflow-hidden">

        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

            <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

              Sakhi Ka Khajana

            </span>

          </div>

          <div className="overflow-hidden w-full">

            <div className="flex items-stretch gap-8 animate-infinite-scroll whitespace-nowrap pb-4">

              {[...wellnessArticles, ...wellnessArticles].map((article, index) => (

                <a
                  key={index}
                  href="#"
                  className="min-w-[380px] block rounded-[34px] overflow-hidden bg-white border border-[#efe4d6] shadow-[0_20px_60px_rgba(0,0,0,0.04)] cursor-pointer hover:scale-[1.02] transition duration-500"
                >

                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[240px] object-cover"
                  />

                  <div className="p-6 whitespace-normal">

                    <p className="text-[#b08b66] uppercase tracking-[3px] text-xs">

                      {article.category}

                    </p>

                    <h3 className="mt-4 text-[26px] leading-[1.2] font-semibold text-[#2f372f]">

                      {article.title}

                    </h3>

                    <p className="mt-4 text-[#6f5d4b] leading-[1.8]">

                      {article.description}

                    </p>

                  </div>

                </a>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Meet Your AaharSakhi */}
      <section className="pb-24 overflow-hidden">

        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

            <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

              Meet Your AaharSakhi

            </span>

          </div>

          {aaharSakhiGatherings.map((item, index) => (

            <div
              key={index}
              className="rounded-[40px] bg-white border border-[#efe4d6] p-14 lg:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >

              <p className="text-[#2f372f] text-[28px] lg:text-[40px] leading-[1.6] font-light max-w-[900px]">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* When We Met */}
      <section className="pb-32 overflow-hidden">

        <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

            <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

              When We Met

            </span>

          </div>

          {gatherings.map((item, index) => (

            <div
              key={index}
              className="rounded-[40px] bg-white border border-[#efe4d6] p-14 lg:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >

              <p className="text-[#2f372f] text-[28px] lg:text-[40px] leading-[1.6] font-light max-w-[900px]">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </main>

  )
}