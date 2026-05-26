'use client';

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
  if (!isOpen) return null;

  return (
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
                      Daily nourishment guidance and mindful wellness support.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-[#c29a73] text-xl">✦</span>

                    <p className="text-[#5c4f42] leading-[1.9]">
                      Guided dashboard experience with hydration tracking,
                      wellness routines, recipes, and emotional support.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-[#c29a73] text-xl">✦</span>

                    <p className="text-[#5c4f42] leading-[1.9]">
                      Personalized Sakhi support thoughtfully designed for every
                      stage of the wellness journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                {/* Speak */}
                <button className="px-8 py-4 rounded-full bg-[#2f372f] text-white text-sm tracking-[2px] uppercase hover:opacity-90 transition">
                  Speak To Your Sakhi
                </button>

                {/* Trial */}
                <button className="px-8 py-4 rounded-full border border-[#dbc9b5] text-[#5c4f42] text-sm tracking-[2px] uppercase hover:bg-[#f5eee6] transition">
                  Try For One Day — $1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
