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
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-md flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-[40px] bg-[#fdfaf6] border border-[#eadfce] shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
        {/* Header */}
        <div className="flex items-center justify-between px-8 lg:px-12 py-8 border-b border-[#eee2d4]">
          <h2 className="text-[30px] lg:text-[42px] font-semibold tracking-[-1px] text-[#2f372f]">
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
        <div className="overflow-y-auto max-h-[70vh] px-8 lg:px-12 py-10">
          <div className="whitespace-pre-line text-[#6f5d4b] text-[16px] leading-[2.1]">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
