'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface DashboardLegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;

  // NEW

  showAgreementActions?: boolean;
  onAgreementAccepted?: () => void;
}

export default function DashboardLegalModal({
  isOpen,
  onClose,
  title,
  content,

  showAgreementActions = false,
  onAgreementAccepted,

}: DashboardLegalModalProps) {

  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleAgreement = async () => {

    if (!checked) {
      alert('Please accept the agreement');
      return;
    }

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert('User not found');
      return;
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        agreement_accepted: true,
        agreement_accepted_at: new Date().toISOString(),
        agreement_version: 'v1',
      })
      .eq('id', user.id);

    setLoading(false);

    if (error) {

      alert(error.message);

    } else {

      if (onAgreementAccepted) {
        onAgreementAccepted();
      }

      onClose();

    }

  };

  return (

    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="
        bg-[#fffaf5]
        w-full
        max-w-3xl
        rounded-[32px]
        p-8
        max-h-[85vh]
        overflow-y-auto
        relative
      ">

        {/* CLOSE BUTTON */}

        {!showAgreementActions && (

          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[24px] text-[#6f5d4b]"
          >
            ×
          </button>

        )}

        {/* TITLE */}

        <h2 className="
          text-[34px]
          font-semibold
          text-[#40342d]
          tracking-[-1px]
        ">

          {title}

        </h2>

        {/* CONTENT */}

        <div className="
          mt-6
          whitespace-pre-line
          text-[15px]
          leading-[2]
          text-[#6f5d4b]
        ">

          {content}

        </div>

        {/* AGREEMENT ACTIONS */}

        {showAgreementActions && (

          <div className="mt-8">

            <label className="
              flex
              items-start
              gap-3
              text-sm
              text-[#5c554d]
            ">

              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1"
              />

              <span>

                I voluntarily agree to AaharSakhi wellness
                policies, privacy policy, terms & conditions,
                and platform agreements.

              </span>

            </label>

            <button
              onClick={handleAgreement}
              disabled={loading}
              className="
                mt-6
                w-full
                h-14
                rounded-full
                bg-[#1e1e1e]
                text-white
                uppercase
                tracking-[0.15em]
                hover:opacity-90
                transition-all
              "
            >

              {loading
                ? 'Please wait...'
                : 'I Agree & Continue'
              }

            </button>

          </div>

        )}

      </div>

    </div>

  );
}