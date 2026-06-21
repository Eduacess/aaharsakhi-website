'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/supabase';

import DashboardLegalModal from '@/components/dashboard/DashboardLegalModal';

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import MealPlan from "@/components/dashboard/MealPlan";
import SakhiNushke from "@/components/dashboard/SakhiNushke";

import TrackerGrid from "@/components/dashboard/TrackerGrid";

import UpcomingAppointment from "@/components/dashboard/UpcomingAppointment";
import LibraryCard from "@/components/dashboard/LibraryCard";

import UpcomingWebinar from "@/components/dashboard/UpcomingWebinar";

import LittlePositivity from "@/components/dashboard/LittlePositivity";
import MoodCheck from "@/components/dashboard/MoodCheck";

import TodaysRecipe from "@/components/dashboard/TodaysRecipe";
import YogaZone from "@/components/dashboard/YogaZone";

export default function DashboardPage() {

  const router = useRouter();

  const [dashboardReady,
  setDashboardReady] =
    useState(false);

  const [showAgreement,
  setShowAgreement] =
    useState(false);

  const [quote,
  setQuote] =
    useState('');

  const [userName,
  setUserName] =
    useState('');

  const [greeting,
  setGreeting] =
    useState('');

  const [nushke,
  setNushke] =
    useState<any>(null);

  const [positivity,
  setPositivity] =
    useState<any>(null);

  const [recipe,
  setRecipe] =
    useState<any>(null);

  const [yoga,
  setYoga] =
    useState<any>(null);

  const [webinars,
  setWebinars] =
    useState<any[]>([]);

  const agreement = `
✦ User Consent Agreement

By accessing and using AaharSakhi, users acknowledge and voluntarily consent to platform policies, dashboard systems, wellness tracking tools, nourishment guidance, educational resources, and supportive wellbeing services.

✦ Wellness & Support Nature

Users understand that AaharSakhi provides supportive nourishment guidance and emotional wellbeing support and does not replace licensed medical care.

✦ Independent Healthcare Responsibility

Users remain independently responsible for consulting licensed physicians and qualified healthcare providers for medical advice, emergencies, diagnosis, prescriptions, and treatment decisions.

✦ Consent To Digital Communication

Users consent to receiving digital communication, wellness reminders, appointment coordination, dashboard updates, and platform-related communication.

✦ Privacy Acknowledgement

Users acknowledge understanding of the Privacy Policy, Terms & Conditions, and Refund Policy before using the platform.

✦ Acceptance

Continued usage of the platform constitutes voluntary acceptance of all applicable policies, agreements, and legal terms.
`;

  // =========================
  // CSV LINKS
  // =========================

  const quotesCSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQIqdiLUxV2w1SfCOQ0WJcgNp7g5l-avi7TkjnGU-h__MzZfc98GAfTNmpxMjVu4Su4Pg3KsBtHmSDN/pub?output=csv';

  const nushkeCSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTV0xFLMEaZUN6pEEXzPGoPu4peOvFj_r_CMqCWWJYsUIY4Kg0MWCiEU18QYrLgO6wjvXstX5b56WEY/pub?output=csv';

  const positivityCSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSypN-9I14E1u3kVGPEbIGpei5oL_QG8nja17Gln1KlXAeNme3T-KAslPng8pcEZ3jHznDLSLGPQcb4/pub?output=csv';

  const recipeCSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcpwQh4kB24S7HMKDeYobUo20n703ELzTHPbp5k7WHYp-R2PRQpaP_hjbknW3qjyaSrTuNWQihw_AH/pub?output=csv';

  const yogaCSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPaavFpnh_dvDa4p3VC_9PVlRT1nZpBz8ebrcEmy1rza6hCO3wS-oTo3WSoZz0N-3wEwTHzVBnAM7Q/pub?output=csv';

  const webinarCSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQTVbp5L5znejX0M9QDuGhs922i7yxzuC4cFktTj01hteUJu-rxU8IjfmwGG3PIEbyN6o7VYYfKtRD0/pub?output=csv';

  // =========================
  // GREETING
  // =========================

  const getGreeting = () => {

    const hour =
      new Date().getHours();

    if (hour < 12) {

      return 'Good Morning';

    }

    if (hour < 18) {

      return 'Good Afternoon';

    }

    return 'Good Evening';

  };

  // =========================
  // DAY INDEX
  // =========================

  const getDayIndex = () => {

    const now = new Date();

    const ist = new Date(
      now.toLocaleString(
        'en-US',
        {
          timeZone:
            'Asia/Kolkata',
        }
      )
    );

    const start = new Date(
      '2026-01-01T00:00:00'
    );

    const diff =
      ist.getTime() -
      start.getTime();

    return Math.floor(
      diff /
      (
        1000 *
        60 *
        60 *
        24
      )
    );

  };

  // =========================
  // PARSE CSV
  // =========================

  const parseCSV = (
    text: string
  ) => {

    const lines =
      text.trim().split('\n');

    return lines.map(
      (line) => {

        const result = [];

        let current = '';

        let insideQuotes =
          false;

        for (
          let i = 0;
          i < line.length;
          i++
        ) {

          const char =
            line[i];

          if (
            char === '"'
          ) {

            insideQuotes =
              !insideQuotes;

          }

          else if (
            char === ',' &&
            !insideQuotes
          ) {

            result.push(
              current
            );

            current = '';

          }

          else {

            current += char;

          }

        }

        result.push(current);

        return result;

      }
    );

  };

  // =========================
  // LOAD DASHBOARD
  // =========================

  useEffect(() => {

    const loadDashboard =
      async () => {

      try {

        const {
          data: { session },
        } =
          await supabase
            .auth
            .getSession();

        if (!session) {

          router.push(
            '/login'
          );

          return;

        }

        const {
          data: profile,
        } =
          await supabase
            .from('profiles')
            .select('*')
            .eq(
              'id',
              session.user.id
            )
            .single();

        if (!profile)
          return;

        setGreeting(
          getGreeting()
        );

        setUserName(
          profile?.full_name ||
          'Sakhi'
        );

        if (
          !profile
            ?.agreement_accepted
        ) {

          setShowAgreement(
            true
          );

        }

        const dayIndex =
          getDayIndex();

        // =========================
        // LOAD EVERYTHING TOGETHER
        // =========================

        const [

          quoteRes,

          nushkeRes,

          positivityRes,

          recipeRes,

          yogaRes,

          webinarRes,

        ] = await Promise.all([

          fetch(quotesCSV),

          fetch(nushkeCSV),

          fetch(
            positivityCSV
          ),

          fetch(recipeCSV),

          fetch(yogaCSV),

          fetch(webinarCSV),

        ]);

        const [

          quoteText,

          nushkeText,

          positivityText,

          recipeText,

          yogaText,

          webinarText,

        ] = await Promise.all([

          quoteRes.text(),

          nushkeRes.text(),

          positivityRes.text(),

          recipeRes.text(),

          yogaRes.text(),

          webinarRes.text(),

        ]);

        // =========================
        // QUOTE
        // =========================

        const quoteRows =
          parseCSV(
            quoteText
          ).slice(1);

        const todayQuote =
          quoteRows[
            dayIndex %
            quoteRows.length
          ];

        if (todayQuote) {

          setQuote(
            todayQuote[1]
          );

        }

        // =========================
        // NUSHKE
        // =========================

        const nushkeRows =
          parseCSV(
            nushkeText
          ).slice(1);

        const filteredNushke =
          nushkeRows.filter(
            (row) =>
              row[1]
                ?.trim()
                ?.toLowerCase() ===
              profile
                ?.program_interest
                ?.trim()
                ?.toLowerCase()
          );

        const todayNushke =
          filteredNushke[
            dayIndex %
            filteredNushke.length
          ];

        if (todayNushke) {

          setNushke({

            id:
              todayNushke[0],

            text:
              todayNushke[2],

          });

        }

        // =========================
        // POSITIVITY
        // =========================

        const positivityRows =
          parseCSV(
            positivityText
          ).slice(1);

        const todayPositivity =
          positivityRows[
            dayIndex %
            positivityRows.length
          ];

        if (
          todayPositivity
        ) {

          setPositivity({

            heading:
              todayPositivity[2],

            text:
              todayPositivity[3],

            image:
              todayPositivity[4],

          });

        }

        // =========================
        // RECIPE
        // =========================

        const recipeRows =
          parseCSV(
            recipeText
          ).slice(1);

        const filteredRecipes =
          recipeRows.filter(
            (row) =>
              row[1]
                ?.trim()
                ?.toLowerCase() ===
              profile
                ?.program_interest
                ?.trim()
                ?.toLowerCase()
          );

        const todayRecipe =
          filteredRecipes[
            dayIndex %
            filteredRecipes.length
          ];

        if (todayRecipe) {

          setRecipe({

            title:
              todayRecipe[2],

            benefits:
              todayRecipe[3],

            image:
              todayRecipe[4],

            video:
              todayRecipe[5],

            channel:
              todayRecipe[6],

          });

        }

        // =========================
        // YOGA
        // =========================

        const yogaRows =
          parseCSV(
            yogaText
          ).slice(1);

        const filteredYoga =
          yogaRows.filter(
            (row) =>
              row[1]
                ?.trim()
                ?.toLowerCase() ===
              profile
                ?.program_interest
                ?.trim()
                ?.toLowerCase()
          );

        const todayYoga =
          filteredYoga[
            dayIndex %
            filteredYoga.length
          ];

        if (todayYoga) {

          setYoga({

            title:
              todayYoga[2],

            description:
              todayYoga[3],

            image:
              todayYoga[4],

            video:
              todayYoga[5],

            channel:
              todayYoga[6],

          });

        }

        // =========================
        // WEBINARS
        // =========================

        const webinarRows =
          parseCSV(
            webinarText
          )
            .slice(1)
            .slice(0, 1);

        const formattedWebinars =
          webinarRows.map(
            (row) => ({

              id: row[0],

              title: row[0],

              speaker: row[1],

              description:
                row[2],

              date: row[3],

              time: row[4],

              link: row[5],

            })
          );

        setWebinars(
          formattedWebinars
        );

        setDashboardReady(
          true
        );

      }

      catch (err) {

        console.log(err);

      }

    };

    loadDashboard();

  }, [router]);

  // =========================
  // LOADING
  // =========================

  if (!dashboardReady) {

    return (

      <div className="
        min-h-screen
        bg-[#f7f3ee]
        flex
        items-center
        justify-center
        px-6
      ">

        <div className="
          text-center
          max-w-xl
        ">

          <div className="
            w-20
            h-20
            rounded-full
            border
            border-[#e7d8cb]
            mx-auto
            mb-8
            animate-pulse
            bg-[#fdfaf7]
          " />

          <h1 className="
            text-4xl
            md:text-5xl
            font-light
            text-[#2f241d]
            leading-tight
            tracking-[-0.04em]
          ">

            Preparing your
            wellness sanctuary
          </h1>

          <p className="
            mt-6
            text-[#7d6c5f]
            text-lg
            leading-relaxed
          ">

            Bringing together your nourishment,
            emotional wellbeing and healing
            support with care.

          </p>

        </div>

      </div>

    );

  }

  return (

    <main className="
      min-h-screen
      bg-[#f7f3ee]
    ">

      {/* AGREEMENT */}

      <DashboardLegalModal
        isOpen={showAgreement}
        onClose={() => {}}
        title="Agreement"
        content={agreement}
        showAgreementActions={true}
        onAgreementAccepted={() => {
          setShowAgreement(false);
        }}
      />

      <DashboardNavbar />

      {/* MAIN */}

      <section className="
        px-4
        md:px-8
        lg:px-12
        py-8
      ">

        {/* HERO */}

        <div className="
          mb-12
        ">

          <p className="
            text-sm
            uppercase
            tracking-[0.18em]
            text-[#9c8472]
            mb-4
          ">

            AaharSakhi
          </p>

          <h1 className="
            text-5xl
            md:text-7xl
            font-light
            tracking-[-0.06em]
            text-[#2f241d]
            leading-[1]
            max-w-4xl
          ">

            {greeting},
            {" "}
            {userName}
          </h1>

          <p className="
            mt-7
            text-[#6f6055]
            text-lg
            md:text-xl
            leading-relaxed
            max-w-2xl
          ">

            Your healing journey deserves
            calmness, nourishment and
            emotional support —
            one gentle day at a time.

          </p>

        </div>

        {/* QUOTE */}

        <div className="
          mb-14
          max-w-5xl
        ">

          <p className="
            text-2xl
            md:text-3xl
            italic
            leading-relaxed
            text-[#4f4339]
            font-light
          ">

            “{quote}”

          </p>

        </div>

        {/* GRID */}

        <div className="
          grid
          lg:grid-cols-[1.6fr_1fr]
          gap-10
          items-start
        ">

          {/* LEFT */}

          <div className="
            space-y-10
          ">

            <MealPlan />

            <div className="
              grid
              md:grid-cols-2
              gap-8
            ">

              <UpcomingAppointment />

              <LibraryCard />

            </div>

            {
              webinars.map(
                (
                  webinar,
                  index
                ) => (

                  <UpcomingWebinar
                    key={index}
                    webinar={
                      webinar
                    }
                  />

                )
              )
            }

            <TodaysRecipe
              recipe={recipe}
            />

          </div>

          {/* RIGHT */}

          <div className="
            space-y-10
          ">

            <SakhiNushke
              nushke={nushke}
            />

            <div className="
              bg-[#fcfaf7]
              border
              border-[#eee4da]
              rounded-[34px]
              p-7
            ">

              <div className="
                flex
                items-center
                justify-between
                mb-7
              ">

                <div>

                  <p className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-[#a18b7a]
                    mb-2
                  ">

                    Wellness
                  </p>

                  <h2 className="
                    text-3xl
                    font-light
                    tracking-[-0.04em]
                    text-[#2f241d]
                  ">

                    Today’s Trackers
                  </h2>

                </div>

              </div>

              <TrackerGrid />

            </div>

            <LittlePositivity
              positivity={
                positivity
              }
            />

            <MoodCheck />

            <YogaZone
              yoga={yoga}
            />

          </div>

        </div>

      </section>

      <DashboardFooter />

    </main>

  );

}