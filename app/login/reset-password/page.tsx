'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      alert(
        'Password must be at least 6 characters'
      );
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      'Password updated successfully. Please login again.'
    );

    router.push('/login');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfaf7] flex items-center justify-center px-6">

      {/* Ombre Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-250px] left-[-150px] w-[700px] h-[700px] bg-[#f3e4d2] rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] bg-[#f7eee4] rounded-full blur-3xl opacity-40" />

      </div>

      <div className="relative z-10 w-full max-w-md rounded-[32px] bg-white border border-[#efe4d6] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-10 h-[1px] bg-[#d8c4ad]" />

          <span className="text-[#b08b66] tracking-[3px] uppercase text-xs">
            AaharSakhi
          </span>

        </div>

        <h1 className="text-[40px] leading-[1.1] font-semibold text-[#2f372f]">
          Reset Password
        </h1>

        <p className="mt-4 text-[#7a6653] leading-[1.8]">
          Create a new secure password for your account.
        </p>

        <form
          onSubmit={handleResetPassword}
          className="mt-8 space-y-5"
        >

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            className="w-full h-[60px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-5 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
            className="w-full h-[60px] rounded-2xl border border-[#eadfd2] bg-[#fcfaf7] px-5 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[60px] rounded-full bg-[#2f372f] text-white uppercase tracking-[2px]"
          >
            {loading
              ? 'Updating...'
              : 'Update Password'}
          </button>

        </form>

      </div>

    </main>
  );
}