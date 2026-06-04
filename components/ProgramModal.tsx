'use client';

import { useState } from 'react';

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
}

export default function ProgramModal({
  isOpen,
  onClose,
  title,
  image,
  description,
}: ProgramModalProps) {
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  const [showLeadForm, setShowLeadForm] = useState(false);

  const [journeyType, setJourneyType] = useState('');

  const [pregnancyStage, setPregnancyStage] = useState('');

  if (!isOpen) return null;

  return (
    <>
      {/* Main Program Modal */}
      <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-md overflow-y-auto">
        <div className="min-h-screen flex justify-center px-6 py-12">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={onClose}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-[1100px] bg-[#fffaf5] rounded-[42px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.18)] z-10">

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-7 right-7 z-20 w-12 h-12 rounded-full bg-white/90 text-[#2f372f] text-xl shadow-lg hover:scale-105 transition"
            >
              ✕
            </button>

            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="relative h-[420px] lg:h-full">

                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-10">

                  <h2 className="text-white text-[42px] leading-[1.05] tracking-[-2px] font-semibold">
                    {title}
                  </h2>

                </div>

              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-between">

                <div>

                  <p className="text-[#6f5d4b] text-[18px] leading-[2]">
                    {description}
                  </p>

                  {/* Features */}
                  <div className="mt-10 space-y-5">

                    <div className="flex items-start gap-4">

                      <span className="text-[#c29a73] text-xl">✦</span>

                      <p className="text-[#5c4f42] leading-[1.9]">
                        Thoughtfully guided nourishment support designed around
                        emotional wellbeing, mindful routines, and everyday care.
                      </p>

                    </div>

                    <div className="flex items-start gap-4">

                      <span className="text-[#c29a73] text-xl">✦</span>

                      <p className="text-[#5c4f42] leading-[1.9]">
                        Guided dashboard experiences including hydration
                        tracking, wellness routines, recipes, and supportive
                        nourishment journeys.
                      </p>

                    </div>

                    <div className="flex items-start gap-4">

                      <span className="text-[#c29a73] text-xl">✦</span>

                      <p className="text-[#5c4f42] leading-[1.9]">
                        Gentle Sakhi guidance thoughtfully created to bring
                        structure, comfort, and culturally familiar care.
                      </p>

                    </div>

                  </div>

                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4">

                  {/* Speak */}
                  <button className="px-8 py-4 rounded-full bg-[#2f372f] text-white text-sm tracking-[2px] uppercase hover:opacity-90 transition">
                    Speak To A Sakhi
                  </button>

                  {/* Experience */}
                  <button
                    onClick={() => setShowExperienceModal(true)}
                    className="px-8 py-4 rounded-full border border-[#dbc9b5] text-[#5c4f42] text-sm tracking-[2px] uppercase hover:bg-[#f5eee6] transition"
                  >
                    Experience AaharSakhi
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Experience Modal */}
      {showExperienceModal && (

        <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-md flex items-center justify-center px-6">

          <div className="relative w-full max-w-[760px] bg-[#fffaf5] rounded-[38px] p-8 lg:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.18)] overflow-y-auto max-h-[90vh]">

            {/* Close */}
            <button
              onClick={() => setShowExperienceModal(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#f5eee6] text-[#2f372f] text-lg"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-[34px] lg:text-[48px] leading-[1.1] tracking-[-2px] font-semibold text-[#2f372f]">

              A Gentle Introduction
              <br />
              To AaharSakhi

            </h2>

            {/* Description */}
            <p className="mt-6 text-[#6f5d4b] text-[17px] leading-[2]">

              A thoughtfully designed one-day introduction to the
              AaharSakhi experience — including guided nourishment support,
              wellness tracking, mindful routines, emotional care,
              and gentle everyday structure.

            </p>

            {/* Included */}
            <div className="mt-10">

              <h3 className="text-[#2f372f] text-[18px] font-medium">
                Included In Your Experience
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex items-start gap-3">

                  <span className="text-[#c29a73]">✦</span>

                  <p className="text-[#5c4f42]">
                    One-day guided dashboard access.
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <span className="text-[#c29a73]">✦</span>

                  <p className="text-[#5c4f42]">
                    Hydration and wellness tracking support.
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <span className="text-[#c29a73]">✦</span>

                  <p className="text-[#5c4f42]">
                    Mindful nourishment guidance and gentle routines.
                  </p>

                </div>

                <div className="flex items-start gap-3">

                  <span className="text-[#c29a73]">✦</span>

                  <p className="text-[#5c4f42]">
                    Introductory recipes and supportive Sakhi guidance.
                  </p>

                </div>

              </div>

            </div>

            {/* Important Note */}
            <div className="mt-10 rounded-[28px] bg-[#f7efe5] border border-[#ead9c5] p-6">

              <p className="text-[#6f5d4b] leading-[1.9] text-[15px]">

                This introductory experience does not include personalized
                consultations, individualized nourishment plans,
                medical advice, or one-on-one guided care support.

              </p>

            </div>

            {/* Price */}
            <div className="mt-10">

              <p className="text-[#8a6c4f] tracking-[3px] uppercase text-sm">

                One-Day AaharSakhi Experience

              </p>

              <h3 className="mt-3 text-[42px] font-semibold text-[#2f372f]">
                ₹249
              </h3>

            </div>

            {/* Continue */}
            <button
              onClick={() => {
                setShowExperienceModal(false);
                setShowLeadForm(true);
              }}
              className="mt-10 w-full py-5 rounded-full bg-[#2f372f] text-white tracking-[2px] uppercase hover:opacity-90 transition"
            >
              Continue To Experience
            </button>

          </div>

        </div>

      )}

      {/* Lead Form Modal */}
      {showLeadForm && (

        <div className="fixed inset-0 z-[1100] bg-black/50 backdrop-blur-md flex items-center justify-center px-6">

          <div className="relative w-full max-w-[760px] bg-[#fffaf5] rounded-[38px] p-8 lg:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.18)] overflow-y-auto max-h-[90vh]">

            {/* Close */}
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#f5eee6] text-[#2f372f] text-lg"
            >
              ✕
            </button>

            <h2 className="text-[34px] lg:text-[48px] leading-[1.1] tracking-[-2px] font-semibold text-[#2f372f]">
              Begin Your Experience
            </h2>

            <p className="mt-5 text-[#6f5d4b] leading-[2]">
              Share a few details to continue your AaharSakhi experience.
            </p>

          </div>

        </div>

      )}

    </>
  );
}
