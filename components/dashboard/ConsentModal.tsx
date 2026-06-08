"use client";

interface ConsentModalProps {
  onAgree: () => void;
}

export default function ConsentModal({
  onAgree,
}: ConsentModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl">
        
        <h2 className="text-3xl font-bold text-[#7c3aed] mb-4">
          Patient Consent Agreement
        </h2>

        <div className="space-y-4 text-gray-700 text-sm leading-7 max-h-[400px] overflow-y-auto">
          
          <p>
            By continuing to use Aahar Sakhi Wellness Dashboard,
            you agree that the nutrition guidance provided
            is supportive wellness guidance and not an emergency
            medical service.
          </p>

          <p>
            You consent to storing your wellness data,
            meal preferences, reports, and communication
            records securely for treatment continuity.
          </p>

          <p>
            You understand that personalized recommendations
            may vary depending on medical history,
            compliance, and health conditions.
          </p>

          <p>
            You agree not to misuse the platform,
            share confidential reports publicly,
            or impersonate another patient.
          </p>

          <p>
            You may request deletion of your records
            according to our Privacy Policy.
          </p>

        </div>

        <button
          onClick={onAgree}
          className="mt-8 w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-4 rounded-2xl font-semibold transition"
        >
          I Agree & Continue
        </button>

      </div>
    </div>
  );
}
