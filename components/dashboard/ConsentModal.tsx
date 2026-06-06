'use client';

interface ConsentModalProps {
  onAccept: () => void;
}

export default function ConsentModal({
  onAccept,
}: ConsentModalProps) {

  return (

    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6">

      <div className="w-full max-w-3xl rounded-[36px] bg-[#fffaf5] p-10 shadow-2xl">

        <h2 className="text-[34px] font-semibold text-[#40342d]">

          Patient Consent Agreement
        </h2>

        <div className="mt-6 max-h-[380px] overflow-y-auto pr-4">

          <p className="text-[#6f5d4b] leading-[2] text-[15px]">

            By accessing AaharSakhi, you acknowledge that nourishment guidance,
            wellness recommendations, emotional support resources, oncology
            nutrition support, pregnancy care guidance, diabetes care guidance,
            and wellness content shared through this platform are supportive in
            nature and do not replace licensed medical treatment, emergency
            care, physician consultation, hospitalization, diagnosis, or
            prescribed treatment plans.

            <br /><br />

            You understand that all recommendations should be followed only
            after consultation with your treating healthcare provider.

            <br /><br />

            By clicking “I Agree”, you acknowledge acceptance of the platform’s:
            Privacy Policy, Refund Policy, Terms & Conditions, and Patient
            Agreement.

          </p>

        </div>

        <button
          onClick={onAccept}
          className="mt-8 w-full h-[58px] rounded-full bg-[#cba789] text-white font-medium text-[16px]"
        >

          I Agree & Continue

        </button>

      </div>

    </div>

  );

}
