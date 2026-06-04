
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NourishmentCards from '@/components/NourishmentCards';
import ProgramCards from '@/components/ProgramCards';
import CultureSupport from '@/components/CultureSupport';
import TrustRibbon from '@/components/TrustRibbon';
import ContributionSection from '@/components/ContributionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Navbar />

      <Hero />

      <NourishmentCards />

      <ProgramCards />

      <CultureSupport />

      <TrustRibbon />

      <ContributionSection />

      <Footer />

    </main>
  );
}
