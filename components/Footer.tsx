'use client';

import { useState } from 'react';
import LegalModal from './LegalModal';
import Link from 'next/link';

export default function Footer() {

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const privacyPolicy = `
✦ Information We Collect

AaharSakhi may collect personal information including names, contact details, wellness preferences, nourishment-related information, consultation records, dashboard entries, wellness tracker information, and communication history voluntarily shared through the platform.

✦ Platform Usage

Personal information may be utilized for wellness guidance, dashboard functionality, communication, service delivery, appointment coordination, technical support, and overall user experience improvement.

✦ Data Protection

AaharSakhi takes commercially reasonable administrative and technical measures to safeguard wellness-related information shared through the platform. However, no online platform can guarantee absolute security.

✦ International Users

Users accessing the platform internationally acknowledge that information may be processed and stored in accordance with operational and legal standards applicable within India.

✦ Wellness Disclaimer

Users remain responsible for consulting licensed medical professionals for diagnosis, emergency care, prescriptions, and medical treatment decisions.

✦ Jurisdiction

All disputes relating to privacy matters shall remain subject to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  const refundPolicy = `
✦ Digital Wellness Services

AaharSakhi provides wellness consultations, nourishment guidance, dashboard access, digital wellness support, and personalized wellness experiences.

✦ Refund Eligibility

Refunds shall generally not be applicable once any consultation, dashboard access, wellness plan, guidance material, or digital service has been delivered or accessed.

✦ Consultation Usage

Users acknowledge that wellness consultations and dashboard access constitute consumed digital services once delivered through the platform.

✦ Cancellation Requests

Cancellation requests submitted before consultation or service delivery may be reviewed on a case-by-case basis at the sole discretion of AaharSakhi.

✦ Payment Disputes

Unauthorized disputes, chargebacks, or misuse of payment systems may result in restriction or suspension of platform access.

✦ Jurisdiction

All refund-related disputes shall remain subject to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  const termsConditions = `
✦ Platform Nature

AaharSakhi is a wellness and nourishment guidance platform supporting mindful wellbeing, nourishment awareness, emotional wellness, and supportive wellness journeys.

✦ Medical Disclaimer

The platform does not provide emergency healthcare services, licensed medical diagnosis, hospitalization services, or urgent clinical intervention.

✦ Independent Medical Advice

Users must independently consult licensed physicians, oncologists, diabetologists, gynecologists, emergency healthcare providers, or qualified medical professionals for diagnosis and treatment decisions.

✦ User Responsibility

Users acknowledge that all nourishment recommendations, consultations, wellness trackers, and supportive guidance are intended for informational and wellness-support purposes only.

✦ Intellectual Property

All branding, wellness systems, visual assets, dashboards, written material, and platform experiences remain the intellectual property of AaharSakhi unless otherwise stated.

✦ Limitation Of Liability

To the maximum extent permitted by applicable law, AaharSakhi disclaims liability for indirect, incidental, emotional, technical, or consequential damages arising from platform usage.

✦ International Usage

Users accessing the platform internationally remain responsible for compliance with local healthcare laws and regulations applicable within their jurisdiction.

✦ Jurisdiction

All disputes, claims, and proceedings shall remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  return (
    <>
      <footer className="relative bg-[#f5eee6] pt-24 pb-10 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-[-220px] right-[-180px] w-[520px] h-[520px] bg-[#ead8c2] rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 relative z-10">

          {/* Main Grid */}
          <div className="grid lg:grid-cols-4 gap-14 pb-16">

            {/* Brand */}
            <div>

              {/* Logo + Name */}
              <div className="flex items-center gap-4">

                <img
                  src="/logo.png"
                  alt="AaharSakhi"
                  className="w-14 h-14 object-contain"
                />

                <div>

                  <h2 className="text-[34px] font-semibold tracking-[-1.5px] text-[#2f372f]">

                    AaharSakhi

                  </h2>

                </div>

              </div>

              {/* Description */}
              <p className="mt-8 text-[#6f5d4b] text-[16px] leading-[2] max-w-[340px]">

                Mindful nourishment journeys supporting healing,
                motherhood, emotional wellness, and compassionate care.

              </p>

            </div>

            {/* Navigation */}
            <div>

              <h3 className="text-[#2f372f] text-[18px] font-medium mb-6">

                Navigation

              </h3>

              <div className="flex flex-col gap-4 text-[#7d6a57]">

                <Link href="/" className="hover:text-[#2f372f] transition">
                  Home
                </Link>

                <Link href="/about-us" className="hover:text-[#2f372f] transition">
                  About Us
                </Link>

                <Link href="/wellness-journal" className="hover:text-[#2f372f] transition">
                  Wellness Journal
                </Link>

                <Link href="/connect-us" className="hover:text-[#2f372f] transition">
                  Connect Us
                </Link>

                <Link href="/login" className="hover:text-[#2f372f] transition">
                  Login
                </Link>

              </div>

            </div>

            {/* Legal */}
            <div>

              <h3 className="text-[#2f372f] text-[18px] font-medium mb-6">

                Legal

              </h3>

              <div className="flex flex-col gap-4 text-[#7d6a57]">

                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-[#2f372f] transition text-left"
                >
                  Privacy Policy
                </button>

                <button
                  onClick={() => setActiveModal('refund')}
                  className="hover:text-[#2f372f] transition text-left"
                >
                  Refund Policy
                </button>

                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-[#2f372f] transition text-left"
                >
                  Terms & Conditions
                </button>

              </div>

            </div>

            {/* Follow Us */}
            <div>

              <h3 className="text-[#2f372f] text-[18px] font-medium mb-6">

                Follow Us

              </h3>

              <div className="flex flex-col gap-4 text-[#7d6a57]">

                <a
                  href="https://www.instagram.com/aaharsakhi"
                  target="_blank"
                  className="hover:text-[#2f372f] transition"
                >
                  Instagram
                </a>

                <a
                  href="https://www.linkedin.com/company/aahar-sakhi"
                  target="_blank"
                  className="hover:text-[#2f372f] transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://x.com/AaharSakhi"
                  target="_blank"
                  className="hover:text-[#2f372f] transition"
                >
                  Twitter / X
                </a>

                <a
                  href="mailto:aaharsakhi@outlook.com"
                  className="hover:text-[#2f372f] transition"
                >
                  Email
                </a>

              </div>

            </div>

          </div>

          {/* Divider */}
          <div className="pt-10 border-t border-[#e4d5c5]">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              <p className="text-[#8c7a68] text-sm tracking-wide text-center">

                © 2026 AaharSakhi. Nourishing Every Journey.

              </p>

              <p className="text-[#a18d78] text-sm text-center">

                Built with mindful care for healing journeys.

              </p>

            </div>

          </div>

        </div>

      </footer>

      {/* Privacy */}
      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={privacyPolicy}
      />

      {/* Refund */}
      <LegalModal
        isOpen={activeModal === 'refund'}
        onClose={() => setActiveModal(null)}
        title="Refund Policy"
        content={refundPolicy}
      />

      {/* Terms */}
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms & Conditions"
        content={termsConditions}
      />
    </>
  );
}