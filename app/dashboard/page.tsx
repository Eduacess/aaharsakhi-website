'use client';

import { useState } from 'react';

const meals = [
  {
    title: 'Morning Ritual',
    emoji: '🌞',
    detail: 'Warm jeera water with soaked almonds and walnuts.',
  },
  {
    title: 'Breakfast',
    emoji: '🥣',
    detail: 'Vegetable poha with curd and herbal tea.',
  },
  {
    title: 'Mid Snack',
    emoji: '🍎',
    detail: 'Apple slices with flax seeds.',
  },
  {
    title: 'Lunch',
    emoji: '🍛',
    detail: 'Dal, rice, lauki sabzi and chaas.',
  },
  {
    title: 'Evening Snack',
    emoji: '☕',
    detail: 'Roasted makhana with light tea.',
  },
  {
    title: 'Dinner',
    emoji: '🥗',
    detail: 'Moong khichdi with warm vegetable soup.',
  },
  {
    title: 'Bedtime Ritual',
    emoji: '🌙',
    detail: 'Turmeric milk before sleep.',
  },
  {
    title: 'Avoid Foods',
    emoji: '🚫',
    detail: 'Avoid fried snacks and excess sugar.',
  },
];

export default function DashboardPage() {

  const [activeTracker, setActiveTracker] = useState<string | null>(null);
  const [openLibrary, setOpenLibrary] = useState(false);

  return (

    <div className="min-h-screen bg-[#f8f2ea] text-[#40342d] pb-28">

      {/* HEADER */}

      <div className="px-6 pt-6">

        <div className="flex items-start justify-between">

          {/* LOGO */}

          <img
            src="/logo.png"
            alt="Aahar Sakhi"
            className="w-[85px] md:w-[100px] object-contain"
          />

          {/* CENTER */}

          <div className="flex-1 text-center pr-16">

            <h1 className="text-[30px] md:text-[42px] font-semibold tracking-[-1px] leading-tight">

              Welcome Back, Ria 🌿

            </h1>

            <p className="mt-2 text-[14px] italic text-[#7b6f63] whitespace-nowrap overflow-hidden text-ellipsis">

              “Healing begins gently, one nourishing step at a time.”

            </p>

          </div>

        </div>

      </div>

      {/* MAIN SECTION */}

      <div className="px-6 mt-8">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* WHAT TO EAT */}

          <div className="bg-[#fffaf5] rounded-[34px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

            <p className="uppercase tracking-[3px] text-[#9a8067] text-[11px]">

              Today’s Nourishment

            </p>

            <h2 className="mt-2 text-[34px] font-semibold tracking-[-1px]">

              What To Eat Today

            </h2>

            {/* FLIP CARDS */}

            <div className="mt-6 grid grid-cols-2 gap-4">

              {meals.map((meal, index) => (

                <div
                  key={index}
                  className="group h-[92px] [perspective:1200px]"
                >

                  <div
                    className="relative w-full h-full duration-700"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >

                    {/* FRONT */}

                    <div
                      className="absolute inset-0 rounded-[24px]
                      bg-gradient-to-br from-[#f6ede3] to-[#ead9c8]
                      flex flex-col items-center justify-center p-4
                      transition-all duration-700
                      group-hover:[transform:rotateY(180deg)]"
                      style={{
                        backfaceVisibility: 'hidden',
                      }}
                    >

                      <div className="text-[24px] leading-none">
                        {meal.emoji}
                      </div>

                      <h3 className="mt-1 text-[12px] font-medium text-center leading-[1.2] px-2">

                        {meal.title}

                      </h3>

                    </div>

                    {/* BACK */}

                    <div
                      className="absolute inset-0 rounded-[24px]
                      bg-gradient-to-br from-[#dcc1a8] to-[#cba789]
                      p-4 flex flex-col justify-center
                      transition-all duration-700
                      [transform:rotateY(180deg)]
                      group-hover:[transform:rotateY(360deg)]"
                      style={{
                        backfaceVisibility: 'hidden',
                      }}
                    >

                      <p className="text-[10px] leading-[1.4] text-center text-[#4e3d31] px-2">

                        {meal.detail}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            {/* TRACKERS SECTION */}

            <div className="bg-[#fffaf5] rounded-[34px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

              {/* SAKHI KE NUSHKE */}

              <div className="rounded-[24px] bg-gradient-to-r from-[#dcc1a8] to-[#cba789] p-5">

                <div className="flex items-start gap-3">

                  <img
                    src="/nuskha.png"
                    alt="Nushka"
                    className="w-[42px] h-[42px] object-contain drop-shadow-sm mt-1"
                  />

                  <div>

                    <h2 className="text-[21px] font-semibold tracking-[-0.3px] text-[#4b382d]">

                      Sakhi Ke Nushke

                    </h2>

                    <p className="mt-3 text-[15px] leading-[1.9] text-[#5b4638]">

                      Healing begins when nourishment becomes love.

                    </p>

                  </div>

                </div>

              </div>

              {/* TRACKERS */}

              <div className="mt-5 grid grid-cols-2 gap-4">

                {[
                  'Medicine Tracker',
                  'Sugar Tracker',
                  'BP Tracker',
                  'Hydration Tracker',
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() => setActiveTracker(item)}
                    className="h-[90px] rounded-[24px]
                    bg-gradient-to-br from-[#f6ede3] to-[#ead9c8]
                    hover:scale-[1.02]
                    transition-all duration-300
                    flex items-center justify-center
                    text-center px-3"
                  >

                    <span className="text-[15px] font-medium leading-[1.4] text-[#4b382d]">

                      {item}

                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* APPOINTMENT + LIBRARY */}

            <div className="grid grid-cols-2 gap-4">

              {/* APPOINTMENT */}

              <div className="bg-[#fffaf5] rounded-[28px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

                <div className="flex items-start justify-between">

                  <div>

                    <p className="uppercase tracking-[3px] text-[#9a8067] text-[11px]">

                      Upcoming Appointment

                    </p>

                    <h3 className="mt-2 text-[20px] font-semibold text-[#4b382d]">

                      Dr. Mehta Consultation

                    </h3>

                  </div>

                  <div className="w-[50px] h-[50px]
                  rounded-[18px]
                  bg-gradient-to-br from-[#f6ede3] to-[#ead9c8]
                  flex items-center justify-center text-[22px]">

                    📅

                  </div>

                </div>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center justify-between">

                    <p className="text-[14px] text-[#7b6f63]">
                      Date
                    </p>

                    <p className="text-[14px] font-medium text-[#4b382d]">
                      12 June 2026
                    </p>

                  </div>

                  <div className="flex items-center justify-between">

                    <p className="text-[14px] text-[#7b6f63]">
                      Day
                    </p>

                    <p className="text-[14px] font-medium text-[#4b382d]">
                      Wednesday
                    </p>

                  </div>

                  <div className="flex items-center justify-between">

                    <p className="text-[14px] text-[#7b6f63]">
                      Time
                    </p>

                    <p className="text-[14px] font-medium text-[#4b382d]">
                      7:00 PM
                    </p>

                  </div>

                </div>

              </div>

              {/* READING CORNER */}

              <button
                onClick={() => setOpenLibrary(true)}
                className="bg-[#fffaf5] rounded-[28px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-left w-full"
              >

                <p className="uppercase tracking-[3px] text-[#9a8067] text-[11px]">

                  Reading Corner

                </p>

                <h3 className="mt-2 text-[22px] font-semibold text-[#4b382d]">

                  Books & Reads 📚

                </h3>

                <div className="mt-6 flex items-end gap-2">

                  <div className="w-7 h-20 bg-[#d8c2aa] rounded-t-[6px]"></div>
                  <div className="w-7 h-28 bg-[#b89272] rounded-t-[6px]"></div>
                  <div className="w-7 h-16 bg-[#c7a98b] rounded-t-[6px]"></div>
                  <div className="w-7 h-24 bg-[#d6b9a0] rounded-t-[6px]"></div>

                </div>

              </button>

            </div>

          </div>

        </div>

        
{/* STORIES */}

<div className="mt-6 bg-[#fffaf5] rounded-[34px] p-6 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

  {/* TITLE */}

  <div className="text-center">

    <p className="uppercase tracking-[3px] text-[#9a8067] text-[11px]">

      Daily Positivity

    </p>

    <h2 className="mt-2 text-[32px] font-semibold tracking-[-1px]">

      Stories & Inspiration ✨

    </h2>

  </div>

  {/* MOVING STORIES */}

  <div className="relative mt-8 overflow-hidden">

    <div className="flex gap-5 animate-marquee w-max">

      {[
        {
          title: 'Week 24 Pregnancy 🌸',
          text: 'Your baby can now respond to familiar sounds and voices.',
        },
        {
          title: 'Diabetes Support 🌿',
          text: 'Balanced evening snacks may support sugar stability.',
        },
        {
          title: 'Healing Reminder 🤍',
          text: 'Rest is equally important in recovery and nourishment.',
        },
        {
          title: 'Mindful Wellness ✨',
          text: 'Small consistent habits create long-term healing changes.',
        },

        /* DUPLICATE */

        {
          title: 'Week 24 Pregnancy 🌸',
          text: 'Your baby can now respond to familiar sounds and voices.',
        },
        {
          title: 'Diabetes Support 🌿',
          text: 'Balanced evening snacks may support sugar stability.',
        },
        {
          title: 'Healing Reminder 🤍',
          text: 'Rest is equally important in recovery and nourishment.',
        },
        {
          title: 'Mindful Wellness ✨',
          text: 'Small consistent habits create long-term healing changes.',
        },

      ].map((story, index) => (

        <div
          key={index}
          className="min-w-[340px]
          rounded-[28px]
          bg-gradient-to-br from-[#e9d5c2] to-[#d8b89a]
          p-6 flex-shrink-0"
        >

          <h3 className="text-[20px] font-semibold text-[#4b382d]">

            {story.title}

          </h3>

          <p className="mt-4 text-[14px] leading-[1.9] text-[#5f4b3c]">

            {story.text}

          </p>

        </div>

      ))}

    </div>

  </div>

</div>

{/* RECIPE + YOGA */}

<div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">

{/* RECIPE */}

<div className="bg-[#fffaf5] rounded-[34px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

  <h2 className="text-[30px] font-semibold tracking-[-1px]">

```
Recipe Book 🍲
```

  </h2>

{/* IMAGE */}

  <div className="mt-5 h-[240px] rounded-[28px] bg-[#eadccc] overflow-hidden">


  {/* YOGA */}

  <div className="bg-[#fffaf5] rounded-[34px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

    <h2 className="text-[30px] font-semibold tracking-[-1px]">

      Yoga Today 🧘🏻‍♀️

    </h2>

    {/* IMAGE */}

    <div className="mt-5 h-[240px] rounded-[28px] bg-[#eadccc] overflow-hidden">

      <img
        src="/yoga.jpg"
        alt="Yoga"
        className="w-full h-full object-cover"
      />

    </div>

    {/* TITLE */}

    <h3 className="mt-5 text-[24px] font-semibold text-[#4b382d]">

      Butterfly Pose

    </h3>

    {/* BENEFITS */}

    <p className="mt-2 text-[14px] leading-[1.8] text-[#7c6758]">

      Helps relaxation, flexibility and digestion support.

    </p>

    {/* RECOMMENDED */}

<div className="mt-5 flex items-center gap-2">

  <p className="text-[13px] uppercase tracking-[2px] text-[#8a7462]">

    Recommended:

  </p>

  <p className="text-[15px] font-medium text-[#4b382d]">

    3 Sets • 30 Seconds Each

  </p>

</div>

    {/* YOUTUBE */}

    <a
      href="https://youtube.com"
      target="_blank"
      className="mt-6 inline-flex items-center justify-center
      h-[48px] px-6 rounded-full
      bg-[#cba789]
      text-white text-[14px] font-medium"
    >

      Watch Yoga Video ▶

    </a>

  </div>

</div>


        {/* ROUND BUTTONS */}

        <div className="mt-8 flex justify-center gap-6 flex-wrap">

          {[
            'FAQs',
            'Speak To Sakhi',
            'Connect Founder',
          ].map((item) => (

            <button
              key={item}
              className="w-[130px] h-[130px]
              rounded-full bg-[#fffaf5]
              shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              text-[15px] font-medium
              hover:scale-[1.03]
              transition-all duration-300"
            >

              {item}

            </button>

          ))}

        </div>

      </div>

      {/* LIBRARY POPUP */}

      {openLibrary && (

        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-5">

          <div className="bg-[#fffaf5] w-full max-w-2xl rounded-[36px] p-6 relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setOpenLibrary(false)}
              className="absolute top-5 right-5 text-[22px]"
            >
              ✕
            </button>

            <h2 className="text-[34px] font-semibold tracking-[-1px] text-[#4b382d]">

              Reading Corner 📚

            </h2>

            <p className="mt-2 text-[14px] text-[#7b6f63]">

              Explore thoughtful reads, mythology, healing journeys and wellness books.

            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

              {[
                {
                  name: 'Bhagavad Gita',
                  type: 'Mythology',
                  link: 'https://www.holy-bhagavad-gita.org/',
                },
                {
                  name: 'Healing Through Food',
                  type: 'Nutrition',
                  link: '#',
                },
                {
                  name: 'Emotional Healing',
                  type: 'Mindfulness',
                  link: '#',
                },
                {
                  name: 'Pregnancy Wellness',
                  type: 'Women Care',
                  link: '#',
                },
              ].map((book, index) => (

                <div
                  key={index}
                  className="rounded-[24px]
                  bg-gradient-to-br from-[#f6ede3] to-[#ead9c8]
                  p-5"
                >

                  <p className="text-[12px] uppercase tracking-[2px] text-[#8a7462]">

                    {book.type}

                  </p>

                  <h3 className="mt-2 text-[20px] font-semibold text-[#4b382d] leading-[1.4]">

                    {book.name}

                  </h3>

                  <a
                    href={book.link}
                    target="_blank"
                    className="mt-6 inline-flex items-center justify-center
                    h-[42px] px-5 rounded-full
                    bg-[#cba789]
                    text-white text-[13px] font-medium"
                  >

                    Read Book

                  </a>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

      {/* TRACKER POPUP */}

      {activeTracker && (

        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-5">

          <div className="bg-[#fffaf5] w-full max-w-md rounded-[32px] p-6 relative">

            <button
              onClick={() => setActiveTracker(null)}
              className="absolute top-5 right-5 text-[20px]"
            >
              ✕
            </button>

            <h2 className="text-[28px] font-semibold tracking-[-1px] text-[#4b382d]">

              {activeTracker}

            </h2>

            <p className="mt-1 text-[13px] text-[#8a7462]">

              Today's Data

            </p>

            {/* MEDICINE */}

            {activeTracker === 'Medicine Tracker' && (

              <div className="mt-6 space-y-4">

                <div className="rounded-[22px] bg-[#f4ece3] p-4">

                  <p className="text-[13px] text-[#8a7462]">
                    Morning
                  </p>

                  <h3 className="mt-2 text-[18px] font-semibold">
                    Metformin ✅
                  </h3>

                  <p className="mt-1 text-[13px] text-[#6a584a]">
                    8:00 AM
                  </p>

                </div>

                <div className="rounded-[22px] bg-[#f4ece3] p-4">

                  <p className="text-[13px] text-[#8a7462]">
                    Evening
                  </p>

                  <h3 className="mt-2 text-[18px] font-semibold">
                    Tylenol ⏰
                  </h3>

                  <p className="mt-1 text-[13px] text-[#6a584a]">
                    7:00 PM
                  </p>

                </div>

              </div>

            )}

            {/* SUGAR */}

            {activeTracker === 'Sugar Tracker' && (

              <div className="mt-6 space-y-4">

                {[
                  ['Fasting Sugar', '120 mg/dL'],
                  ['Post Lunch', '145 mg/dL'],
                  ['Before Bed', '132 mg/dL'],
                ].map((item, index) => (

                  <div
                    key={index}
                    className="rounded-[22px] bg-[#f4ece3] p-4"
                  >

                    <p className="text-[13px] text-[#8a7462]">
                      {item[0]}
                    </p>

                    <h3 className="mt-2 text-[22px] font-semibold">
                      {item[1]}
                    </h3>

                  </div>

                ))}

              </div>

            )}

            {/* BP */}

            {activeTracker === 'BP Tracker' && (

              <div className="mt-6 space-y-4">

                {[
                  ['Morning BP', '120/80'],
                  ['Evening BP', '130/84'],
                ].map((item, index) => (

                  <div
                    key={index}
                    className="rounded-[22px] bg-[#f4ece3] p-4"
                  >

                    <p className="text-[13px] text-[#8a7462]">
                      {item[0]}
                    </p>

                    <h3 className="mt-2 text-[22px] font-semibold">
                      {item[1]}
                    </h3>

                  </div>

                ))}

              </div>

            )}

            {/* HYDRATION */}

            {activeTracker === 'Hydration Tracker' && (

              <div className="mt-6">

                <div className="rounded-[24px] bg-[#f4ece3] p-5">

                  <p className="text-[15px] font-medium text-[#5f4b3c]">

                    Today's Water Intake

                  </p>

                  <div className="mt-5 flex flex-wrap gap-3 text-[30px]">

                    <span>🥛</span>
                    <span>🥛</span>
                    <span>🥛</span>
                    <span>🥛</span>

                    <span className="opacity-30">🥛</span>
                    <span className="opacity-30">🥛</span>
                    <span className="opacity-30">🥛</span>
                    <span className="opacity-30">🥛</span>

                  </div>

                  <p className="mt-5 text-[15px] text-[#5f4b3c]">

                    1 Litre Today

                  </p>

                </div>

              </div>

            )}

            <button className="mt-6 w-full h-[54px] rounded-full bg-[#cba789] text-white font-medium">

              + Add New Entry

            </button>

          </div>

        </div>

      )}

<style jsx global>{`
  @keyframes marquee {

    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%);
    }

  }

  .animate-marquee {

    animation: marquee 28s linear infinite;

  }

  /* PAUSE ON HOVER */

  .animate-marquee:hover {

    animation-play-state: paused;

  }

`}</style>


    

    </div>

  );

}
