'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {

  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [programInterest, setProgramInterest] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    try {

      // SIGNUP

      if (isSignup) {

        // SAVE LEAD

        const { error: leadError } = await supabase
          .from('leads')
          .insert([
            {
              full_name: fullName,
              phone_number: phoneNumber,
              email,
              program_interest: programInterest,
              signup_source: 'website',
              trial_used: false,
              plan_type: 'free',
            },
          ]);

        if (leadError) {

          alert(leadError.message);
          setLoading(false);
          return;

        }

        // CREATE AUTH ACCOUNT

        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {

          alert(error.message);

        } else {

          alert('Account created successfully');
          router.push('/dashboard');

        }

      }

      // LOGIN

      else {

        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {

          alert(error.message);

        } else {

          router.push('/dashboard');

        }

      }

    } catch (err) {

      console.error(err);
      alert('Something went wrong');

    }

    setLoading(false);

  };

  const handleForgotPassword = async () => {

    if (!email) {

      alert('Please enter your email first');
      return;

    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://your-domain.com/reset-password',
    });

    if (error) {

      alert(error.message);

    } else {

      alert('Password reset email sent');

    }

  };

  return (

    <main className="min-h-screen bg-[#f8f6f2]">

      <Navbar />

      <div className="
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        py-10
        sm:py-16
      ">

        <div className="
          w-full
          max-w-md
          bg-[#fffdf9]
          border
          border-[#ece7df]
          rounded-[28px]
          sm:rounded-[32px]
          shadow-sm
          p-6
          sm:p-8
          md:p-10
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-6
          ">

            <div className="
              w-10
              h-[1px]
              bg-[#b8aea2]
            " />

            <p className="
              text-[11px]
              tracking-[0.28em]
              uppercase
              text-[#8b8175]
            ">

              AaharSakhi

            </p>

          </div>

          <h1 className="
            text-[34px]
            sm:text-[42px]
            leading-[1.1]
            font-light
            text-[#1e1e1e]
            mb-4
          ">

            {isSignup ? 'Create Account' : 'Welcome Back'}

          </h1>

          <p className="
            text-[14px]
            sm:text-[15px]
            leading-[1.8]
            text-[#6f6a63]
            mb-10
          ">

            Access your wellness dashboard securely.

          </p>

          <form
            className="space-y-5"
            onSubmit={handleAuth}
          >

            {/* SIGNUP EXTRA FIELDS */}

            {isSignup && (

              <>

                {/* FULL NAME */}

                <div>

                  <label className="
                    block
                    text-[13px]
                    text-[#5c554d]
                    mb-2
                  ">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-[#ddd6cc]
                      bg-white
                      px-5
                      text-[15px]
                      outline-none
                      focus:border-[#bca58a]
                    "
                  />

                </div>

                {/* PHONE NUMBER */}

                <div>

                  <label className="
                    block
                    text-[13px]
                    text-[#5c554d]
                    mb-2
                  ">

                    Phone Number

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-[#ddd6cc]
                      bg-white
                      px-5
                      text-[15px]
                      outline-none
                      focus:border-[#bca58a]
                    "
                  />

                </div>

                {/* PROGRAM INTEREST */}

                <div>

                  <label className="
                    block
                    text-[13px]
                    text-[#5c554d]
                    mb-2
                  ">

                    Program Interest

                  </label>

                  <select
                    value={programInterest}
                    onChange={(e) => setProgramInterest(e.target.value)}
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      border
                      border-[#ddd6cc]
                      bg-white
                      px-5
                      text-[15px]
                      outline-none
                      focus:border-[#bca58a]
                    "
                  >

<option value="">Select Program</option>

<option value="Vatsalya Poshana - Expecting">
  Vatsalya Poshana - Expecting
</option>

<option value="Vatsalya Poshana - Delivered">
  Vatsalya Poshana - Delivered
</option>

<option value="Diabetes Poshana">
  Diabetes Poshana
</option>

<option value="Cancer Poshana">
  Cancer Poshana
</option>
                  

                  </select>

                </div>

              </>

            )}

            {/* EMAIL */}

            <div>

              <label className="
                block
                text-[13px]
                text-[#5c554d]
                mb-2
              ">

                Email

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-[#ddd6cc]
                  bg-white
                  px-5
                  text-[15px]
                  outline-none
                  focus:border-[#bca58a]
                "
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="
                block
                text-[13px]
                text-[#5c554d]
                mb-2
              ">

                Password

              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  h-14
                  rounded-2xl
                  border
                  border-[#ddd6cc]
                  bg-white
                  px-5
                  text-[15px]
                  outline-none
                  focus:border-[#bca58a]
                "
              />

            </div>

            {/* ACTIONS */}

            <div className="flex justify-between items-center">

              <button
                type="button"
                onClick={handleForgotPassword}
                className="
                  text-[13px]
                  text-[#8a7761]
                "
              >

                Forgot Password?

              </button>

              <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="
                  text-[13px]
                  text-[#8a7761]
                "
              >

                {isSignup ? 'Login' : 'Create Account'}

              </button>

            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-14
                rounded-full
                bg-[#1e1e1e]
                text-white
                text-[14px]
                tracking-[0.18em]
                uppercase
                hover:opacity-90
                transition-all
                mt-3
              "
            >

              {loading
                ? 'Please wait...'
                : isSignup
                  ? 'Create Account'
                  : 'Login'
              }

            </button>

          </form>

        </div>

      </div>

      <Footer />

    </main>

  );

}
