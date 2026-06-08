"use client";

const languages = [
"English",
"Hindi",
"Gujarati",
"Marathi",
"Tamil",
"Telugu",
"Kannada",
"Malayalam",
"Punjabi",
"Bengali",
"Urdu",
"Odia",
"Assamese",
];

interface LanguageModalProps {
onSelect: (language: string) => void;
}

export default function LanguageModal({
onSelect,
}: LanguageModalProps) {

return (

<div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 overflow-y-auto">

  <div className="bg-white rounded-[28px] w-full max-w-md p-6 md:p-8 max-h-[85vh] overflow-y-auto">

    {/* TITLE */}

    <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#3d3027] mb-3">

      Choose Your Language 🌍

    </h2>

    {/* SUBTITLE */}

    <p className="text-center text-[#7b6a58] mb-8 text-sm md:text-base">

      Select your preferred language for your wellness journey.

    </p>

    {/* LANGUAGE LIST */}

    <div className="space-y-4">

      {languages.map((language) => (

        <button
          key={language}
          onClick={() => onSelect(language)}
          className="
            w-full
            bg-[#f7f3ee]
            hover:bg-[#eadfd2]
            transition
            rounded-2xl
            py-4
            text-[#3d3027]
            font-medium
            text-base
            md:text-lg
          "
        >

          {language}

        </button>

      ))}

    </div>

  </div>

</div>

);

}