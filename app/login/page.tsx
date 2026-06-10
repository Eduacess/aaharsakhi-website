'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    try {

      if (isSignup) {

        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          alert(error.message);
        } else {
          alert('Account created successfully. Please check your email.');
        }

      } else {

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
      redirectTo: 'http://localhost:3000/reset-password',
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