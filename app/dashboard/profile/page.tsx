"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

import { supabase } from "@/lib/supabase";

export default function ProfilePage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [editMode, setEditMode] =
    useState(false);

  const [profile, setProfile] =
    useState<any>(null);

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

        const { data, error } =
          await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

        if (error) {

          console.log(error);

          alert(
            "Unable to load profile"
          );

          setLoading(false);

          return;

        }

        setProfile(data);

        setLoading(false);

      } catch (err) {

        console.log(err);

        alert(
          "Something went wrong"
        );

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

      const { error } =
        await supabase
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

            notifications_enabled:
              profile.notifications_enabled,

            fasting_sugar_reminder:
              profile.fasting_sugar_reminder,

            postmeal_sugar_reminder:
              profile.postmeal_sugar_reminder,

            bp_reminder:
              profile.bp_reminder,

            hydration_reminder:
              profile.hydration_reminder,

            hydration_frequency:
              profile.hydration_frequency,

          })
          .eq(
            "id",
            session.user.id
          );

      setSaving(false);

      if (error) {

        alert(error.message);

      } else {

        alert(
          "Profile updated successfully"
        );

        setEditMode(false);

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
        bg-[#f7f3ee]
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
      bg-[#f7f3ee]
    ">

      <DashboardNavbar />

      <section className="
        px-4
        md:px-6
        lg:px-8
        py-8
        max-w-7xl
        mx-auto
      ">

        {/* HEADER */}

        <div className="
          flex
          items-start
          justify-between
          flex-wrap
          gap-5
          mb-10
        ">

          <div>

            <p className="
              text-sm
              uppercase
              tracking-[0.18em]
              text-[#9b8574]
              mb-3
            ">

              Wellness Profile

            </p>

            <h1 className="
              text-4xl
              md:text-5xl
              font-light
              tracking-[-0.04em]
              text-[#2f241d]
            ">

              {profile?.full_name ||
                "AaharSakhi User"}

            </h1>

            <p className="
              text-[#7c6d60]
              mt-3
              text-lg
            ">

              {profile?.program_interest ||
                "Wellness Journey"}

            </p>

            <p className="
              text-sm
              text-[#9a8c7f]
              mt-4
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

          <button
            onClick={() =>
              setEditMode(
                !editMode
              )
            }
            className="
              px-6
              py-3
              rounded-full
              border
              border-[#dacabd]
              bg-white
              text-[#3d3027]
              hover:bg-[#faf6f2]
              transition
            "
          >

            {editMode
              ? "Cancel"
              : "Edit Profile"}

          </button>

        </div>

        {/* GRID */}

        <div className="
          grid
          lg:grid-cols-2
          gap-6
        ">

          {/* PERSONAL */}

          <div className="
            bg-white
            border
            border-[#eadfd2]
            rounded-[32px]
            p-7
          ">

            <h2 className="
              text-2xl
              font-semibold
              text-[#3d3027]
              mb-8
            ">

              Personal Wellness

            </h2>

            <div className="
              space-y-7
            ">

              {/* NAME */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-2
                ">

                  Full Name

                </p>

                {editMode ? (

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

                ) : (

                  <p className="
                    text-[#2f241d]
                    text-lg
                  ">

                    {profile?.full_name ||
                      "Not added"}

                  </p>

                )}

              </div>

              {/* PHONE */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-2
                ">

                  Phone Number

                </p>

                {editMode ? (

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

                ) : (

                  <p className="
                    text-[#2f241d]
                    text-lg
                  ">

                    {profile?.phone ||
                      "Not added"}

                  </p>

                )}

              </div>

              {/* BLOOD */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-2
                ">

                  Blood Group

                </p>

                {editMode ? (

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

                ) : (

                  <p className="
                    text-[#2f241d]
                    text-lg
                  ">

                    {profile?.blood_group ||
                      "Not added"}

                  </p>

                )}

              </div>

              {/* LANGUAGE */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-2
                ">

                  Preferred Language

                </p>

                {editMode ? (

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

                  </select>

                ) : (

                  <p className="
                    text-[#2f241d]
                    text-lg
                  ">

                    {profile?.preferred_language ||
                      "English"}

                  </p>

                )}

              </div>

            </div>

          </div>

          {/* MEDICAL */}

          <div className="
            bg-white
            border
            border-[#eadfd2]
            rounded-[32px]
            p-7
          ">

            <h2 className="
              text-2xl
              font-semibold
              text-[#3d3027]
              mb-8
            ">

              Medical & Wellness

            </h2>

            <div className="
              space-y-7
            ">

              {/* ALLERGIES */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-2
                ">

                  Allergies

                </p>

                {editMode ? (

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

                ) : (

                  <p className="
                    text-[#2f241d]
                    leading-relaxed
                  ">

                    {profile?.allergies ||
                      "No allergies added"}

                  </p>

                )}

              </div>

              {/* MEDICATION */}

              <div>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mb-2
                ">

                  Medication Info

                </p>

                {editMode ? (

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

                ) : (

                  <p className="
                    text-[#2f241d]
                    leading-relaxed
                  ">

                    {profile?.medication_info ||
                      "No medication information added"}

                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

        {/* WELLNESS REMINDERS */}

        <div className="
          mt-6
          bg-white
          border
          border-[#eadfd2]
          rounded-[32px]
          p-7
        ">

          <h2 className="
            text-2xl
            font-semibold
            text-[#3d3027]
            mb-2
          ">

            Wellness Reminders

          </h2>

          <p className="
            text-[#8a7d72]
            mb-8
          ">

            Personalize your wellness reminders
            and hydration support.

          </p>

          <div className="
            space-y-5
          ">

            {/* NOTIFICATIONS */}

            <div className="
              flex
              items-center
              justify-between
            ">

              <div>

                <p className="
                  text-[#2f241d]
                  font-medium
                ">

                  Enable Notifications

                </p>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mt-1
                ">

                  Allow wellness reminders
                  from AaharSakhi

                </p>

              </div>

              <input
                type="checkbox"
                checked={
                  profile?.notifications_enabled ||
                  false
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    notifications_enabled:
                      e.target.checked,
                  })
                }
                className="
                  w-5
                  h-5
                "
              />

            </div>

            {/* FASTING */}

            <div className="
              flex
              items-center
              justify-between
            ">

              <div>

                <p className="
                  text-[#2f241d]
                  font-medium
                ">

                  Fasting Sugar Reminder

                </p>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mt-1
                ">

                  Daily at 7:30 AM

                </p>

              </div>

              <input
                type="checkbox"
                checked={
                  profile?.fasting_sugar_reminder ||
                  false
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    fasting_sugar_reminder:
                      e.target.checked,
                  })
                }
                className="
                  w-5
                  h-5
                "
              />

            </div>

            {/* POSTMEAL */}

            <div className="
              flex
              items-center
              justify-between
            ">

              <div>

                <p className="
                  text-[#2f241d]
                  font-medium
                ">

                  Post Meal Sugar Reminder

                </p>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mt-1
                ">

                  Daily at 2:00 PM

                </p>

              </div>

              <input
                type="checkbox"
                checked={
                  profile?.postmeal_sugar_reminder ||
                  false
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    postmeal_sugar_reminder:
                      e.target.checked,
                  })
                }
                className="
                  w-5
                  h-5
                "
              />

            </div>

            {/* BP */}

            <div className="
              flex
              items-center
              justify-between
            ">

              <div>

                <p className="
                  text-[#2f241d]
                  font-medium
                ">

                  Blood Pressure Reminder

                </p>

                <p className="
                  text-sm
                  text-[#8a7d72]
                  mt-1
                ">

                  Morning & evening reminders

                </p>

              </div>

              <input
                type="checkbox"
                checked={
                  profile?.bp_reminder ||
                  false
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    bp_reminder:
                      e.target.checked,
                  })
                }
                className="
                  w-5
                  h-5
                "
              />

            </div>

            {/* HYDRATION */}

            <div>

              <div className="
                flex
                items-center
                justify-between
              ">

                <div>

                  <p className="
                    text-[#2f241d]
                    font-medium
                  ">

                    Hydration Reminder

                  </p>

                  <p className="
                    text-sm
                    text-[#8a7d72]
                    mt-1
                  ">

                    Gentle reminders to stay hydrated

                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={
                    profile?.hydration_reminder ||
                    false
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      hydration_reminder:
                        e.target.checked,
                    })
                  }
                  className="
                    w-5
                    h-5
                  "
                />

              </div>

              {profile?.hydration_reminder && (

                <select
                  value={
                    profile?.hydration_frequency ||
                    "1.5_hours"
                  }
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      hydration_frequency:
                        e.target.value,
                    })
                  }
                  className="
                    mt-4
                    w-full
                    border
                    border-[#eadfd2]
                    rounded-2xl
                    px-4
                    py-3
                    outline-none
                  "
                >

                  <option value="1_hour">
                    Every 1 hour
                  </option>

                  <option value="1.5_hours">
                    Every 1.5 hours
                  </option>

                  <option value="2_hours">
                    Every 2 hours
                  </option>

                </select>

              )}

            </div>

          </div>

        </div>

        {/* SAVE */}

        {editMode && (

          <div className="
            mt-8
          ">

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

        )}

        {/* ACCOUNT */}

        <div className="
          mt-8
          bg-white
          border
          border-[#eadfd2]
          rounded-[32px]
          p-7
        ">

          <h2 className="
            text-2xl
            font-semibold
            text-[#3d3027]
            mb-6
          ">

            Account

          </h2>

          <div className="
            space-y-4
          ">

            <button
              className="
                w-full
                bg-[#faf6f2]
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

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919106094119",
                  "_blank"
                )
              }
              className="
                w-full
                bg-[#faf6f2]
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