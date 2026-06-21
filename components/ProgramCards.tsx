export default function ProgramCards() {
  const programs = [
    {
      title: "Diabetes Poshanam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsvCM0uZtDXn52xEtONRSS7nCsbXrsShZ7Pmts2KaClpNlUm-2Smc8RU-&s=10",
      description:
        "Balanced nourishment journeys focused on sustainable diabetes care, mindful routines, steady energy, emotional wellbeing and long-term support.",
    },
    {
      title: "Cancer Poshanam",
      image:
        "https://www.news-medical.net/images/news/ImageForNews_803331_17405246138373449.jpg",
      description:
        "Thoughtfully guided nourishment support designed to accompany individuals through every stage of the cancer journey.",
    },
    {
      title: "Vatsalya Poshanam",
      image:
        "https://forwhenhelpline.org.au/wp-content/uploads/2025/06/pregnancy-tummy-scaled.jpg",
      description:
        "Mindful nourishment support designed for every stage of motherhood including pregnancy wellness, postpartum nourishment and recovery care.",
    },
  ];

  return (
    <section
      id="programs"
      className="bg-transparent pt-8 pb-20 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p
            className="
              uppercase
              tracking-[3px]
              text-[#B67A42]
              font-semibold
              text-sm
              mb-4
            "
          >
            Our Programs
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#34251D]
              max-w-4xl
              mx-auto
              leading-tight
            "
          >
            Specialized nutrition support
            for every important phase
            of health.
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {programs.map((program) => (

            <div
              key={program.title}
              className="
                group
                relative
                h-[520px]
                rounded-[38px]
                overflow-hidden
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >

              <img
                src={program.image}
                alt={program.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              {/* Default View */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-8
                  transition-all
                  duration-500
                  group-hover:opacity-0
                "
              >

                <h3
                  className="
                    text-white
                    text-[30px]
                    leading-tight
                    font-semibold
                  "
                >
                  {program.title}
                </h3>

              </div>

              {/* Hover Content */}

              <div
                className="
                  absolute
                  inset-0
                  p-8
                  flex
                  flex-col
                  justify-end
                  bg-black/45
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              >

                <h3
                  className="
                    text-white
                    text-[30px]
                    font-semibold
                  "
                >
                  {program.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-white/90
                    leading-7
                  "
                >
                  {program.description}
                </p>

                <span
                  className="
                    mt-6
                    inline-flex
                    items-center
                    text-[#F5D6B1]
                    font-medium
                  "
                >
                  Explore Program →
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}