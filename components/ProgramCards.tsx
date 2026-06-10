
const programs = [
  {
    key: 'cancer',

    title: 'Cancer Poshanam',

    description:
      'Gentle nutrition support thoughtfully designed to bring comfort, strength, emotional wellbeing, and nourishing care through every stage of the healing journey.',

    image:
      'https://www.news-medical.net/images/news/ImageForNews_803331_17405246138373449.jpg',
  },

  {
    key: 'pregnancy',

    title: 'Vatsalya Poshanam',

    description:
      'Compassionate nourishment guidance created to support pregnancy, motherhood, postpartum recovery, emotional balance, and the beautiful journey of nurturing new life.',

    image:
      'https://forwhenhelpline.org.au/wp-content/uploads/2025/06/pregnancy-tummy-scaled.jpg',
  },

  {
    key: 'diabetes',

    title: 'Diabetes Poshanam',

    description:
      'Sustainable nutrition support focused on balanced eating habits, steady energy, emotional wellness, and creating healthier routines that feel realistic and comforting.',

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
        <div className="max-w-[950px] mx-auto text-center">

          <h2 className="text-[48px] lg:text-[72px] leading-[1.08] tracking-[-3px] font-semibold text-[#2f372f]">

            How We Support You

          </h2>

          <p className="mt-8 text-[#7d6a57] text-[19px] leading-[2.1] max-w-[760px] mx-auto">

            Every health journey feels different.
            Our nourishment programs are thoughtfully designed to offer
            emotional support, culturally familiar guidance,
            and sustainable nutrition care that gently fits into everyday life.

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

                <a
                  href={`/about?program=${program.key}`}
                  className="text-[#c29a73] text-[16px] tracking-wide hover:tracking-[1.5px] transition duration-300"
                >
                  Learn More →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
