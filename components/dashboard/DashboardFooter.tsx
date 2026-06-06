'use client';

import { useState } from 'react';
import DashboardLegalModal from './DashboardLegalModal';

export default function DashboardFooter() {

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const privacyPolicy = `
✦ Information Collection

AaharSakhi may collect personal information including consultation details, nourishment preferences, wellness tracker data, communication history, and voluntarily shared health-related information.

✦ Data Usage

Collected information may be utilized for dashboard access, nourishment support, consultation coordination, communication, service enhancement, and wellness experience personalization.

✦ Data Protection

AaharSakhi applies commercially reasonable technical and administrative safeguards to protect user information and platform activity.

✦ Independent Medical Responsibility

Users are solely responsible for consulting licensed healthcare professionals for diagnosis, prescriptions, treatment plans, medical emergencies, and clinical decisions.

✦ International Users

Users accessing the platform internationally acknowledge that operational data may be processed under applicable Indian operational standards.

✦ Jurisdiction

All privacy-related matters remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  const refundPolicy = `
✦ Digital Wellness Services

AaharSakhi provides digital nourishment guidance, supportive consultations, wellness tools, and educational wellbeing support.

✦ Refund Eligibility

Refunds are generally not applicable once dashboard access, consultations, nourishment plans, or wellness services have been delivered or accessed.

✦ Cancellation Requests

Cancellation requests submitted prior to confirmed consultations may be reviewed solely at the discretion of AaharSakhi.

✦ No Guaranteed Outcomes

AaharSakhi does not guarantee specific medical, physical, nutritional, emotional, or wellness outcomes.

✦ Jurisdiction

All refund-related matters remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

  const termsConditions = `
✦ Platform Nature

AaharSakhi functions as a supportive wellness and nourishment platform focused on emotional wellbeing, mindful nourishment, and compassionate care experiences.

✦ Medical Disclaimer

The platform does not provide emergency medical services, hospitalization services, prescriptions, or clinical diagnosis.

✦ Informational Purpose

All nourishment suggestions, wellness trackers, educational resources, and supportive content are intended solely for informational and supportive purposes.

✦ Limitation Of Liability

AaharSakhi disclaims liability for indirect, emotional, medical, incidental, technical, or consequential outcomes associated with platform usage.

✦ International Usage

Users accessing the platform internationally remain responsible for compliance with local healthcare and legal regulations applicable within their jurisdiction.

✦ Jurisdiction

All disputes remain subject exclusively to the jurisdiction of courts located in Vadodara, Gujarat, India.
`;

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

  return (
    <>
      <footer className="mt-16 border-t border-[#eadccc] bg-[#fffaf5]">

        <div className="max-w-[1700px] mx-auto px-6 py-8">

          <div className="flex flex-col xl:flex-row items-center justify-between gap-6">

            {/* LEFT */}

            <p className="text-[13px] text-[#8a7462] text-center xl:text-left">

              Company Registered © 2026 • Nourishing Every Journey

            </p>

            {/* CENTER BUTTONS */}

            <div className="flex flex-wrap items-center justify-center gap-3">

              <button
                onClick={() => setActiveModal('privacy')}
                className="h-[42px] px-5 rounded-full bg-[#f4ece3] text-[#5f4b3c] text-[13px] hover:bg-[#eadccc] transition-all"
              >
                Privacy Policy
              </button>

              <button
                onClick={() => setActiveModal('refund')}
                className="h-[42px] px-5 rounded-full bg-[#f4ece3] text-[#5f4b3c] text-[13px] hover:bg-[#eadccc] transition-all"
              >
                Refund Policy
              </button>

              <button
                onClick={() => setActiveModal('terms')}
                className="h-[42px] px-5 rounded-full bg-[#f4ece3] text-[#5f4b3c] text-[13px] hover:bg-[#eadccc] transition-all"
              >
                Terms & Conditions
              </button>

              <button
                onClick={() => setActiveModal('agreement')}
                className="h-[42px] px-5 rounded-full bg-[#cba789] text-white text-[13px] hover:opacity-90 transition-all"
              >
                Agreement
              </button>

            </div>

            {/* RIGHT */}

            <p className="text-[13px] text-[#8a7462] text-center xl:text-right">

              Built with mindful care for healing journeys

            </p>

          </div>

        </div>

      </footer>

      {/* PRIVACY */}

      <DashboardLegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={privacyPolicy}
      />

      {/* REFUND */}

      <DashboardLegalModal
        isOpen={activeModal === 'refund'}
        onClose={() => setActiveModal(null)}
        title="Refund Policy"
        content={refundPolicy}
      />

      {/* TERMS */}

      <DashboardLegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms & Conditions"
        content={termsConditions}
      />

      {/* AGREEMENT */}

      <DashboardLegalModal
        isOpen={activeModal === 'agreement'}
        onClose={() => setActiveModal(null)}
        title="Agreement"
        content={agreement}
      />

    </>
  );
}