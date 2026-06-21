"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function LittlePositivity() {

  const [memory, setMemory] =
    useState("");

  const [savedMemory, setSavedMemory] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const today =
    new Date()
      .toLocaleDateString(
        "en-CA"
      );

  // =========================
  // LOAD TODAY MEMORY
  // =========================

  useEffect(() => {

    const loadMemory =
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

      const {
        data,
      } = await supabase
        .from(
          "blessings_journal"
        )
        .select("*")
        .eq(
          "user_id",
          session.user.id
        )
        .eq(
          "entry_date",
          today
        )
        .single();

      if (data) {

        setSavedMemory(
          data.memory
        );

      }

      setLoading(false);

    };

    loadMemory();

  }, [today]);

  // =========================
  // SAVE MEMORY
  // =========================

  const saveMemory =
    async () => {

    if (!memory.trim())
      return;

    setSaving(true);

    const {
      data: { session },
    } =
    await supabase.auth
    .getSession();

    if (
      !session?.user?.id
    ) return;

    const { error } =
      await supabase
        .from(
          "blessings_journal"
        )
        .upsert(
          {
            user_id:
              session.user.id,

            entry_date:
              today,

            memory,

          },
          {
            onConflict:
              "user_id,entry_date",
          }
        );

    if (!error) {

      setSavedMemory(
        memory
      );

      setMemory("");

    }

    setSaving(false);

  };

  return (

    <div className="
      bg-[#fffaf5]
      border
      border-[#eadfd2]
      rounded-[32px]
      p-4
    ">

      {/* HEADER */}

      <div className="
        flex
        items-center
        justify-between
        mb-4
      ">

        <div>

          <h2 className="
            text-lg
            font-semibold
            text-[#3d3027]
          ">

            Today&apos;s Blessings ✨

          </h2>

          <p className="
            text-sm
            text-[#7b6a58]
            mt-1
          ">

            What would you like
            to remember about today?

          </p>

        </div>

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="
          py-10
          text-center
          text-[#7b6a58]
        ">

          Loading...

        </div>

      ) : (

        <>

          {/* SAVED MEMORY */}

          {savedMemory && (

            <div className="
              bg-white
              border
              border-[#eadfd2]
              rounded-[24px]
              p-5
              mb-5
            ">

              <p className="
                text-xs
                text-[#a08d7d]
                mb-2
              ">

                TODAY&apos;S MEMORY

              </p>

              <p className="
                text-[#3d3027]
                leading-relaxed
                whitespace-pre-wrap
              ">

                {savedMemory}

              </p>

            </div>

          )}

          {/* TEXTAREA */}

          {!savedMemory && (

            <>

              <textarea
                value={memory}
                onChange={(e) =>
                  setMemory(
                    e.target.value
                  )
                }
                placeholder="
Write something beautiful about today...

Maybe a smile,
a peaceful moment,
a small win,
a blessing,
or simply something you never want to forget.
                "
                className="
                  w-full
                  min-h-[120px]
                  rounded-[24px]
                  border
                  border-[#eadfd2]
                  bg-white
                  p-5
                  outline-none
                  resize-none
                  text-[#3d3027]
                  leading-relaxed
                "
              />

              <button
                onClick={
                  saveMemory
                }
                disabled={saving}
                className="
                  mt-3
                  w-full
                  bg-[#c58d63]
                  hover:bg-[#b27a52]
                  transition
                  text-white
                  rounded-[20px]
                  py-3
                  font-medium
                "
              >

                {saving
                  ? "Saving..."
                  : "Save Today’s Memory"}

              </button>

            </>

          )}

          {/* FOOTER */}

          <div className="
            mt-5
            text-center
          ">

            <p className="
              text-xs
              text-[#a08d7d]
            ">

              Your memories stay private 🌸

            </p>

          </div>

        </>

      )}

    </div>

  );

}