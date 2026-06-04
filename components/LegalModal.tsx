'use client';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function LegalModal({
  isOpen,
  onClose,
  title,
  content,
}: LegalModalProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-[#2f372f]/30 backdrop-blur-md flex items-center justify-center px-4 py-6">

      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[88vh] overflow-hidden rounded-[40px] bg-[#fdfaf6] border border-[#eadfce] shadow-[0_30px_100px_rgba(0,0,0,0.12)]">

        {/* Soft Glow */}
        <div className="absolute top-[-120px] right-[-80px] w-[300px] h-[300px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-7 border-b border-[#eee2d4]">

          <h2 className="text-[28px] lg:text-[42px] font-semibold tracking-[-1px] text-[#2f372f] leading-[1.2]">

            {title}

          </h2>

          <button
            onClick={onClose}
            className="text-[#8c745e] text-3xl hover:opacity-70 transition"
          >
            ×
          </button>

        </div>

        {/* Scroll Content */}
        <div className="relative z-10 overflow-y-auto max-h-[72vh] px-6 lg:px-12 py-8 lg:py-10">

          <div className="whitespace-pre-line text-[#6f5d4b] text-[15px] lg:text-[16px] leading-[2.15]">

            {content}

          </div>

        </div>

      </div>

    </div>
  );
}
