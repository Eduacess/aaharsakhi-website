"use client";

export default function UpcomingWebinar() {

return (

<div className="bg-[#fffaf5] border border-[#eadfd2] rounded-[28px] p-5">

  {/* HEADER */}

  <div className="flex items-center justify-between mb-4">

    <h2 className="text-lg font-semibold text-[#3d3027]">

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

    {/* DOCTOR DETAILS */}

    <h3 className="text-[#3d3027] font-semibold text-[15px] leading-relaxed">

      Dr. Mehta | Pediatric MD | 12+ Years Experience

    </h3>

    {/* SMALL INTRO */}

    <p className="text-sm text-[#7b6a58] mt-2 leading-relaxed">

      Helping Indian families with maternal and infant wellness,
      feeding support and child nutrition guidance.

    </p>

    {/* DATE */}

    <div className="mt-4">

      <p className="text-sm font-medium text-[#3d3027]">

        When:

      </p>

      <p className="text-sm text-[#7b6a58] mt-1">

        15 June • 7:00 PM

      </p>

    </div>

    {/* JOIN */}

    <div className="mt-4">

      <p className="text-sm font-medium text-[#3d3027]">

        Where:

      </p>

      <button
        className="
          text-sm
          text-[#b26b5e]
          font-medium
          hover:underline
          mt-1
        "
      >

        Click to Join Here

      </button>

    </div>

  </div>

</div>

);

}