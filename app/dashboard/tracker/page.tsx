"use client";

import { useEffect, useState } from "react";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import { supabase } from "@/lib/supabase";

export default function TrackerPage() {

  const [trackerData, setTrackerData] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [currentMonth, setCurrentMonth] =
    useState(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
      )
    );

  // =========================
  // FORMAT DATE
  // =========================

  const formatDate = (
    date: Date
  ) => {

    const year =
      date.getFullYear();

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");

    return `${year}-${month}-${day}`;

  };

  // =========================
  // GENERATE MONTH DATES
  // =========================

  const generateMonthDates = (
    year: number,
    month: number
  ) => {

    const dates = [];

    const totalDays =
      new Date(
        year,
        month + 1,
        0
      ).getDate();

    for (
      let day = 1;
      day <= totalDays;
      day++
    ) {

      dates.push(
        new Date(
          year,
          month,
          day
        )
      );

    }

    return dates;

  };

  // =========================
  // LOAD TRACKER
  // =========================

  useEffect(() => {

    const loadTracker =
      async () => {

      setLoading(true);

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

      const userId =
        session.user.id;

      // =====================
      // GET JOIN DATE
      // =====================

      const { data: profile } =
        await supabase
          .from("profiles")
          .select("created_at")
          .eq("id", userId)
          .single();

      const joinedDate =
        profile?.created_at
          ?.split("T")[0];

      // =====================
      // MONTH
      // =====================

      const year =
        currentMonth.getFullYear();

      const month =
        currentMonth.getMonth();

      const monthDates =
        generateMonthDates(
          year,
          month
        );

      const startDate =
        formatDate(
          new Date(
            year,
            month,
            1
          )
        );

      const endDate =
        formatDate(
          new Date(
            year,
            month + 1,
            0
          )
        );

      // =====================
      // LOAD TABLES
      // =====================

      const [
        sugarRes,
        bpRes,
        weightRes,
        hydrationRes,
        medicationRes,
        medicationsRes,
      ] = await Promise.all([

        supabase
          .from("sugar_logs")
          .select("*")
          .eq("user_id", userId)
          .gte(
            "log_date",
            startDate
          )
          .lte(
            "log_date",
            endDate
          ),

        supabase
          .from("bp_logs")
          .select("*")
          .eq("user_id", userId)
          .gte(
            "log_date",
            startDate
          )
          .lte(
            "log_date",
            endDate
          ),

        supabase
          .from("weight_logs")
          .select("*")
          .eq("user_id", userId)
          .gte(
            "log_date",
            startDate
          )
          .lte(
            "log_date",
            endDate
          ),

        supabase
          .from("hydration_logs")
          .select("*")
          .eq("user_id", userId)
          .gte(
            "log_date",
            startDate
          )
          .lte(
            "log_date",
            endDate
          ),

        supabase
          .from("medication_logs")
          .select("*")
          .eq("user_id", userId)
          .gte(
            "log_date",
            startDate
          )
          .lte(
            "log_date",
            endDate
          ),

        supabase
          .from("medications")
          .select("*")
          .eq("user_id", userId),

      ]);

      // =====================
      // CREATE DATE MAP
      // =====================

      const dateMap: any = {};

      monthDates.forEach((date) => {

        const formatted =
          formatDate(date);

        if (
          joinedDate &&
          formatted < joinedDate
        ) {

          return;

        }

        dateMap[formatted] = {

          date: formatted,

          sugar: "-",

          bp: "-",

          weight: "-",

          hydration: "-",

          medications: [],

        };

      });

      // =====================
      // SUGAR
      // =====================

      sugarRes.data?.forEach(
        (item: any) => {

          if (
            dateMap[item.log_date]
          ) {

            const fasting =
              item.fasting
                ? `F: ${item.fasting}`
                : "";

            const postMeal =
              item.post_meal
                ? `PP: ${item.post_meal}`
                : "";

            dateMap[
              item.log_date
            ].sugar =
              [fasting, postMeal]
                .filter(Boolean)
                .join(" | ") || "-";

          }

        }
      );

      // =====================
      // BP
      // =====================

      bpRes.data?.forEach(
        (item: any) => {

          if (
            dateMap[item.log_date]
          ) {

            const morning =
              item.morning_bp
                ? `M: ${item.morning_bp}`
                : "";

            const evening =
              item.evening_bp
                ? `E: ${item.evening_bp}`
                : "";

            dateMap[
              item.log_date
            ].bp =
              [morning, evening]
                .filter(Boolean)
                .join(" | ") || "-";

          }

        }
      );

      // =====================
      // WEIGHT
      // =====================

      weightRes.data?.forEach(
        (item: any) => {

          if (
            dateMap[item.log_date]
          ) {

            dateMap[
              item.log_date
            ].weight =
              `${item.weight} kg`;

          }

        }
      );

      // =====================
      // HYDRATION
      // =====================

      hydrationRes.data?.forEach(
        (item: any) => {

          if (
            dateMap[item.log_date]
          ) {

            dateMap[
              item.log_date
            ].hydration =
              `${item.glasses} Glasses`;

          }

        }
      );

      // =====================
      // MEDICATIONS
      // =====================

      medicationRes.data?.forEach(
        (log: any) => {

          const medication =
            medicationsRes.data?.find(
              (m: any) =>
                m.id ===
                log.medication_id
            );

          if (
            dateMap[log.log_date]
          ) {

            dateMap[
              log.log_date
            ].medications.push({

              name:
                medication
                  ?.medication_name ||
                "Medication",

              dose:
                log.dose_name,

              status:
                log.status,

            });

          }

        }
      );

      // =====================
      // FINAL SORT
      // =====================

      const finalData =
        Object.values(dateMap)
          .sort(
            (
              a: any,
              b: any
            ) =>
              new Date(
                a.date
              ).getTime() -
              new Date(
                b.date
              ).getTime()
          );

      setTrackerData(
        finalData
      );

      setLoading(false);

    };

    loadTracker();

  }, [currentMonth]);

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

        {/* HEADER */}

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

            <button
              onClick={() => {

                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                    1
                  )
                );

              }}
              className="
                w-11
                h-11
                rounded-full
                bg-white
                border
                border-[#eadfd2]
              "
            >

              ←

            </button>

            <h2 className="
              text-xl
              font-semibold
              text-[#3d3027]
            ">

              {currentMonth.toLocaleString(
                "default",
                {
                  month: "long",
                  year: "numeric",
                }
              )}

            </h2>

            <button
              onClick={() => {

                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                    1
                  )
                );

              }}
              className="
                w-11
                h-11
                rounded-full
                bg-white
                border
                border-[#eadfd2]
              "
            >

              →

            </button>

          </div>

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

                <th className="p-5 text-left">
                  Date
                </th>

                <th className="p-5 text-left">
                  Sugar
                </th>

                <th className="p-5 text-left">
                  BP
                </th>

                <th className="p-5 text-left">
                  Weight
                </th>

                <th className="p-5 text-left">
                  Hydration
                </th>

                <th className="p-5 text-left">
                  Medication
                </th>

              </tr>

            </thead>

            <tbody>

              {trackerData.map(
                (
                  item,
                  index
                ) => {

                  const missed =
                    item.medications?.filter(
                      (
                        m: any
                      ) =>
                        m.status !==
                        "taken"
                    ) || [];

                  const allTaken =
                    item.medications
                      .length > 0 &&
                    missed.length === 0;

                  return (

                    <tr
                      key={index}
                      className="
                        border-t
                        border-[#eadfd2]
                      "
                    >

                      <td className="p-5">

                        {new Date(
                          item.date
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                          }
                        )}

                      </td>

                      <td className="p-5">
                        {item.sugar}
                      </td>

                      <td className="p-5">
                        {item.bp}
                      </td>

                      <td className="p-5">
                        {item.weight}
                      </td>

                      <td className="p-5">
                        {item.hydration}
                      </td>

                      <td className="p-5">

                        {item
                          .medications
                          .length === 0 ? (

                          "-"

                        ) : (

                          <div className="
                            relative
                            group
                            w-fit
                          ">

                            <span
                              className={
                                allTaken
                                  ? "text-green-600 text-xl"
                                  : "text-red-500 text-xl"
                              }
                            >

                              {allTaken
                                ? "✔"
                                : "✘"}

                            </span>

                            {!allTaken && (

                              <div className="
                                absolute
                                hidden
                                group-hover:block
                                bg-[#1f1f1f]
                                text-white
                                text-xs
                                rounded-xl
                                p-3
                                top-8
                                left-0
                                z-50
                                min-w-[220px]
                              ">

                                <p className="
                                  font-semibold
                                  mb-2
                                ">

                                  Missed Doses

                                </p>

                                {missed.map(
                                  (
                                    med: any,
                                    i: number
                                  ) => (

                                    <p key={i}>

                                      • {med.name}
                                      {" "}
                                      (
                                      {med.dose}
                                      )

                                    </p>

                                  )
                                )}

                              </div>

                            )}

                          </div>

                        )}

                      </td>

                    </tr>

                  );

                }
              )}

            </tbody>

          </table>

        </div>

      </section>

      <DashboardFooter />

    </main>

  );

}