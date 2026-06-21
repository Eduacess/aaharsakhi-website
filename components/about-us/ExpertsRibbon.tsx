'use client';

export default function ExpertsRibbon() {
  const experts = [
    {
      name: 'Dr. Meera Sharma',
      specialty: 'Oncology Nutrition',
      experience: '12 Years Experience',
      description:
        'Supporting individuals through treatment, recovery, symptom management, and long-term nourishment care.',
    },

    {
      name: 'Riya Patel',
      specialty: 'Pregnancy Nutrition',
      experience: '8 Years Experience',
      description:
        'Focused on maternal wellbeing, prenatal nutrition, and nourishing healthy motherhood journeys.',
    },

    {
      name: 'Neha Kapoor',
      specialty: 'Diabetes Nutrition',
      experience: '10 Years Experience',
      description:
        'Helping individuals build sustainable habits for long-term blood sugar management and wellbeing.',
    },

    {
      name: 'Anjali Verma',
      specialty: 'Postpartum Nutrition',
      experience: '7 Years Experience',
      description:
        'Dedicated to supporting mothers through recovery, nourishment, and life after childbirth.',
    },
  ];

  const duplicatedExperts = [
    ...experts,
    ...experts,
    ...experts,
    ...experts,
  ];

  return (
    <section className="relative py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

            Our Panel Of Experts

          </h2>

          <p className="mt-6 text-[#7d6a57] text-[18px] leading-[2] max-w-[760px] mx-auto">

            Experienced nutrition professionals dedicated to
            supporting individuals through every stage of
            their wellness journey.

          </p>

        </div>

      </div>

      <div className="mt-16 overflow-hidden">

        <div className="experts-scroll flex gap-8">

          {duplicatedExperts.map((expert, index) => (

            <div
              key={index}
              className="
                min-w-[380px]
                max-w-[380px]
                bg-white/90
                backdrop-blur-xl
                border
                border-[#efe3d3]
                rounded-[36px]
                p-10
                shadow-[0_15px_60px_rgba(0,0,0,0.05)]
                flex-shrink-0
              "
            >

              <div className="w-12 h-[2px] bg-[#d8c4ad]"></div>

              <h3 className="mt-8 text-[#2f372f] text-[26px] font-semibold">

                {expert.name}

              </h3>

              <p className="mt-3 text-[#b08b66]">

                {expert.specialty}

              </p>

              <p className="mt-3 text-[#8e7b69] text-sm tracking-wide">

                {expert.experience}

              </p>

              <p className="mt-8 text-[#6f5d4b] leading-[2]">

                {expert.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}