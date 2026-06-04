const cards = [
  {
    title: 'Supports Gentle Healing',
    icon: '🤍',
  },

  {
    title: 'Brings Comfort To Everyday Eating',
    icon: '🌿',
  },

  {
    title: 'Helps Build Lasting Strength',
    icon: '✨',
  },

  {
    title: 'Supports Mother & Baby Nourishment',
    icon: '🌸',
  },

  {
    title: 'Encourages Emotional Wellbeing',
    icon: '🕊️',
  },

  {
    title: 'Helps Create Balanced Food Habits',
    icon: '🍃',
  },

  {
    title: 'Supports Recovery With Care',
    icon: '☀️',
  },

  {
    title: 'Nurtures Inner Balance',
    icon: '🌼',
  },

  {
    title: 'Makes Healthy Eating Feel Familiar',
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
            How Nutrition Supports Healing
          </h2>

          <p className="mt-5 text-[#7d6a57] text-[17px] max-w-[850px] mx-auto leading-[1.9]">

            Nourishment is not just about food.
            It is about feeling supported, understood,
            cared for, and emotionally safe while building
            healthier habits that fit naturally into your life.

          </p>

        </div>

        {/* Floating Cards */}
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
