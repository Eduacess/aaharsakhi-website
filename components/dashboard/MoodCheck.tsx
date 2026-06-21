"use client";

import { useState } from "react";

const moods = [

  {
    emoji: "🙂",
    message:
      "Glad this moment feels lighter 🌸",
  },

  {
    emoji: "😌",
    message:
      "Peaceful moments matter more than you think 🤍",
  },

  {
    emoji: "🥺",
    message:
      "Be gentle with yourself today 🌷",
  },

  {
    emoji: "😔",
    message:
      "One difficult moment does not define your journey ✨",
  },

  {
    emoji: "😴",
    message:
      "Rest is also healing 🌙",
  },

  {
    emoji: "😣",
    message:
      "Take one breath at a time 🤍",
  },

  {
    emoji: "😤",
    message:
      "It’s okay to feel overwhelmed sometimes 🌿",
  },

  {
    emoji: "❤️",
    message:
      "Your heart has survived so much already ✨",
  },

];

export default function MoodCheck() {

  const [
    selectedMood,
    setSelectedMood,
  ] = useState<any>(null);

  return (

    <div className="
      bg-[#fffaf5]
      border
      border-[#eadfd2]
      rounded-[28px]
      p-4
    ">

      {/* TITLE */}

      <h2 className="
        text-[16px]
        font-semibold
        text-[#3d3027]
        mb-1
      ">

        How are you feeling right now?

      </h2>

      <p className="
        text-xs
        text-[#7b6a58]
        mb-4
      ">

        Pause and check in 🌸

      </p>

      {/* EMOJIS */}

      <div className="
        flex
        flex-wrap
        gap-2
      ">

        {moods.map(
          (
            mood,
            index
          ) => (

          <button
            key={index}
            onClick={() =>
              setSelectedMood(
                mood
              )
            }
            className={`
              w-10
              h-10
              rounded-full
              text-xl
              flex
              items-center
              justify-center
              transition

              ${
                selectedMood
                  ?.emoji ===
                mood.emoji

                  ? "bg-[#f3e6da] scale-105"

                  : "bg-white border border-[#eadfd2] hover:bg-[#fdf3eb]"
              }
            `}
          >

            {mood.emoji}

          </button>

        ))}

      </div>

      {/* MESSAGE */}

      {selectedMood && (

        <div className="
          mt-4
          bg-white
          border
          border-[#eadfd2]
          rounded-[18px]
          p-3
        ">

          <p className="
            text-sm
            text-[#5f5348]
            leading-relaxed
          ">

            {
              selectedMood.message
            }

          </p>

        </div>

      )}

    </div>

  );

}