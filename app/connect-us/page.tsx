"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ConnectUsPage() {

return (

<main className="overflow-hidden bg-[#fcfaf7]">

  {/* Navbar */}
  <Navbar />

  {/* Main Section */}
  <section className="relative pt-6 pb-24 overflow-hidden">

    {/* Background Glow */}
    <div className="
      absolute
      top-[-260px]
      left-[-180px]
      w-[650px]
      h-[650px]
      bg-[#f3e4d2]
      rounded-full
      blur-3xl
      opacity-40
    "></div>

    <div className="
      max-w-[1400px]
      mx-auto
      px-4
      sm:px-6
      lg:px-16
      relative
      z-10
    ">

      {/* Quote */}
      <div className="text-center">

        <p className="
          text-[#8a745e]
          text-[18px]
          lg:text-[30px]
          italic
          font-light
          leading-[1.7]
          font-serif
          max-w-[920px]
          mx-auto
        ">

          <span className="
            text-[#d7b998]
            text-[30px]
            lg:text-[48px]
            align-middle
            mr-2
          ">

            “

          </span>

          Every healing journey deserves support.

          <span className="
            text-[#d7b998]
            text-[30px]
            lg:text-[48px]
            align-middle
            ml-2
          ">

            ”

          </span>

        </p>

      </div>

      {/* Form Section */}
      <div className="mt-10">

        <div className="
          max-w-[980px]
          mx-auto
          rounded-[28px]
          lg:rounded-[42px]
          bg-white
          border
          border-[#efe4d6]
          p-5
          sm:p-8
          lg:p-14
          shadow-[0_30px_100px_rgba(0,0,0,0.05)]
        ">

          {/* Label */}
          <div className="text-center">

            <div className="
              flex
              items-center
              justify-center
              gap-4
            ">

              <div className="
                w-10
                sm:w-14
                h-[1px]
                bg-[#d8c4ad]
              "></div>

              <span className="
                text-[#b08b66]
                tracking-[3px]
                uppercase
                text-[11px]
                sm:text-sm
              ">

                Connect Form

              </span>

              <div className="
                w-10
                sm:w-14
                h-[1px]
                bg-[#d8c4ad]
              "></div>

            </div>

            {/* Heading */}
            <h2 className="
              mt-8
              text-[34px]
              sm:text-[48px]
              lg:text-[64px]
              leading-[1.02]
              tracking-[-2px]
              lg:tracking-[-3px]
              font-semibold
              text-[#2f372f]
            ">

              Let A Sakhi
              <br />

              Connect With You

            </h2>

            {/* Subtext */}
            <p className="
              mt-6
              text-[#7a6653]
              leading-[2]
              text-[15px]
              max-w-[700px]
              mx-auto
            ">

              Schedule a thoughtful conversation with a Sakhi
              at your preferred time to explore your nourishment,
              wellness, and healing journey.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={async (e) => {

              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const object = Object.fromEntries(formData);

              const json = JSON.stringify(object);

              // SEND TO MAKE.COM WEBHOOK
              fetch(
                'https://hook.us2.make.com/63sensf8dpucq81wj737jtnjz3gyhwh1',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: json,
                }
              );

              // SEND TO WEB3FORMS
              const response = await fetch(
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

              const result = await response.json();

              if (result.success) {

                alert(
                  'Your consultation request has been submitted successfully.'
                );

                window.location.reload();

              }

            }}
            className="mt-14 space-y-6"
          >

            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="13568875-ec62-4962-bc82-b62d1ee2b7b2"
            />

            {/* Subject */}
            <input
              type="hidden"
              name="subject"
              value="New AaharSakhi Scheduled Call Lead"
            />

            {/* Full Name */}
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="
                w-full
                h-[64px]
                sm:h-[68px]
                rounded-2xl
                border
                border-[#eadfd2]
                bg-[#fcfaf7]
                px-6
                text-[#2f372f]
                outline-none
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
                h-[64px]
                sm:h-[68px]
                rounded-2xl
                border
                border-[#eadfd2]
                bg-[#fcfaf7]
                px-6
                text-[#2f372f]
                outline-none
              "
            />

            {/* Country Code + WhatsApp */}
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-[140px_1fr]
              gap-4
            ">

              {/* Country Code */}
              <select
                name="country_code"
                required
                className="
                  h-[64px]
                  sm:h-[68px]
                  rounded-2xl
                  border
                  border-[#eadfd2]
                  bg-[#fcfaf7]
                  px-5
                  text-[#2f372f]
                  outline-none
                "
              >

                <option value="+91">
                  🇮🇳 +91
                </option>

                <option value="+1">
                  🇺🇸 +1
                </option>

                <option value="+44">
                  🇬🇧 +44
                </option>

                <option value="+61">
                  🇦🇺 +61
                </option>

                <option value="+971">
                  🇦🇪 +971
                </option>

                <option value="+65">
                  🇸🇬 +65
                </option>

              </select>

              {/* WhatsApp Number */}
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="WhatsApp Number"
                className="
                  w-full
                  h-[64px]
                  sm:h-[68px]
                  rounded-2xl
                  border
                  border-[#eadfd2]
                  bg-[#fcfaf7]
                  px-6
                  text-[#2f372f]
                  outline-none
                "
              />

            </div>

            {/* Program */}
            <select
              name="program"
              required
              className="
                w-full
                h-[64px]
                sm:h-[68px]
                rounded-2xl
                border
                border-[#eadfd2]
                bg-[#fcfaf7]
                px-6
                text-[#2f372f]
                outline-none
              "
            >

              <option value="">
                Select Nourishment Journey
              </option>

              <option>
                Cancer Poshanam
              </option>

              <option>
                Vatsalya Poshanam
              </option>

              <option>
                Diabetes Poshanam
              </option>

            </select>

            {/* Preferred Language */}
            <select
              name="language"
              required
              className="
                w-full
                h-[64px]
                sm:h-[68px]
                rounded-2xl
                border
                border-[#eadfd2]
                bg-[#fcfaf7]
                px-6
                text-[#2f372f]
                outline-none
              "
            >

              <option value="">
                Preferred Language
              </option>

              <option>
                English
              </option>

              <option>
                Hindi
              </option>

              <option>
                Gujarati
              </option>

              <option>
                Marathi
              </option>

              <option>
                Tamil
              </option>

            </select>

            {/* Preferred Call Date */}
            <input
              type="date"
              name="preferred_call_date"
              required
              className="
                w-full
                h-[64px]
                sm:h-[68px]
                rounded-2xl
                border
                border-[#eadfd2]
                bg-[#fcfaf7]
                px-6
                text-[#2f372f]
                outline-none
              "
            />

            {/* Preferred Call Schedule */}
            <div className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
            ">

              {/* Preferred Call Time */}
              <input
                type="time"
                name="preferred_call_time"
                required
                className="
                  w-full
                  h-[64px]
                  sm:h-[68px]
                  rounded-2xl
                  border
                  border-[#eadfd2]
                  bg-[#fcfaf7]
                  px-6
                  text-[#2f372f]
                  outline-none
                "
              />

              {/* Preferred Timezone */}
              <select
                name="timezone"
                required
                className="
                  w-full
                  h-[64px]
                  sm:h-[68px]
                  rounded-2xl
                  border
                  border-[#eadfd2]
                  bg-[#fcfaf7]
                  px-6
                  text-[#2f372f]
                  outline-none
                "
              >

                <option value="">
                  Preferred Time Zone
                </option>

                <option value="IST">
                  IST — India Standard Time
                </option>

                <option value="EST">
                  EST — Eastern Standard Time
                </option>

                <option value="PST">
                  PST — Pacific Standard Time
                </option>

                <option value="GMT">
                  GMT — Greenwich Mean Time
                </option>

                <option value="CST">
                  CST — Central Standard Time
                </option>

                <option value="MST">
                  MST — Mountain Standard Time
                </option>

                <option value="GST">
                  GST — Gulf Standard Time
                </option>

                <option value="SGT">
                  SGT — Singapore Time
                </option>

              </select>

            </div>

            {/* Privacy Note */}
            <div className="
              rounded-[28px]
              bg-[#f8f2eb]
              border
              border-[#eadfd2]
              p-6
            ">

              <p className="
                text-[#7a6653]
                leading-[2]
                text-[15px]
              ">

                We respect your time and privacy.
                Our Sakhi team only connects during your preferred schedule.
                No spam calls. No unnecessary follow-ups.

              </p>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full
                h-[64px]
                sm:h-[68px]
                rounded-full
                bg-[#2f372f]
                text-white
                text-sm
                tracking-[2px]
                uppercase
                hover:opacity-90
                transition
              "
            >

              Schedule A Call With Sakhi

            </button>

          </form>

        </div>

      </div>

    </div>

  </section>

  {/* Footer */}
  <Footer />

</main>

)

}