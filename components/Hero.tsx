export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-[#f2dfc7] rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] bg-[#efe5d6] rounded-full blur-3xl opacity-50"></div>

      {/* Content */}
      <div className="max-w-[1700px] mx-auto px-8 lg:px-16 pt-44 pb-24 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side */}
        <div>
          <div className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#efe2d1] text-[#a17f5d] text-sm tracking-wide shadow-sm">
            Personalized Wellness & Nourishment
          </div>

          <h1 className="mt-10 text-[62px] lg:text-[88px] leading-[1.05] font-semibold tracking-[-3px] text-[#2f372f]">
            Wellness
            <br />
            Designed Around
            <br />
            Your Journey.
          </h1>

          <p className="mt-10 text-[18px] leading-[2] text-[#7c6a58] max-w-[700px]">
            AaharSakhi supports mindful nourishment journeys through
            culturally-rooted wellness, emotional care, and personalized
            guidance designed for every stage of life.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5 mt-12">
            <button className="bg-gradient-to-r from-[#d8bea2] to-[#caa27c] hover:opacity-90 transition duration-300 text-white px-10 py-4 rounded-full text-[16px] tracking-wide shadow-xl">
              Begin Your Journey
            </button>

            <button className="border border-[#e4d4c3] bg-white/60 backdrop-blur-md px-10 py-4 rounded-full text-[16px] text-[#7d6a57] hover:border-[#caa27c] transition">
              Login
            </button>
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
            className="relative rounded-[50px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] object-cover h-[750px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
