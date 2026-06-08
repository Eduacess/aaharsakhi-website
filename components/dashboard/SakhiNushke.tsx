"use client";

import Image from "next/image";

export default function SakhiNushke() {

return (

<div className="bg-[#fffaf5] border border-[#eadfd2] rounded-[32px] p-5 h-fit w-full">

  <div className="flex items-center gap-3 mb-5">

    <Image
      src="/nuskha.png"
      alt="nuskha"
      width={26}
      height={26}
    />

    <h2 className="text-xl font-semibold text-[#3d3027]">

      Sakhi Ke Nushke

    </h2>

  </div>

  <div className="bg-white border border-[#eadfd2] rounded-[20px] p-4 text-[#7b6a58] leading-7 shadow-sm">

    Drink warm jeera water every morning to improve digestion and reduce bloating naturally.

  </div>

</div>


);

}
