
import Link from "next/link";

export default function Hero() {

  return (

    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-[#f2dfc7] rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] bg-[#efe5d6] rounded-full blur-3xl opacity-50"></div>

      {/* Content */}
      <div className="max-w-[1700px] mx-auto px-8 lg:px-16 pt-32 pb-16 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Side */}
        <div>

          <h1 className="text-[62px] lg:text-[88px] leading-[1.02] font-semibold tracking-[-3px] text-[#2f372f]">

            Nutrition Care
            <br />
            Rooted In Comfort,
            <br />
            Culture & Compassion.

          </h1>

          <p className="mt-8 text-[18px] leading-[2] text-[#7c6a58] max-w-[700px]">

            Whether you&apos;re Navigating Diabetes,
            Fighting Cancer, or Building a New Life inside you,
            AaharSakhi is here to care for you through compassionate
            nutrition support rooted in your culture, lifestyle,
            emotions, language, and familiar meals.

          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5 mt-12 flex-wrap">

            {/* Speak To A Sakhi */}
            <a
              href="https://wa.me/919106094119?text=Hello%20AaharSakhi%2C%20I%20would%20like%20to%20begin%20my%20healing%20journey.%0A%0AName%3A%0APhone%20Number%3A%0AProgram%20Interested%20In%3A%0APreferred%20Language%3A"
              target="_blank"
              className="bg-gradient-to-r from-[#d8bea2] to-[#caa27c] hover:opacity-90 transition duration-300 text-white px-10 py-4 rounded-full text-[16px] tracking-wide shadow-xl"
            >
              Speak To A Sakhi
            </a>

            {/* Login */}
            <Link
              href="/login"
              className="border border-[#e4d4c3] bg-white/60 backdrop-blur-md px-10 py-4 rounded-full text-[16px] text-[#7d6a57] hover:border-[#caa27c] transition"
            >
            Login
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-[#f0dfca] rounded-[50px] blur-3xl opacity-40 scale-110"></div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
            alt="AaharSakhi Wellness"
            className="relative rounded-[50px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] object-cover h-[720px] w-full"
          />

        </div>

      </div>

    </section>

  );
}