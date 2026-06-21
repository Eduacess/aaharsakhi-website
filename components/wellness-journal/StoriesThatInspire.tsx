'use client';

export default function StoriesThatInspire() {

const inspiringJourneys = [

{
  name: 'Hina Khan',
  category: 'Cancer Journey',
  image:
    'https://images.indianexpress.com/2025/07/Hina-Khan-with-husband-Rocky-Jaiswal.jpg',
  story:
    'Hina Khan openly shared her cancer diagnosis and treatment journey, inspiring many through her strength and honesty.',
  quote:
    'This is a phase, not my forever.',
},

{
  name: 'Yuvraj Singh',
  category: 'Cancer Recovery',
  image:
    'https://dailypioneer.com/uploads/2026/story/images/big/yuvraj-singh-to-join-delhi-capitals-as-batting-coach--pant-likely-to-be-traded-2026-06-20.jpg',
  story:
    'After battling cancer at the peak of his cricket career, Yuvraj Singh returned to professional sport and became a symbol of resilience.',
  quote:
    'Cancer was a lesson in life.',
},

{
  name: 'Nick Jonas',
  category: 'Diabetes Journey',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/9/9c/Nick_Jonas_Cannes_2019_%28cropped%29.jpg',
  story:
    'Diagnosed with Type 1 diabetes at a young age, Nick Jonas became a global advocate for diabetes awareness.',
  quote:
    'You are not defined by your diagnosis.',
},

{
    name: 'Sonali Bendre',
    category: 'Cancer Journey',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJe52VQlrygyGO1nbpyqgI2JV8wkhPF23afM3s_Z7-yk3xcmBbitXxmnN_&s=10',
    story:
    'Sonali Bendre openly shared her battle with metastatic cancer, inspiring millions with her positivity and courage.',
    quote:
    'What I learned was to find joy in the smallest moments.',
    },
    
    {
    name: 'Tahira Kashyap',
    category: 'Breast Cancer Awareness',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl--8pyo-uN0KE2bxS8MCn77fC7NK3o2G2Ff8WrO0wmsSMU4VxpQdmkHw&s=10',
    story:
    'Tahira Kashyap used her personal experience with breast cancer to encourage awareness and early detection.',
    quote:
    'Scars are proof that I survived.',
    },
    
    {
    name: 'Wasim Akram',
    category: 'Diabetes Journey',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7OOQFFWRt7v6F0n-ot-LlSEi53bowIoqqHjbNDcghg&s=10',
    story:
    'Wasim Akram transformed his lifestyle after being diagnosed with diabetes and has inspired many through awareness efforts.',
    quote:
    'Diabetes changed my life, but it did not stop my life.',
    },
    
    {
    name: 'Debina Bonnerjee',
    category: 'IVF Journey',
    image:
    'https://images.hindustantimes.com/img/2024/07/22/1600x900/debina_1721650919220_1721650934827.jpg',
    story:
    'Debina Bonnerjee openly shared her IVF and fertility journey, giving hope to couples navigating similar challenges.',
    quote:
    'Every journey to motherhood is unique and beautiful.',
    },
    
    {
    name: 'Sameera Reddy',
    category: 'Postpartum Journey',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFn2VkP6_PPh8VrAKjMgZ0Yg3XuTxa7IghxCeSR-KehCSonNZ5WwDGLDg&s=10',
    story:
    'Sameera Reddy has spoken candidly about postpartum struggles, body image, and emotional wellbeing.',
    quote:
    'Perfection is overrated. Authenticity is freedom.',
    },
    
    {
    name: 'Chrissy Teigen',
    category: 'Pregnancy Loss & Healing',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXirI2mJDze6twiq1lgqZG-lvkVek3WfzdFIWALY1mNT1e_2OIV_3j0o&s=10',
    story:
    'Chrissy Teigen shared her experience with pregnancy loss, helping normalize conversations around grief and healing.',
    quote:
    'You can survive this and continue to grow from it.',
    },
    
    {
    name: 'Serena Williams',
    category: 'Postpartum Recovery',
    image:
    'https://cdn.britannica.com/36/234836-050-6127751C/Serena-Williams-holds-daughter-Alexis-Olympia-Womens-ASB-Classic-Auckland-New-Zealand-January-12-2020.jpg',
    story:
    'Serena Williams openly discussed postpartum complications, helping raise awareness about maternal health.',
    quote:
    'Every woman’s journey is different, and every journey deserves support.',
    },

];

return (

<section className="py-10 overflow-hidden">

  <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

    <div className="flex items-center gap-5 mb-8">

      <div className="w-14 h-[1px] bg-[#d8c4ad]" />

      <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">
        Stories That Inspire
      </span>

    </div>

    <div className="overflow-hidden mt-4">

      <div className="flex gap-6 w-max sakhi-scroll">

        {[...inspiringJourneys, ...inspiringJourneys].map(
          (story, index) => (

            <div
              key={index}
              className="
                min-w-[340px]
                max-w-[340px]
                bg-white
                rounded-[32px]
                overflow-hidden
                border
                border-[#efe4d6]
                shadow-[0_20px_60px_rgba(0,0,0,0.04)]
              "
            >

              <img
                src={story.image}
                alt={story.name}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6">

                <p className="text-[#b08b66] uppercase tracking-[3px] text-xs">
                  {story.category}
                </p>

                <h3 className="mt-3 text-[22px] font-semibold text-[#2f372f]">
                  {story.name}
                </h3>

                <p className="mt-4 text-[#6f5d4b] leading-[1.8] text-sm">
                  {story.story}
                </p>

                <p className="mt-6 italic text-[#b08b66]">
  &quot;{story.quote}&quot;
</p>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  </div>

</section>

);
}