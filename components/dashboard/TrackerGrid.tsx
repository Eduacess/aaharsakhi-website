
"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

const allTrackers = [
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

  const [activeTracker,
  setActiveTracker] =
    useState<string | null>(null);

  const [userId,
  setUserId] =
    useState("");

  const [programInterest,
  setProgramInterest] =
    useState("");

  const [medications,
  setMedications] =
    useState<any[]>([]);

  const [hydrationCount,
  setHydrationCount] =
    useState(0);

  const [fastingSugar,
  setFastingSugar] =
    useState("");

  const [postMealSugar,
  setPostMealSugar] =
    useState("");

  const [morningBP,
  setMorningBP] =
    useState("");

  const [eveningBP,
  setEveningBP] =
    useState("");

  const [weight,
  setWeight] =
    useState("");

  const [todaySugar,
  setTodaySugar] =
    useState<any>(null);

  const [todayBP,
  setTodayBP] =
    useState<any>(null);

  const [todayWeight,
  setTodayWeight] =
    useState<any>(null);

  const today =
    new Date()
      .toLocaleDateString(
        "en-CA"
      );

  // =====================================
  // LOAD DATA
  // =====================================

  useEffect(() => {

    const loadData =
      async () => {

      const {
        data: { session },
      } =
      await supabase.auth
      .getSession();

      if (
        !session?.user?.id
      ) return;

      setUserId(
        session.user.id
      );

      // PROFILE

      const {
        data: profile,
      } = await supabase
        .from("profiles")
        .select(
          "program_interest"
        )
        .eq(
          "id",
          session.user.id
        )
        .single();

      if (profile) {

        setProgramInterest(
          profile
          .program_interest
        );

      }

      // MEDICATIONS

      const {
        data: meds,
      } = await supabase
        .from("medications")
        .select("*")
        .eq(
          "user_id",
          session.user.id
        )
        .neq(
          "medication_type",
          "paused"
        );

      if (meds) {

        const {
          data: todayLogs,
        } = await supabase
          .from(
            "medication_logs"
          )
          .select("*")
          .eq(
            "user_id",
            session.user.id
          )
          .eq(
            "log_date",
            today
          );

        const formatted =
          meds.map((med) => {

          const taken =
            todayLogs?.find(
              (log) =>
                log
                .medication_id
                === med.id
            );

          return {
            ...med,
            done:
              taken?.status
              === "taken",
          };

        });

        setMedications(
          formatted
        );

      }

      // HYDRATION

      const {
        data: hydration,
      } = await supabase
        .from(
          "hydration_logs"
        )
        .select("*")
        .eq(
          "user_id",
          session.user.id
        )
        .eq(
          "log_date",
          today
        )
        .single();

      if (hydration) {

        setHydrationCount(
          hydration.glasses
        );

      }

      // SUGAR

      const {
        data: sugar,
      } = await supabase
        .from("sugar_logs")
        .select("*")
        .eq(
          "user_id",
          session.user.id
        )
        .eq(
          "log_date",
          today
        )
        .single();

      if (sugar) {

        setTodaySugar(
          sugar
        );

      }

      // BP

      const {
        data: bp,
      } = await supabase
        .from("bp_logs")
        .select("*")
        .eq(
          "user_id",
          session.user.id
        )
        .eq(
          "log_date",
          today
        )
        .single();

      if (bp) {

        setTodayBP(bp);

      }

      // WEIGHT

      const {
        data: wt,
      } = await supabase
        .from(
          "weight_logs"
        )
        .select("*")
        .eq(
          "user_id",
          session.user.id
        )
        .eq(
          "log_date",
          today
        )
        .single();

      if (wt) {

        setTodayWeight(
          wt
        );

      }

    };

    loadData();

  }, []);

  // =====================================
  // COLOR HELPERS
  // =====================================

  const getSugarColor =
    (value: number) => {

    if (value < 100)
      return "text-green-600";

    if (value <= 125)
      return "text-yellow-600";

    return "text-red-600";

  };

  // =====================================
  // SAVE SUGAR
  // =====================================

  const saveSugar =
    async () => {

    await supabase
      .from("sugar_logs")
      .upsert(
        {
          user_id: userId,

          fasting:
            fastingSugar,

          post_meal:
            postMealSugar,

          log_date: today,
        },
        {
          onConflict:
            "user_id,log_date",
        }
      );

    setTodaySugar({
      fasting:
        fastingSugar,

      post_meal:
        postMealSugar,
    });

    setFastingSugar("");
    setPostMealSugar("");

  };

  // =====================================
  // SAVE BP
  // =====================================

  const saveBP =
    async () => {

    await supabase
      .from("bp_logs")
      .upsert(
        {
          user_id: userId,

          morning_bp:
            morningBP,

          evening_bp:
            eveningBP,

          log_date: today,
        },
        {
          onConflict:
            "user_id,log_date",
        }
      );

    setTodayBP({
      morning_bp:
        morningBP,

      evening_bp:
        eveningBP,
    });

    setMorningBP("");
    setEveningBP("");

  };

  // =====================================
  // SAVE WEIGHT
  // =====================================

  const saveWeight =
    async () => {

    await supabase
      .from(
        "weight_logs"
      )
      .upsert(
        {
          user_id: userId,

          weight,

          log_date: today,
        },
        {
          onConflict:
            "user_id,log_date",
        }
      );

    setTodayWeight({
      weight,
    });

    setWeight("");

  };

  // =====================================
  // SAVE HYDRATION
  // =====================================

  const saveHydration =
    async (
      glasses: number
    ) => {

    setHydrationCount(
      glasses
    );

    await supabase
      .from(
        "hydration_logs"
      )
      .upsert(
        {
          user_id: userId,

          glasses,

          log_date: today,
        },
        {
          onConflict:
            "user_id,log_date",
        }
      );

  };

  // =====================================
  // MEDICATION
  // =====================================

  const toggleMedication =
    async (
      medication: any,
      index: number
    ) => {

    if (
      medications[index]
      .done
    ) return;

    const updated =
      [...medications];

    updated[index].done =
      true;

    setMedications(
      updated
    );

    await supabase
      .from(
        "medication_logs"
      )
      .insert([
        {
          user_id: userId,

          medication_id:
            medication.id,

          log_date: today,

          dose_name:
            medication
            .medication_name,

          status:
            "taken",
        },
      ]);

  };

  // =====================================
  // FILTER TRACKERS
  // =====================================

  const trackers =
    allTrackers.filter(
      (tracker) => {

      if (
        tracker.title
        === "Feeding"
      ) {

        return (
          programInterest ===
          "Vatsalya Poshana - Delivered"
        );

      }

      return true;

    });

  return (

    <>

      {/* GRID */}

      <div className="
        grid
        grid-cols-3
        gap-3
      ">

        {trackers.map(
          (tracker) => (

          <button
            key={
              tracker.title
            }
            onClick={() =>
              setActiveTracker(
                tracker.title
              )
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

            <span className="
              text-2xl
              mb-2
            ">

              {
                tracker.icon
              }

            </span>

            <span className="
              text-xs
              font-medium
              text-[#3d3027]
            ">

              {
                tracker.title
              }

            </span>

          </button>

        ))}

      </div>

      {/* MODAL */}

      {activeTracker && (

        <div className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/30
          px-4
        ">

          <div className="
            bg-white
            rounded-[28px]
            p-6
            w-full
            max-w-md
            shadow-2xl
            relative
          ">

            <button
              onClick={() =>
                setActiveTracker(
                  null
                )
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

            <h2 className="
              text-2xl
              font-semibold
              text-[#3d3027]
              mb-5
            ">

              {activeTracker}
              {" "}
              Tracker

            </h2>

            {/* MEDICATION */}

            {activeTracker ===
            "Medication" && (

              <div className="
                space-y-4
              ">

                {medications.map(
                  (
                    medication,
                    index
                  ) => (

                  <div
                    key={
                      medication.id
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      bg-[#f8f3ee]
                      rounded-2xl
                      px-4
                      py-3
                    "
                  >

                    <div>

                      <p className="
                        font-medium
                        text-[#3d3027]
                      ">

                        {
                          medication
                          .medication_name
                        }

                      </p>

                      <p className="
                        text-xs
                        text-[#7c6d60]
                      ">

                        {
                          medication
                          .dosage
                        }

                      </p>

                    </div>

                    <button
                      disabled={
                        medication
                        .done
                      }
                      onClick={() =>
                        toggleMedication(
                          medication,
                          index
                        )
                      }
                      className={`
                        w-6
                        h-6
                        rounded-full

                        ${
                          medication
                          .done

                          ? "bg-green-600 text-white"

                          : "bg-gray-200"
                        }
                      `}
                    >

                      {
                        medication
                        .done
                        ? "✓"
                        : ""
                      }

                    </button>

                  </div>

                ))}

              </div>

            )}

            {/* SUGAR */}

            {activeTracker ===
            "Sugar" && (

              <div className="
                space-y-4
              ">

                {!todaySugar
                ?.fasting && (

                  <input
                    value={
                      fastingSugar
                    }
                    onChange={(
                      e
                    ) =>
                      setFastingSugar(
                        e.target
                        .value
                      )
                    }
                    placeholder="
                      Fasting Sugar
                    "
                    className="
                      w-full
                      border
                      border-[#eadfd2]
                      rounded-2xl
                      p-4
                    "
                  />

                )}

                {!todaySugar
                ?.post_meal && (

                  <input
                    value={
                      postMealSugar
                    }
                    onChange={(
                      e
                    ) =>
                      setPostMealSugar(
                        e.target
                        .value
                      )
                    }
                    placeholder="
                      Post Meal Sugar
                    "
                    className="
                      w-full
                      border
                      border-[#eadfd2]
                      rounded-2xl
                      p-4
                    "
                  />

                )}

                <button
                  onClick={
                    saveSugar
                  }
                  className="
                    w-full
                    bg-[#c58d63]
                    text-white
                    rounded-2xl
                    py-3
                  "
                >

                  Save Entry

                </button>

                {todaySugar && (

                  <div className="
                    bg-[#f8f3ee]
                    rounded-2xl
                    p-4
                    space-y-2
                  ">

                    {todaySugar
                    .fasting && (

                      <p className={`
                        font-medium

                        ${
                          getSugarColor(
                            Number(
                              todaySugar
                              .fasting
                            )
                          )
                        }
                      `}>

                        Fasting:
                        {" "}
                        {
                          todaySugar
                          .fasting
                        }

                      </p>

                    )}

                    {todaySugar
                    .post_meal && (

                      <p className={`
                        font-medium

                        ${
                          getSugarColor(
                            Number(
                              todaySugar
                              .post_meal
                            )
                          )
                        }
                      `}>

                        Post Meal:
                        {" "}
                        {
                          todaySugar
                          .post_meal
                        }

                      </p>

                    )}

                  </div>

                )}

              </div>

            )}

            {/* BP */}

            {activeTracker ===
            "BP" && (

              <div className="
                space-y-4
              ">

                {!todayBP
                ?.morning_bp && (

                  <input
                    value={
                      morningBP
                    }
                    onChange={(
                      e
                    ) =>
                      setMorningBP(
                        e.target
                        .value
                      )
                    }
                    placeholder="
                      Morning BP
                    "
                    className="
                      w-full
                      border
                      border-[#eadfd2]
                      rounded-2xl
                      p-4
                    "
                  />

                )}

                {!todayBP
                ?.evening_bp && (

                  <input
                    value={
                      eveningBP
                    }
                    onChange={(
                      e
                    ) =>
                      setEveningBP(
                        e.target
                        .value
                      )
                    }
                    placeholder="
                      Evening BP
                    "
                    className="
                      w-full
                      border
                      border-[#eadfd2]
                      rounded-2xl
                      p-4
                    "
                  />

                )}

                <button
                  onClick={
                    saveBP
                  }
                  className="
                    w-full
                    bg-[#c58d63]
                    text-white
                    rounded-2xl
                    py-3
                  "
                >

                  Save Entry

                </button>

                {todayBP && (

                  <div className="
                    bg-[#f8f3ee]
                    rounded-2xl
                    p-4
                    space-y-2
                  ">

                    {todayBP
                    .morning_bp && (

                      <p>

                        Morning:
                        {" "}
                        {
                          todayBP
                          .morning_bp
                        }

                      </p>

                    )}

                    {todayBP
                    .evening_bp && (

                      <p>

                        Evening:
                        {" "}
                        {
                          todayBP
                          .evening_bp
                        }

                      </p>

                    )}

                  </div>

                )}

              </div>

            )}

            {/* WEIGHT */}

            {activeTracker ===
            "Weight" && (

              <div className="
                space-y-4
              ">

                {!todayWeight
                ?.weight && (

                  <input
                    value={weight}
                    onChange={(
                      e
                    ) =>
                      setWeight(
                        e.target
                        .value
                      )
                    }
                    placeholder="
                      Enter Weight
                    "
                    className="
                      w-full
                      border
                      border-[#eadfd2]
                      rounded-2xl
                      p-4
                    "
                  />

                )}

                <button
                  onClick={
                    saveWeight
                  }
                  className="
                    w-full
                    bg-[#c58d63]
                    text-white
                    rounded-2xl
                    py-3
                  "
                >

                  Save Weight

                </button>

                {todayWeight && (

                  <div className="
                    bg-[#f8f3ee]
                    rounded-2xl
                    p-4
                  ">

                    Today&apos;s Weight:
                    {" "}
                    {
                      todayWeight
                      .weight
                    }
                    {" "}
                    kg

                  </div>

                )}

              </div>

            )}

            {/* HYDRATION */}

            {activeTracker ===
            "Hydration" && (

              <div className="
                space-y-5
              ">

                <div className="
                  flex
                  gap-2
                  flex-wrap
                  justify-center
                ">

                  {[1,2,3,4,5,6,7,8]
                  .map((glass) => (

                    <button
                      key={glass}
                      onClick={() =>
                        saveHydration(
                          glass
                        )
                      }
                      className={`
                        w-10
                        h-14
                        rounded-b-xl
                        rounded-t-md
                        border

                        ${
                          glass <=
                          hydrationCount

                          ? "bg-[#7db7ff] border-[#7db7ff]"

                          : "bg-gray-200 border-gray-300"
                        }
                      `}
                    />

                  ))}

                </div>

                <p className="
                  text-center
                  text-[#5f5348]
                ">

                  {
                    hydrationCount
                    * 250
                  }
                  ml / 2000 ml

                </p>

              </div>

            )}

          </div>

        </div>

      )}

    </>

  );

}
