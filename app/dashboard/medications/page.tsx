"use client";

import { useEffect, useState } from "react";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import { supabase } from "@/lib/supabase";

export default function MedicationsPage() {

  const [showModal, setShowModal] =
    useState(false);

  const [medications, setMedications] =
    useState<any[]>([]);

  const [userId, setUserId] =
    useState("");

  const [loading, setLoading] =
    useState(true);

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

  // LOAD

  useEffect(() => {

    const loadData = async () => {

      const {
        data: { session },
      } =
        await supabase.auth.getSession();

      if (!session?.user?.id) return;

      setUserId(session.user.id);

      const { data } =
        await supabase
          .from("medications")
          .select("*")
          .eq(
            "user_id",
            session.user.id
          )
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

  // SAVE

  const saveMedication =
    async () => {

      if (!medicationName) {

        alert(
          "Please enter medication name"
        );

        return;

      }

      const {
        data,
        error,
      } = await supabase
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

      if (error) {

        console.log(error);

        alert(error.message);

        return;

      }

      if (data) {

        setMedications(
          [data, ...medications]
        );

        setShowModal(false);

        setMedicationName("");

        setDosage("");

        setTimesPerDay(1);

        setReminderTimes([""]);

        setMedicationType(
          "ongoing"
        );

      }

    };

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
        p-5
      ">

        <div className="
          flex
          justify-between
          items-center
          mb-6
        ">

          <div>

            <h1 className="
              text-3xl
              font-semibold
              text-[#3d3027]
            ">

              My Medications 💊

            </h1>

          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
              bg-[#8d3f3f]
              text-white
              px-5
              py-3
              rounded-2xl
            "
          >

            + Add Medication

          </button>

        </div>

        <div className="
          bg-white
          rounded-[30px]
          border
          border-[#eadfd2]
          overflow-hidden
        ">

          <table className="
            w-full
          ">

            <thead className="
              bg-[#fff7f4]
            ">

              <tr>

                <th className="p-4 text-left">
                  Medication
                </th>

                <th className="p-4 text-left">
                  Dosage
                </th>

                <th className="p-4 text-left">
                  Frequency
                </th>

                <th className="p-4 text-left">
                  Type
                </th>

              </tr>

            </thead>

            <tbody>

              {medications.map(
                (med) => (

                  <tr
                    key={med.id}
                    className="
                      border-t
                    "
                  >

                    <td className="p-4">
                      {med.medication_name}
                    </td>

                    <td className="p-4">
                      {med.dosage}
                    </td>

                    <td className="p-4">
                      {
                        med.times_per_day
                      }x daily
                    </td>

                    <td className="p-4">
                      {
                        med.medication_type
                      }
                    </td>

                  </tr>

                )
              )}

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

            <h2 className="
              text-2xl
              font-semibold
              mb-5
            ">

              Add Medication

            </h2>

            <div className="
              space-y-4
            ">

              <input
                value={medicationName}
                onChange={(e) =>
                  setMedicationName(
                    e.target.value
                  )
                }
                placeholder="Medication Name"
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                "
              />

              <input
                value={dosage}
                onChange={(e) =>
                  setDosage(
                    e.target.value
                  )
                }
                placeholder="Dosage"
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                "
              />

              <select
                value={timesPerDay}
                onChange={(e) =>
                  setTimesPerDay(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
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

              </select>

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
                  rounded-2xl
                  p-4
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

              <button
                onClick={saveMedication}
                className="
                  w-full
                  bg-[#8d3f3f]
                  text-white
                  py-4
                  rounded-2xl
                  mt-2
                "
              >

                Save Medication

              </button>

            </div>

          </div>

        </div>

      )}

      <DashboardFooter />

    </main>

  );

}