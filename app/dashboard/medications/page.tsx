"use client";

import { useEffect, useState } from "react";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import { supabase } from "@/lib/supabase";

export default function MedicationsPage() {

  const [showModal, setShowModal] = useState(false);

  const [medications, setMedications] = useState<any[]>([]);

  const [userId, setUserId] = useState("");

  const [loading, setLoading] = useState(true);

  // FORM STATES

  const [medicationName,
  setMedicationName] =
    useState("");

  const [dosage,
  setDosage] =
    useState("");

  const [timesPerDay,
  setTimesPerDay] =
    useState(1);

  const [reminderTimes,
  setReminderTimes] =
    useState<string[]>([""]);

  const [medicationType,
  setMedicationType] =
    useState("ongoing");

  // =========================
  // GET USER + MEDICATIONS
  // =========================

  useEffect(() => {

    const loadData = async () => {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user?.id) return;

      setUserId(session.user.id);

      const { data } = await supabase
        .from("medications")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", {
          ascending: false,
        });

      if (data) {

        setMedications(data);

      }

      setLoading(false);

    };

    loadData();

  }, []);

  // =========================
  // SAVE MEDICATION
  // =========================

  const saveMedication = async () => {

    if (!medicationName) return;

    const { data, error } =
      await supabase
        .from("medications")
        .insert([
          {
            user_id: userId,

            medication_name:
              medicationName,

            dosage,

            times_per_day:
              timesPerDay,

            reminder_times:
              reminderTimes,

            medication_type:
              medicationType,
          },
        ])
        .select()
        .single();

    if (!error && data) {

      setMedications((prev) => [
        data,
        ...prev,
      ]);

      setShowModal(false);

      // RESET

      setMedicationName("");

      setDosage("");

      setTimesPerDay(1);

      setReminderTimes([""]);

      setMedicationType("ongoing");

    }

  };

  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <div className="
        min-h-screen
        flex
        items-center
        justify-center
      ">

        Loading...

      </div>

    );

  }

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

          <button
            onClick={() =>
              setShowModal(true)
            }
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

        {/* TABLE */}

        <div className="
          overflow-x-auto
          rounded-[30px]
          border
          border-[#eadfd2]
          bg-white
        ">

          <table className="w-full">

            <thead className="
              bg-[#fff7f4]
            ">

              <tr>

                <th className="
                  p-5
                  text-left
                ">

                  Medication

                </th>

                <th className="
                  p-5
                  text-left
                ">

                  Dosage

                </th>

                <th className="
                  p-5
                  text-left
                ">

                  Times / Day

                </th>

                <th className="
                  p-5
                  text-left
                ">

                  Type

                </th>

              </tr>

            </thead>

            <tbody>

              {medications.map((med) => (

                <tr
                  key={med.id}
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

                    {med.medication_name}

                  </td>

                  <td className="
                    p-5
                  ">

                    {med.dosage || "-"}

                  </td>

                  <td className="
                    p-5
                  ">

                    {med.times_per_day}

                  </td>

                  <td className="
                    p-5
                  ">

                    <button className={`
                      px-4
                      py-2
                      rounded-full
                      text-sm

                      ${
                        med.medication_type ===
                        "ongoing"

                        ? "bg-[#e4f6ea] text-[#267a45]"

                        : med.medication_type ===
                          "paused"

                        ? "bg-[#fff1dc] text-[#9a6700]"

                        : "bg-[#eef2ff] text-[#4f46e5]"
                      }
                    `}>

                      {med.medication_type ===
                      "as_needed"

                        ? "As Needed"

                        : med.medication_type ===
                          "paused"

                        ? "Paused"

                        : "Ongoing"}

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* MODAL */}

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

            {/* HEADER */}

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
                onClick={() =>
                  setShowModal(false)
                }
                className="
                  text-3xl
                  text-[#7d6d61]
                "
              >

                ×

              </button>

            </div>

            {/* FORM */}

            <div className="
              space-y-4
            ">

              {/* NAME */}

              <input
                value={medicationName}
                onChange={(e) =>
                  setMedicationName(
                    e.target.value
                  )
                }
                placeholder="
                  Medication Name
                "
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  p-4
                  outline-none
                "
              />

              {/* DOSAGE */}

              <input
                value={dosage}
                onChange={(e) =>
                  setDosage(
                    e.target.value
                  )
                }
                placeholder="
                  Dosage
                "
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  p-4
                  outline-none
                "
              />

              {/* TIMES PER DAY */}

              <select
                value={timesPerDay}
                onChange={(e) => {

                  const count =
                    Number(
                      e.target.value
                    );

                  setTimesPerDay(count);

                  setReminderTimes(
                    Array(count).fill("")
                  );

                }}
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  p-4
                  outline-none
                "
              >

                <option value={1}>
                  Once Daily
                </option>

                <option value={2}>
                  Twice Daily
                </option>

                <option value={3}>
                  Three Times Daily
                </option>

                <option value={4}>
                  Four Times Daily
                </option>

              </select>

              {/* REMINDER TIMES */}

              <div className="
                space-y-3
              ">

                {reminderTimes.map(
                  (time, index) => (

                    <input
                      key={index}
                      type="time"
                      value={time}
                      onChange={(e) => {

                        const updated =
                          [...reminderTimes];

                        updated[index] =
                          e.target.value;

                        setReminderTimes(
                          updated
                        );

                      }}
                      className="
                        w-full
                        border
                        border-[#eadfd2]
                        rounded-2xl
                        p-4
                        outline-none
                      "
                    />

                  )
                )}

              </div>

              {/* TYPE */}

              <select
                value={medicationType}
                onChange={(e) =>
                  setMedicationType(
                    e.target.value
                  )
                }
                className="
                  w-full
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  p-4
                  outline-none
                "
              >

                <option value="ongoing">
                  Ongoing
                </option>

                <option value="paused">
                  Paused
                </option>

                <option value="as_needed">
                  As Needed
                </option>

              </select>

            </div>

            {/* SAVE */}

            <button
              onClick={saveMedication}
              className="
                w-full
                bg-[#8d3f3f]
                text-white
                py-4
                rounded-2xl
                mt-6
                font-medium
              "
            >

              Save Medication

            </button>

          </div>

        </div>

      )}

      <DashboardFooter />

    </main>

  );

}