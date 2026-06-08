"use client";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

const trackerData = [

{
date: "12 Jun",
sugar: "110",
bp: "120/80",
weight: "62kg",
hydration: "8 Glasses",
},

{
date: "13 Jun",
sugar: "105",
bp: "118/78",
weight: "61.8kg",
hydration: "7 Glasses",
},

{
date: "14 Jun",
sugar: "108",
bp: "119/80",
weight: "61.7kg",
hydration: "8 Glasses",
},

{
date: "15 Jun",
sugar: "112",
bp: "121/82",
weight: "61.6kg",
hydration: "9 Glasses",
},

];

export default function TrackerPage() {

return (

<main className="
  min-h-screen
  bg-[#f5f6fa]
">

  <DashboardNavbar />

  <section className="
    px-4
    md:px-6
    lg:px-8
    py-6
  ">

    {/* HEADER */}

    <div className="
      flex
      items-center
      justify-between
      mb-8
      flex-wrap
      gap-4
    ">

      <div>

        <h1 className="
          text-3xl
          md:text-4xl
          font-semibold
          text-[#3d3027]
        ">

          My Tracker 📊

        </h1>

        <p className="
          text-[#7c6d60]
          mt-2
        ">

          Your monthly wellness records

        </p>

      </div>

      {/* MONTH SWITCH */}

      <div className="
        flex
        items-center
        gap-4
      ">

        <button className="
          w-11
          h-11
          rounded-full
          bg-white
          border
          border-[#eadfd2]
          text-[#7a4e57]
          text-lg
        ">

          ←

        </button>

        <h2 className="
          text-xl
          font-semibold
          text-[#3d3027]
        ">

          June 2026

        </h2>

        <button className="
          w-11
          h-11
          rounded-full
          bg-white
          border
          border-[#eadfd2]
          text-[#7a4e57]
          text-lg
        ">

          →

        </button>

      </div>

    </div>

    {/* DESKTOP TABLE */}

    <div className="
      hidden
      md:block
      overflow-hidden
      rounded-[30px]
      border
      border-[#eadfd2]
      bg-white
    ">

      <table className="w-full">

        <thead className="bg-[#fff7f4]">

          <tr>

            <th className="p-5 text-left">Date</th>
            <th className="p-5 text-left">Sugar</th>
            <th className="p-5 text-left">BP</th>
            <th className="p-5 text-left">Weight</th>
            <th className="p-5 text-left">Hydration</th>

          </tr>

        </thead>

        <tbody>

          {trackerData.map((item, index) => (

            <tr
              key={index}
              className="
                border-t
                border-[#eadfd2]
              "
            >

              <td className="p-5">{item.date}</td>
              <td className="p-5">{item.sugar}</td>
              <td className="p-5">{item.bp}</td>
              <td className="p-5">{item.weight}</td>
              <td className="p-5">{item.hydration}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* MOBILE CARDS */}

    <div className="
      md:hidden
      space-y-4
    ">

      {trackerData.map((item, index) => (

        <div
          key={index}
          className="
            bg-white
            border
            border-[#eadfd2]
            rounded-[28px]
            p-5
          "
        >

          <h3 className="
            text-xl
            font-semibold
            text-[#3d3027]
            mb-4
          ">

            {item.date}

          </h3>

          <div className="
            space-y-2
            text-[#5f5348]
          ">

            <p><strong>Sugar:</strong> {item.sugar}</p>

            <p><strong>BP:</strong> {item.bp}</p>

            <p><strong>Weight:</strong> {item.weight}</p>

            <p><strong>Hydration:</strong> {item.hydration}</p>

          </div>

        </div>

      ))}

    </div>

  </section>

  <DashboardFooter />

</main>

);

}