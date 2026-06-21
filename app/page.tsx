import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProgramCards from '@/components/ProgramCards';
import WellnessCompanion from '@/components/WellnessCompanion';
import TrustRibbon from '@/components/TrustRibbon';
import JourneyCTA from '@/components/JourneyCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[linear-gradient(180deg,#ffffff_0%,#fffcf8_15%,#faf4ec_40%,#f5ece1_65%,#f0e4d5_85%,#fffdfb_100%)]
      "
    >

      <Navbar />

      <Hero />

      <ProgramCards />

      <WellnessCompanion />

      <TrustRibbon />

      <JourneyCTA />

      <Footer />

    </main>
  );
}