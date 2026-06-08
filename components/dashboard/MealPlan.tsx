"use client";

import { useState } from "react";

export default function MealPlan() {

const meals = [
{
title: "Morning Ritual",
detail: "Warm lemon water with soaked chia seeds",
},
{
title: "Breakfast",
detail: "Oats bowl with fruits and nuts",
},
{
title: "Mid-Morning",
detail: "Coconut water and pumpkin seeds",
},
{
title: "Lunch",
detail: "Dal, rice, sabzi and salad",
},
{
title: "Evening Snack",
detail: "Roasted makhana and green tea",
},
{
title: "Dinner",
detail: "Khichdi with sautéed vegetables",
},
{
title: "Bedtime Ritual",
detail: "Turmeric milk before sleep",
},
{
title: "Detox Water",
detail: "Cucumber mint infused water",
},
{
title: "Foods To Avoid",
detail: "Sugary drinks and packaged snacks",
},
];

const [flippedIndex, setFlippedIndex] =
useState<number | null>(null);

return (


<div className="bg-[#fffaf5] border border-[#eadfd2] rounded-[36px] p-5 w-full">

  <h2 className="text-2xl font-semibold text-[#3d3027] mb-5">

    Today&apos;s Meal Plan 🍽️

  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

    {meals.map((meal, index) => (

      <div
        key={meal.title}
        style={{ perspective: "1000px" }}
        onMouseEnter={() =>
          setFlippedIndex(index)
        }
        onMouseLeave={() =>
          setFlippedIndex(null)
        }
      >

        <div
          className="relative h-[82px] duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform:
              flippedIndex === index
                ? "rotateY(180deg)"
                : "rotateY(0deg)",
          }}
        >

          {/* FRONT */}

          <div
            className="absolute inset-0 bg-white border border-[#eadfd2] rounded-[24px] flex items-center justify-center text-center text-[#3d3027] font-semibold shadow-sm p-4"
            style={{
              backfaceVisibility: "hidden",
            }}
          >

            {meal.title}

          </div>

          {/* BACK */}

          <div
            className="absolute inset-0 bg-[#c58d63] text-white rounded-[24px] flex items-center justify-center text-center p-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >

            {meal.detail}

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

);

}
