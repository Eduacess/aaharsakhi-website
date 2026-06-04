export default function CarePhilosophy() {
  const cards = [
    {
      title: 'Care That Listens First',
      icon: '🤍',
    },

    {
      title: 'Culturally Familiar Nourishment',
      icon: '🌿',
    },

    {
      title: 'Comfort Before Complexity',
      icon: '✨',
    },

    {
      title: 'Mindful Everyday Guidance',
      icon: '🕊️',
    },

    {
      title: 'Human Support Matters',
      icon: '🌸',
    },

    {
      title: 'Healing With Warmth',
      icon: '☀️',
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#fcfaf7]">

      {/* Soft Glow */}
      <div className="absolute top-[-220px] right-[-180px] w-[500px] h-[500px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">

        {/* Heading */}
        <div className="text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

            <p className="uppercase tracking-[5px] text-[#b08b66] text-sm font-medium">

              What We Bring To You

            </p>

            <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

          </div>

          <h2 className="mt-8 text-[34px] lg:text-[56px] leading-[1.15] tracking-[-2px] font-semibold text-[#2f372f]">

            Nourishment is not just about food.

          </h2>

          <p className="mt-8 text-[#7d6a57] text-[18px] leading-[2] max-w-[900px] mx-auto">

            It is about feeling supported, understood,
            cared for, and gently guided through every
            stage of the healing journey.

          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          {cards.map((card) => (

            <div
              key={card.title}
              className="flex items-center gap-5 bg-white/80 backdrop-blur-xl border border-[#efe3d3] rounded-full px-7 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#f5eee6] flex items-center justify-center text-xl shrink-0">

                {card.icon}

              </div>

              {/* Text */}
              <p className="text-[#6f5d4b] text-[17px] tracking-[0.3px]">

                {card.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
