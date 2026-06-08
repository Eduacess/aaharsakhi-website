"use client";

export default function DashboardNavbar() {

return (

<header className="
  w-full
  bg-[#eef5fb]
  border-b
  border-[#e7ddd2]
  px-4
  py-4
">

  <div className="
    flex
    flex-col
    md:flex-row
    md:items-center
    md:justify-between
    gap-4
  ">

    {/* LEFT */}

    <div className="
      flex
      items-center
      gap-3
    ">

      <img
        src="/logo.png"
        alt="AaharSakhi"
        className="
          w-16
          h-16
          rounded-full
          object-cover
        "
      />

      <div>

        <h1 className="
          text-[32px]
          leading-none
          font-bold
          text-[#243042]
        ">

          AaharSakhi

        </h1>

        <p className="
          text-[#5d6570]
          text-sm
          mt-1
        ">

          Personalized Wellness Dashboard

        </p>

      </div>

    </div>

    {/* RIGHT */}

    <div className="
      flex
      items-center
      gap-3
      flex-wrap
    ">

      {/* DASHBOARD */}

      <button
        onClick={() => window.location.href = "/dashboard"}
        className="
          bg-[#8d3f3f]
          text-white
          rounded-2xl
          px-5
          py-3
          font-medium
          hover:bg-[#733232]
          transition
        "
      >

        Dashboard

      </button>

      {/* TRACKER */}

      <button
        onClick={() => window.location.href = "/dashboard/tracker"}
        className="
          bg-[#fffaf5]
          border
          border-[#eadfd2]
          rounded-2xl
          px-5
          py-3
          font-medium
          text-[#3d3027]
          hover:bg-[#f8efe8]
          transition
        "
      >

        My Tracker

      </button>

      {/* MEDICATIONS */}

      <button
        onClick={() => window.location.href = "/dashboard/medications"}
        className="
          bg-[#fffaf5]
          border
          border-[#eadfd2]
          rounded-2xl
          px-5
          py-3
          font-medium
          text-[#3d3027]
          hover:bg-[#f8efe8]
          transition
        "
      >

        My Medications

      </button>

      {/* PROFILE */}

      <button
        onClick={() => window.location.href = "/dashboard/profile"}
        className="
          w-12
          h-12
          rounded-full
          bg-[#fffaf5]
          border
          border-[#eadfd2]
          flex
          items-center
          justify-center
          text-xl
          hover:bg-[#f8efe8]
          transition
        "
      >

        👩

      </button>

    </div>

  </div>

</header>

);

}