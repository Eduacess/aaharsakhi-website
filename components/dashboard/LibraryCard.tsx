"use client";

import { useEffect, useState } from "react";

export default function LibraryCard() {

  const [open, setOpen] =
    useState(false);

  const [books, setBooks] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // GOOGLE SHEET CSV
  // =========================

  const booksCSV =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ81cnMqbqod8vp4bSY3g3Tc6ycswi0UAUgEdimZfW--xwsxLAwUBahsDuZBRv6h0GSPNvQbRffP8N-/pub?output=csv";

  // =========================
  // PARSE CSV
  // =========================

  const parseCSV = (
    text: string
  ) => {

    const lines =
      text.trim().split("\n");

    return lines.map(
      (line) => {

        const result = [];

        let current = "";
        let insideQuotes = false;

        for (
          let i = 0;
          i < line.length;
          i++
        ) {

          const char =
            line[i];

          if (char === '"') {

            insideQuotes =
              !insideQuotes;

          } else if (
            char === "," &&
            !insideQuotes
          ) {

            result.push(current);

            current = "";

          } else {

            current += char;

          }

        }

        result.push(current);

        return result;

      }
    );

  };

  // =========================
  // LOAD BOOKS
  // =========================

  useEffect(() => {

    const loadBooks =
      async () => {

      try {

        const response =
          await fetch(
            booksCSV
          );

        const text =
          await response.text();

        const rows =
          parseCSV(text)
          .slice(1);

        const formatted =
          rows.map(
            (row) => ({

            id: row[0],

            category:
              row[1],

            title:
              row[2],

            author:
              row[3],

            cover:
              row[4],

            link:
              row[5],

            description:
              row[6],

          }));

        setBooks(
          formatted
        );

        setLoading(false);

      } catch (err) {

        console.log(err);

        setLoading(false);

      }

    };

    loadBooks();

  }, []);

  return (

    <>

      {/* CARD */}

      <div
        onClick={() =>
          setOpen(true)
        }
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

        <h2 className="
          text-lg
          font-semibold
          text-[#3d3027]
          mb-2
        ">

          Wellness Library 📚

        </h2>

        <p className="
          text-[#7b6a58]
          text-sm
          leading-relaxed
        ">

          Explore healing books,
          mythology, emotional
          wellness, mindfulness,
          pregnancy care and
          peaceful living during
          your journey.

        </p>

      </div>

      {/* MODAL */}

      {open && (

        <div className="
          fixed
          inset-0
          z-50
          bg-black/40
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
            max-w-5xl
            relative
            max-h-[90vh]
            overflow-y-auto
          ">

            {/* CLOSE */}

            <button
              onClick={() =>
                setOpen(false)
              }
              className="
                absolute
                top-4
                right-4
                text-2xl
                text-gray-400
                hover:text-black
              "
            >

              ×

            </button>

            {/* TITLE */}

            <h2 className="
              text-3xl
              font-semibold
              text-[#3d3027]
              mb-2
            ">

              Wellness Library 📚

            </h2>

            <p className="
              text-[#7b6a58]
              mb-8
            ">

              Read books for healing,
              emotional wellness,
              spirituality,
              mindfulness and growth.

            </p>

            {/* LOADING */}

            {loading && (

              <div className="
                text-center
                py-10
                text-[#7b6a58]
              ">

                Loading books...

              </div>

            )}

            {/* BOOK GRID */}

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            ">

              {books.map(
                (
                  book,
                  index
                ) => (

                <a
                  key={index}
                  href={
                    book.link
                  }
                  target="_blank"
                  className="
                    bg-[#fffaf5]
                    border
                    border-[#eadfd2]
                    rounded-[28px]
                    overflow-hidden
                    hover:shadow-lg
                    transition
                    group
                  "
                >

                  {/* COVER */}

                  <div className="
                    h-[260px]
                    overflow-hidden
                    bg-[#f8f3ee]
                  ">

                    <img
                      src={
                        book.cover
                      }
                      alt={
                        book.title
                      }
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition
                        duration-300
                      "
                    />

                  </div>

                  {/* CONTENT */}

                  <div className="
                    p-5
                  ">

                    {/* CATEGORY */}

                    <span className="
                      text-xs
                      bg-[#f3e6da]
                      text-[#7a4e57]
                      px-3
                      py-1
                      rounded-full
                      inline-block
                      mb-3
                    ">

                      {
                        book.category
                      }

                    </span>

                    {/* TITLE */}

                    <h3 className="
                      text-lg
                      font-semibold
                      text-[#3d3027]
                      mb-2
                      leading-snug
                    ">

                      {
                        book.title
                      }

                    </h3>

                    {/* AUTHOR */}

                    <p className="
                      text-sm
                      text-[#7b6a58]
                      mb-3
                    ">

                      by {
                        book.author
                      }

                    </p>

                    {/* DESCRIPTION */}

                    <p className="
                      text-sm
                      text-[#5f5348]
                      leading-relaxed
                    ">

                      {
                        book.description
                      }

                    </p>

                  </div>

                </a>

              ))}

            </div>

          </div>

        </div>

      )}

    </>

  );

}