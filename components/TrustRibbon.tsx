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
  const duplicatedReviews = [
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
  ];

  return (
    <section className="relative pt-8 pb-12 overflow-hidden bg-transparent">

      <div className="relative z-10">

        {/* Heading */}

        <div className="text-center px-6">

          <h2
            className="
              text-[34px]
              md:text-[46px]
              lg:text-[60px]
              leading-[1.1]
              tracking-[-2px]
              font-semibold
              text-[#2f372f]
            "
          >
            Stories Of Healing
            <br />
            And Support
          </h2>

          <p
            className="
              mt-5
              text-[#7d6a57]
              text-[16px]
              lg:text-[18px]
              leading-[1.9]
              max-w-[760px]
              mx-auto
            "
          >
            Gentle experiences shared by individuals across the world
            who found comfort, emotional support and culturally familiar
            nourishment guidance through AaharSakhi.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-10 overflow-hidden w-full">

          <div className="marquee-track flex gap-5 lg:gap-6 w-max">

            {duplicatedReviews.map((item, index) => (

              <div
                key={index}
                className="
                  min-w-[320px]
                  max-w-[320px]
                  sm:min-w-[380px]
                  sm:max-w-[380px]
                  lg:min-w-[480px]
                  lg:max-w-[480px]
                  bg-[#fffdfb]
                  border
                  border-[#eadfd1]
                  rounded-[28px]
                  lg:rounded-[32px]
                  p-6
                  lg:p-8
                  shadow-sm
                  flex-shrink-0
                "
              >

                <div className="text-[#c29a73] text-[18px] tracking-[3px]">
                  ★★★★★
                </div>

                <p
                  className="
                    mt-5
                    text-[#5f5245]
                    text-[15px]
                    lg:text-[16px]
                    leading-[1.9]
                  "
                >
                  {item.review}
                </p>

                <div className="mt-7">

                  <h4
                    className="
                      text-[#2f372f]
                      text-[17px]
                      lg:text-[18px]
                      font-semibold
                    "
                  >
                    {item.name}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-[#9a8b7c]
                      text-sm
                    "
                  >
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