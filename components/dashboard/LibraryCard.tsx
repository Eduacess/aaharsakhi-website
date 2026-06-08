"use client";

import { useState } from "react";

const books = [

{
title: "Ikigai",
link: "https://example.com",
},

{
title: "Atomic Habits",
link: "https://example.com",
},

{
title: "Master Your Emotions",
link: "https://example.com",
},

{
title: "The Power of Now",
link: "https://example.com",
},

];

export default function LibraryCard() {

const [open, setOpen] = useState(false);

return (

<>

  {/* CARD */}

  <div
    onClick={() => setOpen(true)}
    className="
      bg-[#fffaf5]
      border
      border-[#eadfd2]
      rounded-[28px]
      p-5
      cursor-pointer
      hover:bg-[#fdf6f1]
      transition
    "
  >

    <h2 className="text-lg font-semibold text-[#3d3027] mb-2">

      Library 📚

    </h2>

    <p className="text-[#7b6a58] text-sm">

    Explore handpicked books for emotional healing, mindfulness, positivity, peaceful living and inner wellness during your journey.

    </p>

  </div>

  {/* MODAL */}

  {open && (

    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">

      <div className="bg-white rounded-[32px] p-6 w-full max-w-xl relative max-h-[80vh] overflow-y-auto">

        {/* CLOSE */}

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-black"
        >

          ×

        </button>

        <h2 className="text-2xl font-semibold text-[#3d3027] mb-6">

          Wellness Library 📚

        </h2>

        <div className="space-y-4">

          {books.map((book, index) => (

            <a
              key={index}
              href={book.link}
              target="_blank"
              className="
                block
                bg-[#fffaf5]
                border
                border-[#eadfd2]
                rounded-2xl
                px-5
                py-4
                hover:bg-[#fdf3eb]
                transition
              "
            >

              <p className="font-medium text-[#3d3027]">

                {book.title}

              </p>

            </a>

          ))}

        </div>

      </div>

    </div>

  )}

</>

);

}