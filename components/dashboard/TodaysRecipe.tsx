"use client";

export default function TodaysRecipe() {

return (

<div className="
  bg-[#fffaf5]
  border
  border-[#eadfd2]
  rounded-[28px]
  p-5
  h-full
">

  {/* HEADER */}

  <div className="flex items-center justify-between mb-5">

    <h2 className="text-lg font-semibold text-[#3d3027]">

      Today's Recipe 🍲

    </h2>

    <div
      className="
        w-10
        h-10
        rounded-full
        bg-[#f3e6da]
        flex
        items-center
        justify-center
        text-lg
      "
    >

      🍽️

    </div>

  </div>

  {/* HORIZONTAL CARD */}

  <div className="
    bg-white
    border
    border-[#eadfd2]
    rounded-2xl
    overflow-hidden
    grid
    md:grid-cols-[1fr_1.2fr]
  ">

    {/* IMAGE */}

    <div className="
      bg-[#f4e8dc]
      min-h-[220px]
      flex
      items-center
      justify-center
      text-7xl
    ">

      🍲

    </div>

    {/* CONTENT */}

    <div className="p-5 flex flex-col justify-center">

      <h3 className="
        text-[#3d3027]
        font-semibold
        text-2xl
        mb-3
      ">

        Iron Rich Poha

      </h3>

      <p className="
        text-[#7b6a58]
        leading-relaxed
        mb-5
      ">

        Pregnancy-friendly breakfast rich in
        iron and fiber. Helps support energy,
        nourishment and healthy wellness.

      </p>

      {/* TAGS */}

      <div className="flex flex-wrap gap-2 mb-5">

        <span className="
          bg-[#fdf3eb]
          text-[#b26b5e]
          text-sm
          px-4
          py-2
          rounded-full
        ">

          Iron Rich

        </span>

        <span className="
          bg-[#fdf3eb]
          text-[#b26b5e]
          text-sm
          px-4
          py-2
          rounded-full
        ">

          Pregnancy Friendly

        </span>

      </div>

      {/* BUTTON */}

      <button className="
        w-fit
        px-5
        py-2
        rounded-full
        bg-[#b26b5e]
        text-white
        text-sm
        font-medium
        hover:opacity-90
        transition
      ">

        Watch Recipe

      </button>

      {/* CREDIT */}

      <p className="
        text-sm
        text-[#9b8a78]
        mt-5
      ">

        Recipe by: HealthyMomKitchen

      </p>

    </div>

  </div>

</div>

);

}