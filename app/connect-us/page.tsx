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
        <div className="absolute top-[-260px] left-[-180px] w-[650px] h-[650px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">

          {/* Quote */}
          <div className="text-center">

            <p className="text-[#8a745e] text-[20px] lg:text-[30px] italic font-light leading-[1.7] font-serif max-w-[920px] mx-auto">

              <span className="text-[#d7b998] text-[34px] lg:text-[48px] align-middle mr-2">

                “

              </span>

              Every healing journey deserves support.

              <span className="text-[#d7b998] text-[34px] lg:text-[48px] align-middle ml-2">

                ”

              </span>

            </p>

          </div>

          {/* Form Section */}
          <div className="mt-10">

            <div className="max-w-[980px] mx-auto rounded-[42px] bg-white border border-[#efe4d6] p-8 lg:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.05)]">

              {/* Label */}
              <div className="text-center">

                <div className="flex items-center justify-center gap-4">

                  <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

                  <span className="text-[#b08b66] tracking-[4px] uppercase text-sm">

                    Connect Form

                  </span>

                  <div className="w-14 h-[1px] bg-[#d8c4ad]"></div>

                </div>

                {/* Heading */}
                <h2 className="mt-8 text-[38px] lg:text-[64px] leading-[1.02] tracking-[-3px] font-semibold text-[#2f372f]">

                  Let A Sakhi
                  <br />

                  Connect With You

                </h2>

                {/* Subtext */}
                <p className="mt-6 text-[#7a6653] leading-[2] max-w-[640px] mx-auto">

                  Share your journey and a Sakhi will thoughtfully
                  connect with you to understand your needs,
                  support, and wellness goals.

                </p>

              </div>

              {/* Form */}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
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
                  value="New AaharSakhi Lead"
                />

                {/* Full Name */}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full h-[68px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-6 text-[#2f372f] outline-none"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  placeholder="Email Address"
                  className="w-full h-[68px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-6 text-[#2f372f] outline-none"
                />

                {/* Country Code + WhatsApp */}
                <div className="grid grid-cols-[140px_1fr] gap-4">

                  {/* Country Code */}
                  <select
                    name="country_code"
                    required
                    className="h-[68px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-5 text-[#2f372f] outline-none"
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
                    className="h-[68px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-6 text-[#2f372f] outline-none"
                  />

                </div>

                {/* Program */}
                <select
                  name="program"
                  required
                  className="w-full h-[68px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-6 text-[#2f372f] outline-none"
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
                  className="w-full h-[68px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-6 text-[#2f372f] outline-none"
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

                {/* Message */}
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about your journey..."
                  className="w-full rounded-3xl border border-[#eadfd2] bg-[#fcfaf7] p-6 text-[#2f372f] outline-none resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[68px] rounded-full bg-[#2f372f] text-white text-sm tracking-[2px] uppercase hover:opacity-90 transition"
                >

                  Let A Sakhi Connect With You

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