"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function UpcomingAppointment() {

  const [showModal, setShowModal] =
    useState(false);

  const [appointment, setAppointment] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const [formData, setFormData] =
    useState({
      doctor_name: "",
      appointment_reason: "",
      date: "",
      time: "",
    });

  // =====================================
  // LOAD APPOINTMENT
  // =====================================

  useEffect(() => {

    const loadAppointment =
      async () => {

      const {
        data: { session },
      } =
      await supabase.auth
      .getSession();

      if (
        !session?.user?.id
      ) {

        setLoading(false);
        return;

      }

      const today =
        new Date()
          .toLocaleDateString(
            "en-CA"
          );

      const { data, error } =
        await supabase
          .from("appointments")
          .select("*")
          .eq(
            "user_id",
            session.user.id
          )
          .gte(
            "appointment_date",
            today
          )
          .order(
            "appointment_date",
            {
              ascending: true,
            }
          )
          .limit(1)
          .maybeSingle();

      if (!error && data) {

        setAppointment(data);

      }

      setLoading(false);

    };

    loadAppointment();

  }, []);

  // =====================================
  // SAVE APPOINTMENT
  // =====================================

  const handleSave =
    async () => {

      try {

        const {
          data: { session },
        } =
        await supabase.auth
        .getSession();

        if (
          !session?.user?.id
        ) {

          alert(
            "User not logged in"
          );

          return;

        }

        const { data, error } =
          await supabase
            .from("appointments")
            .insert([
              {
                user_id:
                  session.user.id,

                doctor_name:
                  formData
                  .doctor_name,

                appointment_reason:
                  formData
                  .appointment_reason,

                appointment_date:
                  formData.date,

                appointment_time:
                  formData.time,
              },
            ])
            .select()
            .single();

        console.log(data);
        console.log(error);

        if (error) {

          alert(error.message);

          return;

        }

        setAppointment(data);

        setShowModal(false);

        setFormData({
          doctor_name: "",
          appointment_reason: "",
          date: "",
          time: "",
        });

      } catch (err) {

        console.log(err);

        alert(
          "Something went wrong"
        );

      }

    };

  // =====================================
  // LOADING
  // =====================================

  if (loading) {

    return (

      <div className="
        bg-[#fffaf5]
        border
        border-[#eadfd2]
        rounded-[28px]
        p-5
      ">

        Loading...

      </div>

    );

  }

  return (

    <>

      {/* CARD */}

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
          mb-4
        ">

          <h2 className="
            text-lg
            font-semibold
            text-[#3d3027]
          ">

            Upcoming Appointment

          </h2>

          <button
            onClick={() =>
              setShowModal(true)
            }
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

        {appointment ? (

          <div className="
            bg-white
            border
            border-[#eadfd2]
            rounded-2xl
            p-4
          ">

            <p className="
              text-[#3d3027]
              font-semibold
              text-lg
              mb-1
            ">

              👨‍⚕️
              {" "}
              {
                appointment
                .doctor_name
              }

            </p>

            <p className="
              text-[#7b6a58]
              text-sm
              mb-3
            ">

              📌
              {" "}
              {
                appointment
                .appointment_reason
              }

            </p>

            <p className="
              text-[#7b6a58]
              text-sm
            ">

              📅
              {" "}
              {new Date(
                appointment
                .appointment_date
              ).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}

            </p>

            <p className="
              text-[#7b6a58]
              text-sm
              mt-1
            ">

              🕓
              {" "}
              {
                appointment
                .appointment_time
              }

            </p>

          </div>

        ) : (

          <div className="
            bg-white
            border
            border-[#eadfd2]
            rounded-2xl
            p-4
            text-center
            text-[#7b6a58]
          ">

            No upcoming appointments

          </div>

        )}

      </div>

      {/* MODAL */}

      {showModal && (

        <div className="
          fixed
          inset-0
          z-50
          bg-black/30
          flex
          items-center
          justify-center
          px-4
        ">

          <div className="
            bg-white
            rounded-[32px]
            p-6
            w-full
            max-w-md
            relative
          ">

            {/* CLOSE */}

            <button
              onClick={() =>
                setShowModal(false)
              }
              className="
                absolute
                top-4
                right-4
                text-xl
              "
            >

              ×

            </button>

            {/* TITLE */}

            <h2 className="
              text-2xl
              font-semibold
              text-[#3d3027]
              mb-5
            ">

              Add Appointment

            </h2>

            <div className="
              space-y-4
            ">

              {/* DOCTOR */}

              <input
                type="text"
                placeholder="
                  Doctor Name
                "
                value={
                  formData
                  .doctor_name
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    doctor_name:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  px-4
                  py-3
                "
              />

              {/* PURPOSE */}

              <input
                type="text"
                placeholder="
                  Appointment Purpose
                "
                value={
                  formData
                  .appointment_reason
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    appointment_reason:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  px-4
                  py-3
                "
              />

              {/* DATE */}

              <input
                type="date"
                value={
                  formData.date
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  px-4
                  py-3
                "
              />

              {/* TIME */}

              <input
                type="time"
                value={
                  formData.time
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    time:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  px-4
                  py-3
                "
              />

              {/* SAVE */}

              <button
                onClick={
                  handleSave
                }
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
