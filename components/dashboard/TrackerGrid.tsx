"use client";

import { useState } from "react";

const trackers = [
{
title: "Medication",
icon: "💊",
},
{
title: "Sugar",
icon: "🩸",
},
{
title: "BP",
icon: "🫀",
},
{
title: "Weight",
icon: "⚖️",
},
{
title: "Hydration",
icon: "💧",
},
{
title: "Feeding",
icon: "🍼",
},
];

export default function TrackerGrid() {

const [activeTracker, setActiveTracker] =
useState<string | null>(null);

const [medications, setMedications] =
useState([
{
name: "Metformin 500mg",
done: true,
},
{
name: "Vitamin D",
done: false,
},
]);

const [hydrationCount, setHydrationCount] =
useState(0);

const [feedingStatus, setFeedingStatus] =
useState<boolean[]>([
true,
true,
false,
false,
false,
]);

return (

<>

  {/* TRACKER CARDS */}

  <div className="grid grid-cols-3 gap-3">

    {trackers.map((tracker) => (

      <button
        key={tracker.title}
        onClick={() =>
          setActiveTracker(tracker.title)
        }
        className="
          bg-white
          border
          border-[#eadfd2]
          rounded-[22px]
          h-[95px]
          flex
          flex-col
          items-center
          justify-center
          hover:bg-[#f8f3ee]
          transition
          shadow-sm
        "
      >

        <span className="text-2xl mb-2">

          {tracker.icon}

        </span>

        <span className="text-xs font-medium text-[#3d3027]">

          {tracker.title}

        </span>

      </button>

    ))}

  </div>

  {/* POPUP */}

  {activeTracker && (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">

      <div className="bg-white rounded-[28px] p-6 w-full max-w-md shadow-2xl relative">

        {/* CLOSE */}

        <button
          onClick={() =>
            setActiveTracker(null)
          }
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >

          ×

        </button>

        {/* TITLE */}

        <h2 className="text-2xl font-semibold text-[#3d3027] mb-5">

          {activeTracker} Tracker

        </h2>

        {/* MEDICATION */}

        {activeTracker === "Medication" && (

          <div className="space-y-4">

            {medications.map(
              (medication, index) => (

                <div
                  key={medication.name}
                  className="flex items-center justify-between bg-[#f8f3ee] rounded-2xl px-4 py-3"
                >

                  <span className="text-[#3d3027]">

                    {medication.name}

                  </span>

                  <input
                    type="checkbox"
                    checked={medication.done}
                    onChange={() => {

                      const updated =
                        [...medications];

                      updated[index].done =
                        !updated[index].done;

                      setMedications(updated);

                    }}
                    className="w-5 h-5 accent-green-600"
                  />

                </div>

              )
            )}

          </div>

        )}

        {/* SUGAR */}

        {activeTracker === "Sugar" && (

          <div className="space-y-4">

            <div className="flex justify-between text-[#5f5348]">

              <span>Fasting</span>

              <span>102 mg/dL</span>

            </div>

            <div className="flex justify-between text-[#5f5348]">

              <span>Post Meal</span>

              <span>145 mg/dL</span>

            </div>

            <button className="w-full bg-[#c58d63] text-white rounded-2xl py-3 font-medium">

              Add Entry

            </button>

          </div>

        )}

        {/* BP */}

        {activeTracker === "BP" && (

          <div className="space-y-4">

            <div className="flex justify-between text-[#5f5348]">

              <span>Morning</span>

              <span>120/80</span>

            </div>

            <div className="flex justify-between text-[#5f5348]">

              <span>Evening</span>

              <span>124/82</span>

            </div>

            <button className="w-full bg-[#c58d63] text-white rounded-2xl py-3 font-medium">

              Add Entry

            </button>

          </div>

        )}

        {/* WEIGHT */}

        {activeTracker === "Weight" && (

          <div className="space-y-4">

            <div className="flex justify-between text-[#5f5348]">

              <span>Today's Weight</span>

              <span>72 kg</span>

            </div>

            <button className="w-full bg-[#c58d63] text-white rounded-2xl py-3 font-medium">

              Add Entry

            </button>

          </div>

        )}

        {/* HYDRATION */}

        {activeTracker === "Hydration" && (

          <div className="space-y-5">

            <div className="flex gap-2 flex-wrap justify-center">

              {[1,2,3,4,5,6,7,8].map((glass) => (

                <button
                  key={glass}
                  onClick={() =>
                    setHydrationCount(glass)
                  }
                  className={`
                    w-10
                    h-14
                    rounded-b-xl
                    rounded-t-md
                    border
                    transition
                    ${
                      glass <= hydrationCount
                        ? "bg-[#7db7ff] border-[#7db7ff]"
                        : "bg-gray-200 border-gray-300"
                    }
                  `}
                />

              ))}

            </div>

            <p className="text-center text-[#5f5348]">

              {hydrationCount * 250} ml / 2000 ml

            </p>

          </div>

        )}

        {/* FEEDING */}

        {activeTracker === "Feeding" && (

          <div className="space-y-4">

            {[
              "6:00 AM",
              "9:00 AM",
              "12:00 PM",
              "3:00 PM",
              "6:00 PM",
            ].map((time, index) => (

              <div
                key={time}
                className="flex items-center justify-between bg-[#f8f3ee] rounded-2xl px-4 py-3"
              >

                <span className="text-[#3d3027] font-medium">

                  {time}

                </span>

                <button
                  onClick={() => {

                    const updated =
                      [...feedingStatus];

                    updated[index] =
                      !updated[index];

                    setFeedingStatus(updated);

                  }}
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    transition
                    ${
                      feedingStatus[index]
                        ? "bg-green-100 text-green-700"
                        : "bg-[#eadfd2] text-[#5f5348]"
                    }
                  `}
                >

                  {feedingStatus[index]
                    ? "Done ✔"
                    : "Pending"}

                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  )}

</>

);

}