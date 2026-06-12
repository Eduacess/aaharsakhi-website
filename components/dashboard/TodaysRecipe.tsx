"use client";

interface TodaysRecipeProps {

  recipe: {
    title: string;
    benefits: string;
    image: string;
    video: string;
    channel: string;
  } | null;

}

export default function TodaysRecipe({
  recipe,
}: TodaysRecipeProps) {

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

      <div className="
        flex
        items-center
        justify-between
        mb-5
      ">

        <h2 className="
          text-lg
          font-semibold
          text-[#3d3027]
        ">

          Today&apos;s Recipe 🍲

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

      {/* CARD */}

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-2xl
        overflow-hidden
        grid
        md:grid-cols-[1.2fr_1fr]
      ">

        {/* IMAGE */}

        <div className="
          min-h-[320px]
          bg-[#f4e8dc]
          overflow-hidden
        ">

          <img
            src={recipe?.image}
            alt="Recipe"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

        {/* CONTENT */}

        <div className="
          p-6
          flex
          flex-col
          justify-center
        ">

          {/* TITLE */}

          <h3 className="
            text-[#3d3027]
            font-semibold
            text-[30px]
            leading-relaxed
            mb-4
          ">

            {recipe?.title}

          </h3>

          {/* BENEFITS */}

          <p className="
            text-[#7b6a58]
            leading-8
            text-[15px]
            mb-6
          ">

            {recipe?.benefits}

          </p>

          {/* BUTTON */}

          <button
            onClick={() =>
              window.open(
                recipe?.video,
                "_blank"
              )
            }
            className="
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
            "
          >

            Watch Recipe

          </button>

          {/* CREDIT */}

          <p className="
            text-sm
            text-[#9b8a78]
            mt-5
          ">

            Recipe by:
            {" "}
            {recipe?.channel}

          </p>

        </div>

      </div>

    </div>

  );

}