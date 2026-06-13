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

import TodaysRecipe from "@/components/dashboard/TodaysRecipe";
import YogaZone from "@/components/dashboard/YogaZone";

export default function DashboardPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [showAgreement, setShowAgreement] = useState(false);

  const [quote, setQuote] = useState('');

  const [nushke, setNushke] = useState<any>(null);

  const [positivity, setPositivity] = useState<{
    heading: string;
    text: string;
    image: string;
  } | null>(null);

  const [recipe, setRecipe] = useState<any>(null);

  const [yoga, setYoga] = useState<any>(null);

  const [webinars, setWebinars] = useState<any[]>([]);

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
  // GET DAY INDEX (IST)
  // =========================

  const getDayIndex = () => {

    const now = new Date();

    const ist = new Date(
      now.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
      })
    );

    const start = new Date(
      '2026-01-01T00:00:00'
    );

    const diff =
      ist.getTime() - start.getTime();

    const days = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

    return days;

  };

  // =========================
  // PARSE CSV
  // =========================

  const parseCSV = (text: string) => {

    const lines = text.trim().split('\n');
  
    return lines.map((line) => {
  
      const result = [];
      let current = '';
      let insideQuotes = false;
  
      for (let i = 0; i < line.length; i++) {
  
        const char = line[i];
  
        if (char === '"') {
  
          insideQuotes = !insideQuotes;
  
        } else if (
          char === ',' &&
          !insideQuotes
        ) {
  
          result.push(current);
          current = '';
  
        } else {
  
          current += char;
  
        }
  
      }
  
      result.push(current);
  
      return result;
  
    });
  
  };

  // =========================
  // LOAD DASHBOARD DATA
  // =========================

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {

          router.push('/login');
          return;

        }

        // PROFILE

        const { data: profile } =
          await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

        if (
          !profile?.agreement_accepted
        ) {

          setShowAgreement(true);

        }

        const dayIndex =
          getDayIndex();

        // =====================
        // QUOTES
        // =====================

        const quoteRes = await fetch(
          quotesCSV
        );

        const quoteText =
          await quoteRes.text();

        const quoteRows =
          parseCSV(quoteText).slice(1);

        const todayQuote =
          quoteRows[
            dayIndex % quoteRows.length
          ];

        if (todayQuote) {

          setQuote(todayQuote[1]);

        }

        // =====================
        // NUSHKE
        // =====================

        const nushkeRes = await fetch(
          nushkeCSV
        );

        const nushkeText =
          await nushkeRes.text();

        const nushkeRows =
          parseCSV(nushkeText).slice(1);

        const filteredNushke =
          nushkeRows.filter(
            (row) =>
              row[1]?.trim() ===
              profile?.program_interest
          );

        const todayNushke =
          filteredNushke[
            dayIndex %
              filteredNushke.length
          ];

        if (todayNushke) {

          setNushke({
            id: todayNushke[0],
            text: todayNushke[2],
          });

        }

        // =====================
// POSITIVITY
// =====================

const positivityRes =
await fetch(positivityCSV);

const positivityText =
await positivityRes.text();

const positivityRows =
parseCSV(
  positivityText
).slice(1);

const todayPositivity =
positivityRows[
  dayIndex %
    positivityRows.length
];

if (todayPositivity) {

setPositivity({
  heading: todayPositivity[2],
  text: todayPositivity[3],
  image: todayPositivity[4],
});

}


        // ======================
// RECIPES
// ======================

const recipeRes =
await fetch(recipeCSV);

const recipeText =
await recipeRes.text();

const recipeRows =
parseCSV(recipeText).slice(1);

const filteredRecipes =
recipeRows.filter(
  (row) =>
    row[1]
      ?.trim()
      ?.toLowerCase() ===
    profile?.program_interest
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
  title: todayRecipe[2],
  benefits: todayRecipe[3],
  image: todayRecipe[4],
  video: todayRecipe[5],
  channel: todayRecipe[6],
});

}
   // ======================
// YOGA
// ======================

const yogaRes =
await fetch(yogaCSV);

const yogaText =
await yogaRes.text();

const yogaRows =
parseCSV(yogaText).slice(1);

const filteredYoga =
yogaRows.filter(
  (row) =>
    row[1]
      ?.trim()
      ?.toLowerCase() ===
    profile?.program_interest
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
  title: todayYoga[2],
  description: todayYoga[3],
  image: todayYoga[4],
  video: todayYoga[5],
  channel: todayYoga[6],
});

}

        // =====================
        // WEBINARS
        // =====================

        const webinarRes =
          await fetch(webinarCSV);

        const webinarText =
          await webinarRes.text();

        const webinarRows =
          parseCSV(webinarText)
            .slice(1)
            .slice(0, 1);

        const formattedWebinars =
          webinarRows.map((row) => ({
            id: row[0],
            title: row[1],
            speaker: row[2],
            description: row[3],
            date: row[4],
            time: row[5],
            link: row[6],
          }));

        setWebinars(
          formattedWebinars
        );

        setLoading(false);

      } catch (err) {

        console.log(err);

        setLoading(false);

      }

    };

    loadDashboard();

  }, [router]);

  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#f5f6fa]
      ">

        <p className="
          text-[#5f5348]
          text-[16px]
        ">

          Please wait...

        </p>

      </div>

    );

  }

  return (

    <main className="
      min-h-screen
      bg-[#f5f6fa]
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

      <section className="
        flex-1
        py-5
        w-full
      ">

        <div className="
          w-full
          px-3
          md:px-5
          lg:px-6
        ">

          {/* QUOTE */}

          <div className="
            text-center
            mb-6
            pt-2
            hidden
            md:block
          ">

            <p className="
              italic
              text-[#5f5348]
              text-xl
              md:text-3xl
              font-light
            ">

              “{quote}”

            </p>

          </div>

          {/* DESKTOP */}

          <div className="
            hidden
            md:grid
            md:grid-cols-[1.6fr_1fr]
            gap-5
            items-start
          ">

            {/* LEFT */}

            <div className="space-y-5">

              <MealPlan />

              <div className="
                grid
                md:grid-cols-2
                gap-5
              ">

                <UpcomingAppointment />

                <LibraryCard />

              </div>

              <div className="space-y-5">

                {webinars.map(
                  (webinar, index) => (

                    <UpcomingWebinar
                      key={index}
                      webinar={webinar}
                    />

                  )
                )}

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-5">

              <SakhiNushke
                nushke={nushke}
              />

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

              <LittlePositivity
                positivity={
                  positivity
                }
              />

            </div>

          </div>

          {/* DESKTOP BOTTOM */}

          <div className="
            hidden
            md:grid
            md:grid-cols-[1.6fr_1fr]
            gap-5
            mt-5
          ">

            <TodaysRecipe
              recipe={recipe}
            />

            <YogaZone yoga={yoga} />

          </div>

          {/* MOBILE */}

          <div className="
            flex
            flex-col
            gap-5
            md:hidden
          ">

            <MealPlan />

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

            <SakhiNushke
              nushke={nushke}
            />

            <UpcomingAppointment />

            {
  webinars[0] && (
    <UpcomingWebinar
      webinar={webinars[0]}
    />
  )
}

            <LibraryCard />

            <LittlePositivity
              positivity={positivity}
            />

            <TodaysRecipe
              recipe={recipe}
            />

            <YogaZone yoga={yoga} />

          </div>

        </div>

      </section>

      <DashboardFooter />

    </main>

  );

}