"use client";

export default function YogaZone() {

return (

<div className="
  bg-[#fffaf5]
  border
  border-[#eadfd2]
  rounded-[30px]
  p-5
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

      Yoga Zone 🧘

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

      🧘

    </div>

  </div>

  {/* CONTENT */}

  <div className="
    bg-white
    border
    border-[#eadfd2]
    rounded-[28px]
    overflow-hidden
    grid
    md:grid-cols-2
  ">

    {/* IMAGE */}

    <div className="
      bg-[#f7e7ea]
      min-h-[240px]
      flex
      items-center
      justify-center
    ">

      <img
        src="/yoga.png"
        alt="Yoga"
        className="
          h-full
          w-full
          object-cover
        "
      />

    </div>

    {/* RIGHT CONTENT */}

    <div className="
      p-5
      flex
      flex-col
      justify-center
    ">

      <h3 className="
        text-[#3d3027]
        text-[28px]
        font-semibold
        leading-tight
        mb-3
      ">

        5-Minute Prenatal Stretch

      </h3>

      <p className="
        text-[#6f6257]
        leading-relaxed
        text-[15px]
        mb-4
      ">

        Relaxing guided stretches
        and mindful breathing for
        flexibility and calmness.

      </p>

      {/* TAGS */}

      <div className="
        flex
        gap-2
        flex-wrap
        mb-4
      ">

        <span className="
          px-4
          py-2
          rounded-full
          bg-[#f7e7ea]
          text-[#7a4e57]
          text-sm
        ">

          Beginner Friendly

        </span>

        <span className="
          px-4
          py-2
          rounded-full
          bg-[#f7e7ea]
          text-[#7a4e57]
          text-sm
        ">

          Relaxation

        </span>

      </div>

      {/* BUTTON */}

      <button className="
        bg-[#8d3f3f]
        hover:bg-[#733232]
        transition
        text-white
        px-6
        py-3
        rounded-full
        w-fit
        text-sm
        font-medium
        mb-3
      ">

        Watch Video

      </button>

      <p className="
        text-[#8a7d72]
        text-sm
      ">

        Video by: YogaWithAnjali

      </p>

    </div>

  </div>

</div>

);

}