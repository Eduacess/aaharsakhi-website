const reviews = [
  {
    name: 'Priya Shah',
    location: 'Toronto, Canada',

    review:
      'After my cancer treatment, food started feeling emotionally exhausting for me. AaharSakhi helped me slowly rebuild comfort around eating again with patience, kindness, and support that truly felt human.',
  },

  {
    name: 'Ritika Menon',
    location: 'Dubai, UAE',

    review:
      'During pregnancy, I often felt confused about what was actually right for my body. The guidance felt calming, realistic, and deeply supportive throughout the journey.',
  },

  {
    name: 'Anjali Patel',
    location: 'London, UK',

    review:
      'Managing diabetes had started making everyday meals stressful for me. What I appreciated most was how practical and culturally familiar the guidance felt without making life overwhelming.',
  },

  {
    name: 'Kavya Iyer',
    location: 'Singapore',

    review:
      'Nothing ever felt rushed or clinical. Every conversation felt thoughtful, comforting, and emotionally safe during a time when I genuinely needed support.',
  },

  {
    name: 'Neha Reddy',
    location: 'Melbourne, Australia',

    review:
      'I never felt judged for my eating habits or lifestyle. The support helped me build healthier routines in a way that felt gentle and sustainable.',
  },

  {
    name: 'Sneha Desai',
    location: 'New Jersey, USA',

    review:
      'Living away from India, I missed food that felt emotionally comforting and familiar. AaharSakhi helped me reconnect with healthier eating without losing that feeling of home.',
  },
];

export default function TrustRibbon() {

  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="relative pt-10 pb-32 overflow-hidden bg-[#fcfaf7]">

      {/* Soft Glow */}
      <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="text-center px-6">

          <h2 className="text-[46px] lg:text-[64px] leading-[1.1] tracking-[-2px] font-semibold text-[#2f372f]">

            Stories Of Healing
            <br />
            And Support

          </h2>

          <p className="mt-8 text-[#7d6a57] text-[18px] leading-[2] max-w-[760px] mx-auto">

            Gentle experiences shared by individuals across the world
            who found comfort, emotional support, and culturally familiar
            nourishment guidance through AaharSakhi.

          </p>

        </div>

        {/* Infinite Moving Reviews */}
        <div className="mt-16 overflow-hidden w-full">

          <div className="marquee-track flex gap-8 w-max">

            {duplicatedReviews.map((item, index) => (

              <div
                key={index}
                className="min-w-[520px] max-w-[520px] bg-white/85 backdrop-blur-xl border border-[#efe3d3] rounded-[36px] p-10 shadow-[0_15px_60px_rgba(0,0,0,0.05)] flex-shrink-0"
              >

                {/* Stars */}
                <div className="text-[#c29a73] text-[18px] tracking-[3px]">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="mt-8 text-[#5f5245] text-[17px] leading-[2]">

                  {item.review}

                </p>

                {/* User */}
                <div className="mt-10">

                  <h4 className="text-[#2f372f] text-[20px] font-semibold">

                    {item.name}

                  </h4>

                  <p className="mt-2 text-[#9a8b7c] text-sm tracking-wide">

                    {item.location}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
