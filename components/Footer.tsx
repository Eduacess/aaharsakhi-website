'use client';

import { useState } from 'react';
import LegalModal from './LegalModal';
import Link from 'next/link';

export default function Footer() {

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const privacyPolicy = `
✦ Information We Collect

AaharSakhi may collect personal information including names, contact details, nourishment preferences, consultation records, dashboard information, wellness tracker entries, communication history, and other information voluntarily shared through the platform.

✦ Purpose Of Information Usage

Information shared with AaharSakhi may be utilized for consultation coordination, nourishment guidance, dashboard access, communication, service improvement, appointment management, technical support, and overall user experience enhancement.

✦ Data Protection

AaharSakhi takes commercially reasonable administrative and technical measures to safeguard information shared through the platform. However, no digital platform can guarantee absolute security.

✦ No Medical Outcome Guarantee

AaharSakhi does not guarantee specific medical, physical, emotional, or health outcomes through its nourishment guidance, consultations, digital services, or support experiences.

✦ Independent Medical Responsibility

Users remain solely responsible for consulting licensed physicians, oncologists, diabetologists, gynecologists, emergency healthcare providers, or other qualified medical professionals for diagnosis, treatment decisions, prescriptions, and medical emergencies.

✦ International Users

Users accessing the platform internationally acknowledge that information may be processed and stored in accordance with operational and legal standards applicable within India.

✦ Jurisdiction

All privacy-related disputes shall remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  const refundPolicy = `
✦ Digital Consultation & Nourishment Services

AaharSakhi provides digital nourishment guidance, consultation services, dashboard access, wellness tracking tools, and supportive nourishment experiences.

✦ Refund Eligibility

Refunds are generally not applicable once consultations, dashboard access, nourishment plans, guidance materials, or digital services have been delivered, accessed, scheduled, or utilized.

✦ Consultation Usage

Users acknowledge that consultations, nourishment guidance, and dashboard services constitute consumed digital services once provided through the platform.

✦ Cancellation Requests

Cancellation requests submitted prior to confirmed consultations or service access may be reviewed on a case-by-case basis at the sole discretion of AaharSakhi.

✦ Payment Disputes

Unauthorized payment disputes, chargebacks, or misuse of payment systems may result in suspension or restriction of platform access.

✦ No Guaranteed Outcomes

AaharSakhi does not guarantee specific health, nourishment, emotional, or medical outcomes through consultations or support services.

✦ Jurisdiction

All refund-related disputes shall remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  const termsConditions = `
✦ Platform Nature

AaharSakhi is a nourishment guidance and supportive care platform focused on mindful eating habits, emotional wellbeing, lifestyle support, and compassionate nourishment experiences.

✦ Medical Disclaimer

AaharSakhi does not provide emergency healthcare services, hospitalization services, licensed medical diagnosis, prescription services, or urgent medical intervention.

✦ Independent Medical Consultation

Users are strongly encouraged to independently consult licensed physicians, oncologists, diabetologists, gynecologists, emergency healthcare providers, or qualified medical professionals regarding diagnosis, treatment plans, prescriptions, and medical decisions.

✦ Informational & Supportive Guidance

All nourishment recommendations, consultations, wellness trackers, educational content, and supportive guidance available through the platform are intended solely for informational and supportive purposes.

✦ No Guaranteed Outcomes

AaharSakhi does not guarantee specific physical, emotional, nutritional, or medical outcomes through platform usage, consultations, nourishment plans, or support services.

✦ Intellectual Property

All branding, visual assets, dashboards, written material, nourishment systems, designs, and platform experiences remain the intellectual property of AaharSakhi unless otherwise stated.

✦ Limitation Of Liability

To the maximum extent permitted under applicable law, AaharSakhi disclaims liability for indirect, incidental, emotional, technical, or consequential damages arising from the use of the platform or its services.

✦ International Usage

Users accessing the platform internationally remain responsible for compliance with local laws and healthcare regulations applicable within their respective jurisdictions.

✦ Jurisdiction

All disputes, claims, and proceedings shall remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  return (
    <>
      <footer className="relative bg-transparent pt-14 pb-8 overflow-hidden border-t border-[#e7ded3]">

        {/* Glow */}

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

                Gentle nourishment support designed around healing,
                motherhood, emotional wellbeing, culturally familiar meals,
                and compassionate everyday care.

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