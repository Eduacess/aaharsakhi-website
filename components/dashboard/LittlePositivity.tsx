"use client";

export default function LittlePositivity() {

return (

<div className="
  bg-[#fffaf5]
  border
  border-[#eadfd2]
  rounded-[30px]
  p-5
  min-h-[523px]
  flex
  flex-col
">

  {/* HEADER */}

  <div className="
    flex
    items-center
    justify-between
    mb-5
  ">

    <h2 className="
      text-[22px]
      font-semibold
      text-[#3d3027]
    ">

      A Little Positivity 💛

    </h2>

    <div className="
      w-11
      h-11
      rounded-2xl
      bg-white
      border
      border-[#eadfd2]
      flex
      items-center
      justify-center
      text-xl
    ">

      ✨

    </div>

  </div>

  {/* CONTENT CARD */}

  <div className="
    bg-white
    border
    border-[#eadfd2]
    rounded-[28px]
    overflow-hidden
    flex-1
    flex
    flex-col
  ">

    {/* IMAGE */}

    <div className="
      h-[287px]
      bg-[#f7e7ea]
      flex
      items-center
      justify-center
    ">

      <img
        src="/baby.png"
        alt="Positivity"
        className="
          h-full
          w-full
          object-cover
        "
      />

    </div>

    {/* TEXT */}

    <div className="
      p-5
      flex-1
    ">

      <h3 className="
        text-[#3d3027]
        text-[28px]
        font-semibold
        leading-relaxed
        mb-3
      ">

        Your baby may now respond to sounds 🤍

      </h3>

      <p className="
        text-[#6f6257]
        leading-relaxed
        text-[15px]
      ">

        Small emotional connections,
        calm conversations and gentle
        music can create comforting
        moments during pregnancy.

      </p>

    </div>

  </div>

</div>

);

}