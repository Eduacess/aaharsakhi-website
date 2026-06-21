import Link from "next/link";

export default function JourneyCTA() {
  return (
    <section className="py-8">

      <div className="flex justify-center">

        <Link
          href="/login"
          className="
            inline-flex
            items-center
            justify-center
            px-12
            py-5
            rounded-full
            bg-gradient-to-r
            from-[#4A2C22]
            via-[#6B3F2E]
            to-[#8A5A3C]
            text-white
            text-lg
            font-medium
            shadow-[0_15px_40px_rgba(74,44,34,0.25)]
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Begin Your Wellness Journey
        </Link>

      </div>

    </section>
  );
}