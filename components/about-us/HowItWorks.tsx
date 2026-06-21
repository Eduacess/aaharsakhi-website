'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description:
        'Begin your journey by creating your personal AaharSakhi account.',
    },

    {
      number: '02',
      title: 'Choose Your Plan',
      description:
        'Select the support plan that best aligns with your needs and goals.',
    },

    {
      number: '03',
      title: 'Connect With Your Sakhi',
      description:
        'Receive personalized nutrition guidance and dedicated support.',
    },

    {
      number: '04',
      title: 'Grow Through Guided Support',
      description:
        'Access your dashboard, track progress, and stay supported throughout your journey.',
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        <div className="text-center">

          <div className="flex items-center justify-center gap-4">

            <div className="w-14 h-[1px] bg-[#d8c4ad]" />

            <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

              Your Journey With AaharSakhi

            </span>

            <div className="w-14 h-[1px] bg-[#d8c4ad]" />

          </div>

          <h2 className="mt-8 text-[42px] lg:text-[72px] leading-[1.02] tracking-[-4px] font-semibold text-[#2f372f]">

            Simple • Personal • Supportive

          </h2>

          <p className="mt-8 max-w-[760px] mx-auto text-[#7d6a57] text-[18px] leading-[2]">

            A thoughtfully guided experience designed to make
            nourishment support accessible, personalized,
            and easy to integrate into everyday life.

          </p>

        </div>

        <div className="mt-24">

          <div className="grid lg:grid-cols-4 gap-10">

            {steps.map((step) => (

              <div
                key={step.number}
                className="text-center"
              >

                <div className="text-[72px] lg:text-[92px] font-light text-[#d8c4ad] leading-none">

                  {step.number}

                </div>

                <h3 className="mt-6 text-[28px] font-semibold text-[#2f372f] leading-[1.3]">

                  {step.title}

                </h3>

                <p className="mt-5 text-[#6f5d4b] text-[16px] leading-[2]">

                  {step.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}