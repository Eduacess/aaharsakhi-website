"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import { supabase } from "@/lib/supabase";

export default function ProfilePage() {

  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState<any>(null);

  // =========================
  // LOAD PROFILE
  // =========================

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {

          router.push("/login");
          return;

        }

        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) {

          console.log(error);

          alert("Unable to load profile");

          setLoading(false);

          return;

        }

        setProfile(data);

        setLoading(false);

      } catch (err) {

        console.log(err);

        alert("Something went wrong");

        setLoading(false);

      }

    };

    loadProfile();

  }, [router]);

  // =========================
  // SAVE PROFILE
  // =========================

  const handleSave = async () => {

    try {

      setSaving(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const { error } = await supabase
        .from("profiles")
        .update({

          full_name:
            profile.full_name,

          phone:
            profile.phone,

          preferred_language:
            profile.preferred_language,

          auto_translation:
            profile.auto_translation,

          allergies:
            profile.allergies,

          medication_info:
            profile.medication_info,

          blood_group:
            profile.blood_group,

          current_treatment_plan:
            profile.current_treatment_plan,

        })
        .eq("id", session.user.id);

      setSaving(false);

      if (error) {

        alert(error.message);

      } else {

        alert(
          "Profile updated successfully"
        );

      }

    } catch (err) {

      console.log(err);

      alert("Save failed");

      setSaving(false);

    }

  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = async () => {

    await supabase.auth.signOut();

    router.push("/login");

  };

  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (

      <main className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#f5f6fa]
      ">

        <p className="
          text-[#5f5348]
          text-lg
        ">

          Loading profile...

        </p>

      </main>

    );

  }

  // =========================
  // MAIN PAGE
  // =========================

  return (

    <main className="
      min-h-screen
      bg-[#f5f6fa]
    ">

      <DashboardNavbar />

      <section className="
        px-4
        md:px-6
        lg:px-8
        py-6
      ">

        {/* HEADER */}

        <div className="
          flex
          items-center
          justify-between
          flex-wrap
          gap-5
          mb-10
        ">

          <div>

            <h1 className="
              text-3xl
              md:text-4xl
              font-semibold
              text-[#3d3027]
            ">

              {profile?.full_name ||
                "AaharSakhi User"}

            </h1>

            <p className="
              text-[#7c6d60]
              mt-2
              text-lg
            ">

              {profile?.program_interest ||
                "Wellness Journey"} 🤍

            </p>

            <p className="
              text-sm
              text-[#9a8c7f]
              mt-3
            ">

              Current Access:
              {" "}

              {profile?.plan_type ===
              "trial_access"
                ? "Trial Access"
                : profile?.plan_type ||
                  "Trial Access"}

            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="
          grid
          lg:grid-cols-2
          gap-6
        ">

          {/* PERSONAL DETAILS */}

          <div className="
            bg-white
            border
            border-[#eadfd2]
            rounded-[30px]
            p-6
          ">

            <h2 className="
              text-2xl
              font-semibold
              text-[#3d3027]
              mb-6
            ">

              Personal Details

            </h2>

            <div className="space-y-5">

              {/* NAME */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Full Name

                </p>

                <input
                  type="text"
                  value={
                    profile?.full_name || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      full_name:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                  "
                />

              </div>

              {/* PHONE */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Phone Number

                </p>

                <input
                  type="text"
                  value={
                    profile?.phone || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      phone:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                  "
                />

              </div>

              {/* BLOOD GROUP */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Blood Group

                </p>

                <input
                  type="text"
                  value={
                    profile?.blood_group || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      blood_group:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                  "
                />

              </div>

              {/* LANGUAGE */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Preferred Language

                </p>

                <select
                  value={
                    profile?.preferred_language || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      preferred_language:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                  "
                >

                  <option value="">
                    Select Language
                  </option>

                  <option value="English">
                    English
                  </option>

                  <option value="Hindi">
                    Hindi
                  </option>

                  <option value="Gujarati">
                    Gujarati
                  </option>

                  <option value="Marathi">
                    Marathi
                  </option>

                  <option value="Punjabi">
                    Punjabi
                  </option>

                  <option value="Tamil">
                    Tamil
                  </option>

                  <option value="Telugu">
                    Telugu
                  </option>

                  <option value="Kannada">
                    Kannada
                  </option>

                  <option value="Malayalam">
                    Malayalam
                  </option>

                </select>

              </div>

              {/* AUTO TRANSLATION */}

              <div>

                <div className="
                  flex
                  items-center
                  justify-between
                  border
                  border-[#eadfd2]
                  rounded-2xl
                  px-4
                  py-4
                ">

                  <div>

                    <p className="
                      text-[#3d3027]
                      font-medium
                    ">

                      Enable Auto Translation

                    </p>

                    <p className="
                      text-sm
                      text-[#8a7d72]
                      mt-1
                    ">

                      Translate dashboard
                      automatically into your
                      preferred language

                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={
                      profile?.auto_translation ||
                      false
                    }
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        auto_translation:
                          e.target.checked,
                      })
                    }
                    className="
                      w-5
                      h-5
                    "
                  />

                </div>

              </div>

            </div>

          </div>

          {/* MEDICAL DETAILS */}

          <div className="
            bg-white
            border
            border-[#eadfd2]
            rounded-[30px]
            p-6
          ">

            <h2 className="
              text-2xl
              font-semibold
              text-[#3d3027]
              mb-6
            ">

              Medical Details

            </h2>

            <div className="space-y-5">

              {/* ALLERGIES */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Allergies & Sensitivities

                </p>

                <textarea
                  value={
                    profile?.allergies || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      allergies:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    min-h-[120px]
                    outline-none
                  "
                />

              </div>

              {/* MEDICATION */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Medication Info

                </p>

                <textarea
                  value={
                    profile?.medication_info || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      medication_info:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    min-h-[120px]
                    outline-none
                  "
                />

              </div>

              {/* TREATMENT */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-1
                ">

                  Current Treatment Plan

                </p>

                <textarea
                  value={
                    profile?.current_treatment_plan || ""
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      current_treatment_plan:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    min-h-[120px]
                    outline-none
                  "
                />

              </div>

            </div>

          </div>

        </div>

        {/* SAVE BUTTON */}

        <div className="mt-8">

          <button
            onClick={handleSave}
            disabled={saving}
            className="
              px-8
              py-4
              rounded-full
              bg-[#3d3027]
              text-white
            "
          >

            {saving
              ? "Saving..."
              : "Save Changes"}

          </button>

        </div>

        {/* ACCOUNT */}

        <div className="
          mt-8
          bg-white
          border
          border-[#eadfd2]
          rounded-[30px]
          p-6
        ">

          <h2 className="
            text-2xl
            font-semibold
            text-[#3d3027]
            mb-6
          ">

            Account

          </h2>

          <div className="space-y-4">

            {/* PLAN */}

            <button
              className="
                w-full
                bg-[#fff7f4]
                border
                border-[#eadfd2]
                rounded-2xl
                px-5
                py-4
                text-left
                text-[#3d3027]
              "
            >

              Current Plan:
              {" "}

              {profile?.plan_type ===
              "trial_access"
                ? "Trial Access"
                : profile?.plan_type ||
                  "Trial Access"}

            </button>

            {/* SUPPORT */}

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919106094119",
                  "_blank"
                )
              }
              className="
                w-full
                bg-[#fff7f4]
                border
                border-[#eadfd2]
                rounded-2xl
                px-5
                py-4
                text-left
                text-[#3d3027]
              "
            >

              Support & Help

            </button>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="
                w-full
                bg-[#fff1f1]
                border
                border-[#f1cccc]
                rounded-2xl
                px-5
                py-4
                text-left
                text-[#a94442]
              "
            >

              Logout

            </button>

          </div>

        </div>

      </section>

      <DashboardFooter />

    </main>

  );

}