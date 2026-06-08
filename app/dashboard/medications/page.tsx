"use client";

import { useState } from "react";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function MedicationsPage() {

const [showModal, setShowModal] = useState(false);

const [medications, setMedications] = useState([

{
  name: "Metformin",
  status: "Ongoing",
  history: ["✅", "✅", "❌", "✅"],
},

{
  name: "Iron Tablet",
  status: "Paused",
  history: ["✅", "✅", "✅", "✅"],
},

]);

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

    {/* TOP */}

    <div className="
      flex
      items-center
      justify-between
      flex-wrap
      gap-4
      mb-8
    ">

      <div>

        <h1 className="
          text-3xl
          md:text-4xl
          font-semibold
          text-[#3d3027]
        ">

          My Medications 💊

        </h1>

        <p className="
          text-[#7c6d60]
          mt-2
        ">

          Your medication history and adherence

        </p>

      </div>

      {/* ADD BUTTON */}

      <button
        onClick={() => setShowModal(true)}
        className="
          bg-[#8d3f3f]
          text-white
          px-6
          py-3
          rounded-2xl
          font-medium
          hover:bg-[#733232]
          transition
        "
      >

        + Add Medication

      </button>

    </div>

    {/* MONTH */}

    <div className="
      flex
      items-center
      justify-center
      gap-5
      mb-8
    ">

      <button className="
        w-11
        h-11
        rounded-full
        bg-white
        border
        border-[#eadfd2]
      ">

        ←

      </button>

      <h2 className="
        text-2xl
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
      ">

        →

      </button>

    </div>

    {/* DESKTOP TABLE */}

    <div className="
      hidden
      md:block
      overflow-x-auto
      rounded-[30px]
      border
      border-[#eadfd2]
      bg-white
    ">

      <table className="w-full">

        <thead className="bg-[#fff7f4]">

          <tr>

            <th className="p-5 text-left">

              Medication

            </th>

            <th className="p-5">12</th>
            <th className="p-5">13</th>
            <th className="p-5">14</th>
            <th className="p-5">15</th>

            <th className="p-5 text-left">

              Status

            </th>

          </tr>

        </thead>

        <tbody>

          {medications.map((med, index) => (

            <tr
              key={index}
              className="
                border-t
                border-[#eadfd2]
              "
            >

              <td className="
                p-5
                font-medium
                text-[#3d3027]
              ">

                {med.name}

              </td>

              {med.history.map((item, i) => (

                <td
                  key={i}
                  className="
                    p-5
                    text-center
                    text-xl
                  "
                >

                  {item}

                </td>

              ))}

              <td className="p-5">

                <button className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  ${
                    med.status === "Ongoing"
                      ? "bg-[#e4f6ea] text-[#267a45]"
                      : "bg-[#fff1dc] text-[#9a6700]"
                  }
                `}>

                  {med.status}

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

    {/* MOBILE */}

    <div className="
      md:hidden
      space-y-4
    ">

      {medications.map((med, index) => (

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

          <div className="
            flex
            items-center
            justify-between
            mb-4
          ">

            <h3 className="
              text-xl
              font-semibold
              text-[#3d3027]
            ">

              {med.name}

            </h3>

            <button className={`
              px-4
              py-2
              rounded-full
              text-sm
              ${
                med.status === "Ongoing"
                  ? "bg-[#e4f6ea] text-[#267a45]"
                  : "bg-[#fff1dc] text-[#9a6700]"
              }
            `}>

              {med.status}

            </button>

          </div>

          <div className="
            flex
            gap-3
            text-2xl
          ">

            {med.history.map((item, i) => (

              <div
                key={i}
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#fff7f4]
                  flex
                  items-center
                  justify-center
                "
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  </section>

  {/* ADD MODAL */}

  {showModal && (

    <div className="
      fixed
      inset-0
      bg-black/40
      z-50
      flex
      items-center
      justify-center
      p-4
    ">

      <div className="
        bg-white
        rounded-[30px]
        w-full
        max-w-lg
        p-6
      ">

        <div className="
          flex
          items-center
          justify-between
          mb-6
        ">

          <h2 className="
            text-2xl
            font-semibold
            text-[#3d3027]
          ">

            Add Medication

          </h2>

          <button
            onClick={() => setShowModal(false)}
            className="
              text-3xl
              text-[#7d6d61]
            "
          >

            ×

          </button>

        </div>

        {/* INPUTS */}

        <div className="space-y-4">

          <input
            placeholder="Medication Name"
            className="
              w-full
              border
              border-[#eadfd2]
              rounded-2xl
              p-4
              outline-none
            "
          />

          <input
            placeholder="Dosage (Optional)"
            className="
              w-full
              border
              border-[#eadfd2]
              rounded-2xl
              p-4
              outline-none
            "
          />

          <select
            className="
              w-full
              border
              border-[#eadfd2]
              rounded-2xl
              p-4
              outline-none
            "
          >

            <option>Ongoing</option>
            <option>Paused</option>

          </select>

        </div>

        {/* SAVE */}

        <button className="
          w-full
          bg-[#8d3f3f]
          text-white
          py-4
          rounded-2xl
          mt-6
          font-medium
        ">

          Save Medication

        </button>

      </div>

    </div>

  )}

  <DashboardFooter />

</main>

);

}