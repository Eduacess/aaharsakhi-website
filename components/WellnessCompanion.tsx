import Link from "next/link";
import {
  Activity,
  Bell,
  BookOpen,
  HeartHandshake,
  Apple,
  Soup,
} from "lucide-react";

export default function WellnessCompanion() {
  const features = [
    {
      icon: Activity,
      title: "Track Progress",
      description:
        "Keep track of sugar, BP, weight and wellness trends in one place.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description:
        "Stay consistent with medications, hydration and appointments.",
    },
    {
      icon: BookOpen,
      title: "Wellness Journal",
      description:
        "Capture daily reflections, wins and experiences throughout your journey.",
    },
    {
      icon: HeartHandshake,
      title: "Expert Support",
      description:
        "Reach out to your Sakhi whenever you need guidance and encouragement.",
    },
    {
      icon: Apple,
      title: "Personalized Nutrition",
      description:
        "Nutrition recommendations tailored to your health needs and lifestyle.",
    },
    {
      icon: Soup,
      title: "Recipes & Resources",
      description:
        "Healthy recipes, meal ideas and wellness resources for everyday life.",
    },
  ];

  return (
    <section className="bg-transparent pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">

          {/* LEFT SIDE */}

          <div>

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#B67A42]
                text-sm
                font-semibold
              "
            >
              WELLNESS COMPANION
            </span>

            <h2
              className="
                mt-4
                text-4xl
                md:text-[50px]
                font-bold
                text-[#34251D]
                leading-tight
              "
            >
              More than a diet chart.
              <br />
              A companion for your
              wellness journey.
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#6B5A4B]
              "
            >
              AaharSakhi combines expert nutrition guidance,
              wellness tools, reminders, progress tracking
              and continuous support to help you stay
              consistent throughout your health journey.
            </p>

            <div
              className="
                mt-6
                border-l-4
                border-[#D6B18C]
                pl-5
              "
            >
              <p
                className="
                  italic
                  text-[#6B5A4B]
                  leading-7
                "
              >
                Built for Indian families who need
                personalized nutrition, practical
                guidance and ongoing support between
                consultations.
              </p>
            </div>

            <Link
              href="/login"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                bg-[#4A2C22]
                hover:bg-[#5C3829]
                text-white
                px-8
                py-4
                rounded-full
                font-medium
                transition
              "
            >
              See How It Works
            </Link>

          </div>

          {/* RIGHT SIDE */}

          <div className="lg:pl-4 lg:pt-6">

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title}>

                    <Icon
                      size={26}
                      className="text-[#B67A42]"
                    />

                    <h3
                      className="
                        mt-4
                        text-xl
                        font-semibold
                        text-[#34251D]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[#6B5A4B]
                        leading-7
                      "
                    >
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}