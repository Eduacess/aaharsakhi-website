const reviews = [
  {
    name: 'Priya Shah',
    location: 'Toronto, Canada',

    review:
      'After my cancer treatment, nourishment became emotionally overwhelming for me. AaharSakhi helped me slowly rebuild healthy eating habits with warmth, patience, and guidance that genuinely supported my recovery journey.',
  },

  {
    name: 'Ritika Menon',
    location: 'Dubai, UAE',

    review:
      'During pregnancy, I struggled with energy, digestion, and emotional stress. The nourishment support felt deeply calming and helped me feel healthier, lighter, and emotionally balanced every single day.',
  },

  {
    name: 'Anjali Patel',
    location: 'London, UK',

    review:
      'Managing diabetes had started affecting my confidence and routine. The guidance I received felt practical, emotionally comforting, and beautifully aligned with my Indian lifestyle and food habits.',
  },

  {
    name: 'Kavya Iyer',
    location: 'Singapore',

    review:
      'What truly stood out was the emotional care behind every interaction. Nothing felt clinical or rushed. The entire experience felt gentle, thoughtful, and incredibly supportive through my wellness journey.',
  },

  {
    name: 'Neha Reddy',
    location: 'Melbourne, Australia',

    review:
      'AaharSakhi helped me understand nourishment in a much more mindful and balanced way. The support felt realistic, comforting, and deeply connected to my personal wellness goals and lifestyle.',
  },

  {
    name: 'Sneha Desai',
    location: 'New Jersey, USA',

    review:
      'As someone living away from India, finding nourishment guidance that actually understood my food culture felt incredibly comforting. The experience felt warm, personal, and genuinely supportive.',
  },
];

export default function TrustRibbon() {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="relative pt-10 pb-32 overflow-hidden bg-[#fcfaf7]">
      {/* Soft Luxury Glow */}
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
            Thoughtful nourishment experiences shared by individuals across the
            world who found comfort, balance, emotional wellness, and mindful
            support through AaharSakhi.
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
