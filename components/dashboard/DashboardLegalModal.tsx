'use client';

interface DashboardLegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function DashboardLegalModal({
  isOpen,
  onClose,
  title,
  content,
}: DashboardLegalModalProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="bg-[#fffaf5] w-full max-w-3xl rounded-[32px] p-8 max-h-[85vh] overflow-y-auto relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[24px] text-[#6f5d4b]"
        >
          ×
        </button>

        <h2 className="text-[34px] font-semibold text-[#40342d] tracking-[-1px]">

          {title}

        </h2>

        <div className="mt-6 whitespace-pre-line text-[15px] leading-[2] text-[#6f5d4b]">

          {content}

        </div>

      </div>

    </div>
  );
}