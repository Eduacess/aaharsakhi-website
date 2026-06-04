
export default function CultureSupport() {

  const supports = [
    {
      title: "Culturally Familiar Meals",
      description:
        "We believe nourishment should feel comforting and realistic, not disconnected from the foods you grew up with.",
      icon: "🍲",
    },

    {
      title: "Guidance In Your Language",
      description:
        "Because feeling understood matters. Our support is designed to feel emotionally safe, personal, and easy to connect with.",
      icon: "🕊️",
    },

    {
      title: "Gentle & Sustainable Changes",
      description:
        "We focus on small, manageable habits that naturally fit into your everyday life without overwhelming restrictions.",
      icon: "🌿",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#fffaf5]">

      {/* Soft Glow */}
      <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-[#f2dfc7] rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">

        {/* Heading */}
        <div className="max-w-[950px] mx-auto text-center">

          <h2 className="text-[44px] lg:text-[68px] leading-[1.1] tracking-[-3px] font-semibold text-[#2f372f]">

            Care Designed Around
            <br />
            Your Culture & Lifestyle

          </h2>

          <p className="mt-8 text-[#7d6a57] text-[18px] leading-[2] max-w-[760px] mx-auto">

            Healthy eating should never feel unfamiliar,
            emotionally stressful, or disconnected from your life.
            AaharSakhi brings together compassionate nutrition support
            rooted in comfort, culture, language, and sustainable care.

          </p>

        </div>

        {/* Support Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {supports.map((support) => (

            <div
              key={support.title}
              className="bg-white/75 backdrop-blur-xl border border-[#efe3d3] rounded-[36px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#f5eadc] flex items-center justify-center text-2xl">
                {support.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-[26px] leading-[1.3] font-semibold text-[#2f372f]">

                {support.title}

              </h3>

              {/* Description */}
              <p className="mt-5 text-[#6f5d4b] text-[17px] leading-[2]">

                {support.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
