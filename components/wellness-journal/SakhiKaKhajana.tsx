'use client';

import { wellnessArticles } from '@/data/wellnessArticles';

export default function SakhiKaKhajana() {
return (
<section className="py-10 overflow-hidden">

  <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

    <div className="flex items-center gap-5 mb-8">

      <div className="w-14 h-[1px] bg-[#d8c4ad]" />

      <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">
        Sakhi Ka Khajana
      </span>

    </div>

    <div className="overflow-hidden mt-16">

      <div className="flex gap-6 w-max sakhi-scroll">

        {[...wellnessArticles, ...wellnessArticles].map((article, index) => (

          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              min-w-[340px]
              max-w-[340px]
              bg-white
              rounded-[32px]
              overflow-hidden
              border
              border-[#efe4d6]
              shadow-[0_20px_60px_rgba(0,0,0,0.04)]
              hover:scale-[1.02]
              transition-all
              duration-500
            "
          >

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-6">

              <p className="text-[#b08b66] uppercase tracking-[3px] text-xs">
                {article.category}
              </p>

              <h3 className="mt-3 text-[24px] font-semibold text-[#2f372f] leading-[1.3]">
                {article.title}
              </h3>

              <p className="mt-2 text-[#b08b66] text-sm">
                Source: {article.source}
              </p>

              <p className="mt-4 text-[#6f5d4b] leading-[1.8] text-[15px]">
                {article.description}
              </p>

            </div>

          </a>

        ))}

      </div>

    </div>

  </div>

</section>

);
}