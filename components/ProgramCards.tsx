const programs = [
  {
    title: 'Cancer Poshanam',

    description:
      'Compassionate nourishment support thoughtfully designed to bring comfort, healing, emotional wellness, strength, mindful recovery, and everyday vitality through every stage of care.',

    image:
      'https://www.news-medical.net/images/news/ImageForNews_803331_17405246138373449.jpg',
  },

  {
    title: 'Vatsalya Poshanam',

    description:
      'Gentle nourishment experiences created for pregnancy, motherhood, postpartum wellness, emotional balance, nurturing care, and mindful living.',

    image:
      'https://forwhenhelpline.org.au/wp-content/uploads/2025/06/pregnancy-tummy-scaled.jpg',
  },

  {
    title: 'Diabetes Poshanam',

    description:
      'Balanced nourishment journeys focused on sustainable wellness, mindful routines, steady energy, emotional wellbeing, and everyday lifestyle harmony.',

    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsvCM0uZtDXn52xEtONRSS7nCsbXrsShZ7Pmts2KaClpNlUm-2Smc8RU-&s=10',
  },
];

export default function ProgramCards() {
  return (
    <section className="relative pt-10 pb-28 overflow-hidden bg-[#fcfaf7]">
      {/* Soft Glow */}
      <div className="absolute top-[-250px] right-[-180px] w-[600px] h-[600px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Heading */}
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-[48px] lg:text-[72px] leading-[1.08] tracking-[-3px] font-semibold text-[#2f372f]">
            What We Care For
          </h2>

          <p className="mt-8 text-[#7d6a57] text-[19px] leading-[2.1] max-w-[720px] mx-auto">
            Gentle nourishment experiences thoughtfully designed for healing,
            motherhood, emotional wellness, mindful living, and everyday
            balance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative h-[540px] rounded-[42px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Front */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 transition duration-500 group-hover:opacity-0">
                <h3 className="text-white text-[34px] leading-[1.2] font-semibold">
                  {program.title}
                </h3>
              </div>

              {/* Hover */}
              <div className="absolute inset-0 bg-[#fffaf5]/95 backdrop-blur-xl p-10 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition duration-500">
                <div>
                  <p className="text-[#6f5d4b] text-[18px] leading-[2]">
                    {program.description}
                  </p>
                </div>

                <button className="text-[#c29a73] text-[16px] tracking-wide hover:tracking-[1.5px] transition duration-300">
                  Explore Journey →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
