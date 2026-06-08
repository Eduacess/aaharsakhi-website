"use client";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function ProfilePage() {

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
      gap-5
      flex-wrap
      mb-10
    ">

      {/* PROFILE IMAGE */}

      <div className="
        w-28
        h-28
        rounded-full
        overflow-hidden
        border-4
        border-white
        shadow-md
      ">

        <img
          src="/profile.jpg"
          alt="Profile"
          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>

      {/* TEXT */}

      <div>

        <h1 className="
          text-3xl
          md:text-4xl
          font-semibold
          text-[#3d3027]
        ">

          Priya Sharma

        </h1>

        <p className="
          text-[#7c6d60]
          mt-2
          text-lg
        ">

          Pregnancy Wellness Journey 🤍

        </p>

      </div>

    </div>

    {/* GRID */}

    <div className="
      grid
      lg:grid-cols-2
      gap-6
    ">

      {/* PERSONAL DETAILS */}

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-[30px]
        p-6
      ">

        <h2 className="
          text-2xl
          font-semibold
          text-[#3d3027]
          mb-6
        ">

          Personal Details

        </h2>

        <div className="space-y-5">

          <div>

            <p className="
              text-sm
              text-[#8a7d72]
              mb-1
            ">

              Age

            </p>

            <p className="
              text-lg
              text-[#3d3027]
            ">

              29 Years

            </p>

          </div>

          <div>

            <p className="
              text-sm
              text-[#8a7d72]
              mb-1
            ">

              Pregnancy Week

            </p>

            <p className="
              text-lg
              text-[#3d3027]
            ">

              Week 24

            </p>

          </div>

          <div>

            <p className="
              text-sm
              text-[#8a7d72]
              mb-1
            ">

              Preferred Language

            </p>

            <p className="
              text-lg
              text-[#3d3027]
            ">

              English

            </p>

          </div>

        </div>

      </div>

      {/* MEDICAL DETAILS */}

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-[30px]
        p-6
      ">

        <h2 className="
          text-2xl
          font-semibold
          text-[#3d3027]
          mb-6
        ">

          Medical Details

        </h2>

        <div className="space-y-5">

          <div>

            <p className="
              text-sm
              text-[#8a7d72]
              mb-1
            ">

              Blood Group

            </p>

            <p className="
              text-lg
              text-[#3d3027]
            ">

              B+

            </p>

          </div>

          <div>

            <p className="
              text-sm
              text-[#8a7d72]
              mb-3
            ">

              Allergies & Sensitivities

            </p>

            <div className="
              flex
              flex-wrap
              gap-3
            ">

              <span className="
                px-4
                py-2
                rounded-full
                bg-[#fff1f1]
                text-[#a94442]
                text-sm
              ">

                Penicillin

              </span>

              <span className="
                px-4
                py-2
                rounded-full
                bg-[#fff1f1]
                text-[#a94442]
                text-sm
              ">

                Nuts

              </span>

            </div>

          </div>

          <div>

            <p className="
              text-sm
              text-[#8a7d72]
              mb-1
            ">

              Existing Conditions

            </p>

            <p className="
              text-lg
              text-[#3d3027]
            ">

              Gestational Diabetes

            </p>

          </div>

        </div>

      </div>

      {/* FOOD PREFERENCES */}

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-[30px]
        p-6
      ">

        <h2 className="
          text-2xl
          font-semibold
          text-[#3d3027]
          mb-6
        ">

          Food Preferences

        </h2>

        <div className="
          flex
          flex-wrap
          gap-3
        ">

          <span className="
            px-4
            py-2
            rounded-full
            bg-[#eef6ee]
            text-[#267a45]
            text-sm
          ">

            Vegetarian

          </span>

          <span className="
            px-4
            py-2
            rounded-full
            bg-[#eef6ee]
            text-[#267a45]
            text-sm
          ">

            High Protein

          </span>

          <span className="
            px-4
            py-2
            rounded-full
            bg-[#eef6ee]
            text-[#267a45]
            text-sm
          ">

            Low Sugar

          </span>

        </div>

      </div>

      {/* ACCOUNT */}

      <div className="
        bg-white
        border
        border-[#eadfd2]
        rounded-[30px]
        p-6
      ">

        <h2 className="
          text-2xl
          font-semibold
          text-[#3d3027]
          mb-6
        ">

          Account

        </h2>

        <div className="space-y-4">

          <button className="
            w-full
            bg-[#fff7f4]
            border
            border-[#eadfd2]
            rounded-2xl
            px-5
            py-4
            text-left
            text-[#3d3027]
          ">

            Subscription Details

          </button>

          <button className="
            w-full
            bg-[#fff7f4]
            border
            border-[#eadfd2]
            rounded-2xl
            px-5
            py-4
            text-left
            text-[#3d3027]
          ">

            Support & Help

          </button>

          <button className="
            w-full
            bg-[#fff1f1]
            border
            border-[#f1cccc]
            rounded-2xl
            px-5
            py-4
            text-left
            text-[#a94442]
          ">

            Logout

          </button>

        </div>

      </div>

    </div>

  </section>

  <DashboardFooter />

</main>

);

}