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
      p-5
    ">

      {/* HEADER */}

      <div className="
        flex
        items-center
        justify-between
        mb-4
      ">

        <h2 className="
          text-lg
          font-semibold
          text-[#3d3027]
        ">

          Upcoming Webinar

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
          text-[17px]
          leading-relaxed
        ">

          {webinar?.title ||
            "Upcoming Wellness Webinar"}

        </h3>

        {/* SPEAKER */}

        <p className="
          text-sm
          text-[#b26b5e]
          mt-2
          font-medium
        ">

          {webinar?.speaker}

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

        {/* DATE */}

        <div className="mt-4">

          <p className="
            text-sm
            font-medium
            text-[#3d3027]
          ">

            When:

          </p>

          <p className="
            text-sm
            text-[#7b6a58]
            mt-1
          ">

            {webinar?.date}
            {" • "}
            {webinar?.time}

          </p>

        </div>

        {/* JOIN */}

<div className="mt-4">

<p className="
  text-sm
  font-medium
  text-[#3d3027]
">

  Join:

</p>

<button
  onClick={() =>
    window.open(
      webinar?.link,
      "_blank"
    )
  }
  className="
    text-sm
    text-[#b26b5e]
    font-medium
    hover:underline
    mt-1
  "
>

  Click Here to Join

</button>

</div>

        </div>

    

    </div>

  );

}