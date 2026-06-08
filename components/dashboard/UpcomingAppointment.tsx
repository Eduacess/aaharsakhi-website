"use client";

import { useState } from "react";

export default function UpcomingAppointment() {

  const [showModal, setShowModal] =
    useState(false);

  const [appointment, setAppointment] =
    useState({
      title: "Nutrition Consultation",
      date: "12 June 2026",
      time: "4:30 PM",
    });

  const [formData, setFormData] =
    useState({
      title: "",
      date: "",
      time: "",
    });

  function handleSave() {

    setAppointment(formData);

    setShowModal(false);

  }

  return (

    <>

      <div className="bg-[#fffaf5] border border-[#eadfd2] rounded-[28px] p-5 h-full">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-lg font-semibold text-[#3d3027]">

            Upcoming Appointment

          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="
              w-10
              h-10
              rounded-full
              bg-[#f3e6da]
              hover:bg-[#ead8c8]
              transition
              flex
              items-center
              justify-center
            "
          >

            📅

          </button>

        </div>

        {/* APPOINTMENT */}

        <div className="bg-white border border-[#eadfd2] rounded-2xl p-4">

          <p className="text-[#3d3027] font-semibold mb-2">

            {appointment.title}

          </p>

          <p className="text-[#7b6a58] text-sm">

            {appointment.date}

          </p>

          <p className="text-[#7b6a58] text-sm">

            {appointment.time}

          </p>

        </div>

      </div>

      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">

          <div className="bg-white rounded-[32px] p-6 w-full max-w-md relative">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-xl"
            >

              ×

            </button>

            <h2 className="text-2xl font-semibold text-[#3d3027] mb-5">

              Add Appointment

            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Appointment Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="w-full border rounded-2xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
                className="w-full border rounded-2xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    time: e.target.value,
                  })
                }
                className="w-full border rounded-2xl px-4 py-3"
              />

              <button
                onClick={handleSave}
                className="
                  w-full
                  bg-[#c58d63]
                  hover:bg-[#b27a52]
                  transition
                  text-white
                  rounded-2xl
                  py-3
                "
              >

                Save Appointment

              </button>

            </div>

          </div>

        </div>

      )}

    </>

  );

}