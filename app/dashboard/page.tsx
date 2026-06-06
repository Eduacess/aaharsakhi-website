'use client';

import { useState, useEffect } from 'react';

import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardFooter from '@/components/dashboard/DashboardFooter';

import ConsentModal from '@/components/legal/ConsentModal';

export default function DashboardPage() {

  const [acceptedConsent, setAcceptedConsent] = useState(false);

  useEffect(() => {

    const consent = localStorage.getItem('aaharsakhi-consent');

    if (consent === 'true') {
      setAcceptedConsent(true);
    }

  }, []);

  const handleAcceptConsent = () => {

    localStorage.setItem('aaharsakhi-consent', 'true');

    setAcceptedConsent(true);

  };

  return (

    <main className="min-h-screen bg-[#f8f2ea] text-[#40342d]">

      {!acceptedConsent && (

        <ConsentModal
          onAccept={handleAcceptConsent}
        />

      )}

      <DashboardNavbar />

      <DashboardHeader />

      <div className="px-6 py-10">

        <div className="rounded-[32px] bg-[#fffaf5] p-10 shadow-sm">

          <h2 className="text-[34px] font-semibold">

            Patient Dashboard 🌿

          </h2>

          <p className="mt-4 text-[#7b6f63] leading-[1.9]">

            Your healing journey dashboard is now ready.

          </p>

        </div>

      </div>

      <DashboardFooter />

    </main>

  );

}
