import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import DailyDietCards from "@/components/dashboard/DailyDietCards";
import SakhiWisdomCard from "@/components/dashboard/SakhiWisdomCard";
import HealthLibraryCard from "@/components/dashboard/HealthLibraryCard";
import UpcomingAppointments from "@/components/dashboard/UpcomingAppointments";
import SuccessStories from "@/components/dashboard/SuccessStories";
import RecipeBookCard from "@/components/dashboard/RecipeBookCard";
import YogaTodayCard from "@/components/dashboard/YogaTodayCard";
import QuickActions from "@/components/dashboard/QuickActions";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function DashboardPage() {
  return (
    <main>
      <DashboardHeader />
      <DashboardNavbar />

      <WelcomeBanner />

      <section>
        <DailyDietCards />
        <SakhiWisdomCard />
      </section>

      <section>
        <UpcomingAppointments />
        <HealthLibraryCard />
      </section>

      <SuccessStories />

      <section>
        <RecipeBookCard />
        <YogaTodayCard />
      </section>

      <QuickActions />

      <DashboardFooter />
    </main>
  );
}
