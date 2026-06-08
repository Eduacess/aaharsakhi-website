"use client";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import MealPlan from "@/components/dashboard/MealPlan";
import SakhiNushke from "@/components/dashboard/SakhiNushke";

import TrackerGrid from "@/components/dashboard/TrackerGrid";

import UpcomingAppointment from "@/components/dashboard/UpcomingAppointment";
import LibraryCard from "@/components/dashboard/LibraryCard";

import UpcomingWebinar from "@/components/dashboard/UpcomingWebinar";

import LittlePositivity from "@/components/dashboard/LittlePositivity";

import TodaysRecipe from "@/components/dashboard/TodaysRecipe";
import YogaZone from "@/components/dashboard/YogaZone";

export default function DashboardPage() {

return (

<main className="min-h-screen bg-[#f5f6fa]">

  <DashboardNavbar />

  <section className="flex-1 py-5 w-full">

    <div className="w-full px-3 md:px-5 lg:px-6">

      {/* QUOTE */}

      <div className="text-center mb-6 pt-2 hidden md:block">

        <p className="
          italic
          text-[#5f5348]
          text-xl
          md:text-3xl
          font-light
        ">

          “Consistency creates wellness, not perfection.”

        </p>

      </div>

      {/* DESKTOP */}

      <div className="hidden md:grid md:grid-cols-[1.6fr_1fr] gap-5 items-start">

        {/* LEFT */}

        <div className="space-y-5">

          <MealPlan />

          <div className="grid md:grid-cols-2 gap-5">

            <UpcomingAppointment />

            <LibraryCard />

          </div>

          <UpcomingWebinar />

        </div>

        {/* RIGHT */}

        <div className="space-y-5">

          <SakhiNushke />

          <div>

            <h2 className="
              text-lg
              font-semibold
              text-[#3d3027]
              mb-3
              px-1
            ">

              Today&apos;s Trackers 📊

            </h2>

            <TrackerGrid />

          </div>

          <LittlePositivity />

        </div>

      </div>

      {/* DESKTOP BOTTOM */}

      <div className="
        hidden
        md:grid
        md:grid-cols-2
        gap-5
        mt-5
      ">

        <TodaysRecipe />

        <YogaZone />

      </div>

      {/* MOBILE LAYOUT */}

      <div className="flex flex-col gap-5 md:hidden">

        {/* MEAL */}

        <MealPlan />

        {/* TRACKERS */}

        <div>

          <h2 className="
            text-lg
            font-semibold
            text-[#3d3027]
            mb-3
            px-1
          ">

            Today&apos;s Trackers 📊

          </h2>

          <TrackerGrid />

        </div>

        {/* NUSHKE */}

        <SakhiNushke />

        {/* APPOINTMENT */}

        <UpcomingAppointment />

        {/* WEBINAR */}

        <UpcomingWebinar />

        {/* LIBRARY */}

        <LibraryCard />

        {/* POSITIVITY */}

        <LittlePositivity />

        {/* RECIPE */}

        <TodaysRecipe />

        {/* YOGA */}

        <YogaZone />

      </div>

    </div>

  </section>

  <DashboardFooter />

</main>

);

}