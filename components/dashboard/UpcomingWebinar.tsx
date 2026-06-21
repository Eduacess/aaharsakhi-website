"use client";

interface UpcomingWebinarProps {

  webinar: {
    id: string;
    title: string;
    speaker: string;
    description: string;
    date: string;
    time: string;
    link: string;
  };

}

export default function UpcomingWebinar({
  webinar,
}: UpcomingWebinarProps) {

  return (

    <div className="
      bg-[#fffaf5]
      border
      border-[#eadfd2]
      rounded-[28px]
      p-4
    ">

      {/* HEADER */}

      <div className="
        flex
        items-center
        justify-between
        mb-3
      ">

        <h2 className="
          text-[17px]
          font-semibold
          text-[#3d3027]
        ">

          Upcoming Webinar

        </h2>

        <div
          className="
            w-9
            h-9
            rounded-full
            bg-[#f3e6da]
            flex
            items-center
            justify-center
            text-sm
          "
        >

          📅

        </div>

      </div>

      {/* CONTENT */}

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-2xl
        p-4
      ">

        {/* TITLE */}

        <h3 className="
          text-[#3d3027]
          font-semibold
          text-[16px]
          leading-snug
        ">

          {webinar?.title ||
            "Upcoming Wellness Webinar"}

        </h3>

        {/* SPEAKER */}

        <p className="
          text-sm
          text-[#b26b5e]
          mt-1.5
          font-medium
        ">

          By {webinar?.speaker}

        </p>

        {/* DESCRIPTION */}

        <p className="
          text-sm
          text-[#7b6a58]
          mt-3
          leading-relaxed
        ">

          {webinar?.description}

        </p>

        {/* DATE + TIME */}

        <div className="
          flex
          flex-wrap
          gap-3
          mt-4
        ">

          <div className="
            bg-[#fff7f4]
            border
            border-[#f0dfd2]
            rounded-xl
            px-3
            py-2
          ">

            <p className="
              text-xs
              text-[#a08d7d]
              mb-1
            ">

              Date

            </p>

            <p className="
              text-sm
              font-medium
              text-[#3d3027]
            ">

              {webinar?.date}

            </p>

          </div>

          <div className="
            bg-[#fff7f4]
            border
            border-[#f0dfd2]
            rounded-xl
            px-3
            py-2
          ">

            <p className="
              text-xs
              text-[#a08d7d]
              mb-1
            ">

              Time

            </p>

            <p className="
              text-sm
              font-medium
              text-[#3d3027]
            ">

              {webinar?.time}

            </p>

          </div>

        </div>

        {/* JOIN BUTTON */}

        <button
          onClick={() =>
            window.open(
              webinar?.link,
              "_blank"
            )
          }
          className="
            mt-4
            w-full
            bg-[#c58d63]
            hover:bg-[#b27a52]
            transition
            text-white
            rounded-2xl
            py-3
            text-sm
            font-medium
          "
        >

          Join Webinar

        </button>

      </div>

    </div>

  );

}