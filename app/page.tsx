import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NourishmentCards from '@/components/NourishmentCards';
import ProgramCards from '@/components/ProgramCards';
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

      <TrustRibbon />

      <ContributionSection />

      <Footer />
    </main>
  );
}
