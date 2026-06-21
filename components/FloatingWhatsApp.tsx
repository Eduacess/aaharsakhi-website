'use client';

import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const [journey, setJourney] = useState('');

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(true)}
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
      </button>

      {/* Modal */}

      {isOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-md flex items-center justify-center px-6">

          <div className="relative w-full max-w-[650px] bg-[#fffaf5] rounded-[36px] p-8 lg:p-10">

            {/* Close */}

            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute
                top-5
                right-5
                w-10
                h-10
                rounded-full
                bg-[#f3ebe2]
              "
            >
              ✕
            </button>

            <h2
              className="
                text-[34px]
                lg:text-[44px]
                leading-[1.1]
                font-semibold
                text-[#2f372f]
              "
            >
              Connect With A Sakhi
            </h2>

            <p
              className="
                mt-4
                text-[#6f5d4b]
                leading-[1.9]
              "
            >
              Share a few details and we&apos;ll connect you directly through
              WhatsApp.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);

                const object = Object.fromEntries(formData);

                const json = JSON.stringify(object);

                // Make.com

                fetch(
                  'https://hook.us2.make.com/gqw9ywx4j8uhksw6g3drnnt0jebrxiwr',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: json,
                  }
                );

                // Web3Forms

                await fetch(
                  'https://api.web3forms.com/submit',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                    },
                    body: json,
                  }
                );

                const data = object as {
                  name: string;
                  journey: string;
                };

                const message = encodeURIComponent(
                  `Hello AaharSakhi,

My name is ${data.name}.

I would like guidance regarding ${data.journey}.`
                );

                window.open(
                  `https://wa.me/919106094119?text=${message}`,
                  '_blank'
                );

                setIsOpen(false);
              }}
            >

              <input
                type="hidden"
                name="access_key"
                value="13568875-ec62-4962-bc82-b62d1ee2b7b2"
              />

              <input
                type="hidden"
                name="subject"
                value="WhatsApp Lead - AaharSakhi"
              />

              {/* Name */}

              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="
                  w-full
                  px-6
                  py-4
                  rounded-[18px]
                  border
                  border-[#ead9c5]
                  bg-white
                "
              />

              {/* Email */}

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="
                  w-full
                  px-6
                  py-4
                  rounded-[18px]
                  border
                  border-[#ead9c5]
                  bg-white
                "
              />

              {/* Phone */}

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="
                  w-full
                  px-6
                  py-4
                  rounded-[18px]
                  border
                  border-[#ead9c5]
                  bg-white
                "
              />

              {/* Journey */}

              <select
                name="journey"
                required
                value={journey}
                onChange={(e) => setJourney(e.target.value)}
                className="
                  w-full
                  px-6
                  py-4
                  rounded-[18px]
                  border
                  border-[#ead9c5]
                  bg-white
                "
              >
                <option value="">Select Journey</option>

                <option value="Cancer Poshanam">
                  Cancer Poshanam
                </option>

                <option value="Diabetes Poshanam">
                  Diabetes Poshanam
                </option>

                <option value="Matrutva Poshanam">
                  Matrutva Poshanam
                </option>

            
              </select>

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-full
                  bg-[#2f372f]
                  text-white
                  tracking-[2px]
                  uppercase
                "
              >
                Continue To WhatsApp
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}