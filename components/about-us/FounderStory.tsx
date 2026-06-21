'use client';

export default function FounderStory() {
  return (
    <section className="relative py-24">

      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

          {/* Content */}

          <div>

            <h2 className="text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

              The Comfort Of
              <br />
              Being Understood

            </h2>

            <div className="mt-10 space-y-6 text-[#6f5d4b] text-[18px] leading-[2] max-w-[850px]">

              <p>
                Throughout my journey as a Pharmacist and Counselor, I have
                had the privilege of meeting individuals navigating cancer
                treatment, diabetes management, pregnancy, motherhood, and
                recovery.
              </p>

              <p>
                What stayed with me was not the complexity of their
                conditions, but the quiet reality that many felt unsupported
                in ways that mattered most. They often received advice and
                instructions, yet few felt genuinely understood.
              </p>

              <p>
                Over time, I came to believe that meaningful nourishment
                extends far beyond nutrition alone. It is rooted in empathy,
                cultural understanding, and the reassurance that someone is
                willing to walk beside you through the journey.
              </p>

              <p>
                That belief became the foundation of AaharSakhi — a space
                where science is guided by compassion, where nourishment
                respects cultural familiarity, and where individuals feel
                seen, heard, and supported.
              </p>

              <div className="pt-4 border-l-4 border-[#d8c4ad] pl-6">

                <p className="text-[#2f372f] text-[22px] leading-[1.8] italic font-medium">

                  &quot;My hope is simple — that every individual who comes to
                  AaharSakhi experiences the comfort of being understood.&quot;

                </p>

              </div>

            </div>

          </div>

          {/* Founder */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative text-center">

              <div className="absolute inset-0 bg-[#f1dfcb] rounded-full blur-3xl opacity-40 scale-125"></div>

              <div className="relative w-[240px] h-[240px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border border-[#ead9c5] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

                <img
                  src="/founder.png"
                  alt="Manali Chandan"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="mt-8">

                <h3 className="text-[#2f372f] text-[28px] font-medium">
                  Manali Chandan
                </h3>

                <p className="mt-3 text-[#9b8875] text-sm tracking-[3px] uppercase">
                  Pharmacist, Counselor
                </p>

                <p className="mt-2 text-[#9b8875] text-sm tracking-[3px] uppercase">
                  Founder, AaharSakhi
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}