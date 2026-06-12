"use client";

interface YogaZoneProps {

  yoga: {
    title: string;
    description: string;
    image: string;
    video: string;
    channel: string;
  } | null;

}

export default function YogaZone({
  yoga,
}: YogaZoneProps) {

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
md:grid-cols-[1.2fr_1fr]
items-stretch
min-h-[250px]
      ">

        {/* IMAGE */}

        <div className="
          bg-[#f7e7ea]
          h-full
          flex
          items-center
          justify-between
          overflow-hidden
        ">

          <img
            src={yoga?.image}
            alt="Yoga"
            className="
            w-full  
            h-full
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

            {yoga?.title}

          </h3>

          <p className="
            text-[#6f6257]
            leading-relaxed
            text-[15px]
            mb-4
          ">

            {yoga?.description}

          </p>

          {/* BUTTON */}

          <button
            onClick={() =>
              window.open(
                yoga?.video,
                "_blank"
              )
            }
            className="
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
            "
          >

            Watch Video

          </button>

          <p className="
            text-[#8a7d72]
            text-sm
          ">

            Video by:
            {" "}
            {yoga?.channel}

          </p>

        </div>

      </div>

    </div>

  );

}