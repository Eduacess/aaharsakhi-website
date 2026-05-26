const cards = [
  {
    title: 'Drive Physical Vitality',
    icon: '🌿',
  },

  {
    title: 'Fuel Cellular Repair',
    icon: '✨',
  },

  {
    title: 'Catalyzes Growth',
    icon: '🌸',
  },

  {
    title: 'Promotes Longevity',
    icon: '☀️',
  },

  {
    title: 'Fortifies Immune Resilience',
    icon: '🕊️',
  },

  {
    title: 'Powers Everyday Wellness',
    icon: '🍃',
  },

  {
    title: 'Supports Gentle Healing',
    icon: '🤍',
  },

  {
    title: 'Encourages Inner Balance',
    icon: '🌼',
  },

  {
    title: 'Nurtures Mindful Living',
    icon: '🪷',
  },
];

export default function NourishmentCards() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[42px] lg:text-[56px] tracking-[-2px] font-semibold text-[#2f372f]">
            Why Right Nourishment Matters
          </h2>

          <p className="mt-5 text-[#7d6a57] text-[17px] max-w-[800px] mx-auto leading-[1.9]">
            Thoughtful nourishment supports healing, balance, vitality,
            emotional wellness, and everyday living through every stage of life.
          </p>
        </div>

        {/* Floating Luxury Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex items-center gap-4 bg-white/75 backdrop-blur-xl border border-[#efe3d3] px-7 py-5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#f5eadc] flex items-center justify-center text-lg shrink-0">
                {card.icon}
              </div>

              {/* Text */}
              <p className="text-[15px] lg:text-[16px] tracking-wide text-[#6f5d4b] font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
