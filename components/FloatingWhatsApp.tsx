'use client';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919106094119"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-[0_20px_40px_rgba(0,0,0,0.18)]
        hover:scale-105
        transition
        duration-300
      "
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}