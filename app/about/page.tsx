'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JourneyCTA from '@/components/JourneyCTA';

import FounderStory from '@/components/about-us/FounderStory';
import ExpertsRibbon from '@/components/about-us/ExpertsRibbon';
import SpecializedAreas from '@/components/about-us/SpecializedAreas';
import HowItWorks from '@/components/about-us/HowItWorks';


export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fcfaf7]">

      <Navbar />

      {/* Quote */}

      <section className="relative pt-10 pb-14">

        <div className="max-w-[1400px] mx-auto px-6">

          <div className="text-center">

            <p className="text-[18px] lg:text-[30px] italic font-light tracking-[0.3px] text-[#4d564d] leading-[1.8] font-serif">

              “Sometimes the body needs nourishment.
              Sometimes the heart simply needs care.”

            </p>

          </div>

        </div>

      </section>

      <FounderStory />

      <ExpertsRibbon />
      <SpecializedAreas />

      <HowItWorks />
<JourneyCTA />

      <Footer />

      <FloatingWhatsApp />

    </main>
  );
}