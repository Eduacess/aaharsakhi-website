"use client";

import Image from "next/image";

interface SakhiNushkeProps {

  nushke: {
    id: string;
    text: string;
  } | null;

}

export default function SakhiNushke({
  nushke,
}: SakhiNushkeProps) {

  return (

    <div className="
      bg-[#fffaf5]
      border
      border-[#eadfd2]
      rounded-[32px]
      p-5
      h-fit
      w-full
    ">

      <div className="
        flex
        items-center
        gap-3
        mb-5
      ">

        <Image
          src="/nuskha.png"
          alt="nuskha"
          width={26}
          height={26}
        />

        <h2 className="
          text-xl
          font-semibold
          text-[#3d3027]
        ">

          Sakhi Ke Nushke

        </h2>

      </div>

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-[20px]
        p-4
        text-[#7b6a58]
        leading-7
        shadow-sm
      ">

        {nushke?.text || (
          "No nushke available today."
        )}

      </div>

    </div>

  );

}