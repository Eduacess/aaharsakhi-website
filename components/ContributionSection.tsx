export default function ContributionSection() {

  return (
    <section className="relative pt-8 pb-28 overflow-hidden bg-[#fdfaf6]">

      {/* Soft Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        <div className="bg-white/75 backdrop-blur-2xl border border-[#efe3d3] rounded-[48px] px-8 lg:px-20 py-16 shadow-[0_20px_80px_rgba(0,0,0,0.04)] text-center">

          {/* Small Label */}
          <p className="uppercase tracking-[5px] text-[#b08b66] text-sm font-medium">

            AaharSakhi Care

          </p>

          {/* Heading */}
          <h2 className="mt-8 text-[46px] lg:text-[72px] leading-[1.08] tracking-[-3px] font-semibold text-[#2f372f]">

            Help Someone
            <br />
            Feel Supported

          </h2>

          {/* Description */}
          <p className="mt-10 max-w-[760px] mx-auto text-[#7d6a57] text-[18px] lg:text-[20px] leading-[2.1]">

            Your contribution helps extend compassionate nourishment support,
            emotional care, and culturally familiar guidance to individuals
            and families who may need support during difficult health journeys.

          </p>

          {/* Soft Divider */}
          <div className="w-24 h-[1px] bg-[#e8d8c4] mx-auto mt-14"></div>

          {/* Button */}
          <a
            href="https://rzp.io/rzp/iuz5vW5"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              mt-14
              px-10
              py-5
              rounded-full
              bg-[#2f372f]
              hover:bg-[#3c463c]
              transition-all
              duration-300
              text-white
              text-[16px]
              tracking-[1px]
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            "
          >

            Support With Care

          </a>

        </div>

      </div>

    </section>
  );
}