"use client";

import { useForm } from "react-hook-form";
import { IconCheck, IconSend } from "@tabler/icons-react";

type FormValues = {
  name: string;
  branchPreference: string;
  marks: string;
};

export function AdmissionsInquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormValues>();

  const onSubmit = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-black/8 bg-white p-8 sm:p-10 shadow-card"
    >
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-crimson/5 text-crimson text-xs font-bold uppercase tracking-wider mb-3">
        Direct Admission Desk
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-dark">Admission Inquiry</h2>
      <p className="mt-2 text-xs sm:text-sm text-slate leading-relaxed">
        Share your academic profile and branch preference. Our admissions facilitation team will contact you with CAP guidance and seat details.
      </p>

      <div className="mt-8 space-y-4">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Full Name</span>
          <input
            {...register("name", { required: "Name is required" })}
            className="h-12 w-full border border-black/15 bg-slate-50 px-4 text-sm text-slate outline-none focus:border-navy focus:bg-white transition-all"
            placeholder="Enter student full name"
          />
          {errors.name ? <span className="mt-1 block text-xs font-medium text-crimson">{errors.name.message}</span> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Branch Preference</span>
          <select
            {...register("branchPreference", { required: "Branch preference is required" })}
            className="h-12 w-full border border-black/15 bg-slate-50 px-4 text-sm text-slate outline-none focus:border-navy focus:bg-white transition-all"
            defaultValue=""
          >
            <option value="" disabled>
              Select preferred diploma branch
            </option>
            <option value="Computer Engineering">Computer Engineering (120 Seats)</option>
            <option value="AIML">AI &amp; Machine Learning (120 Seats)</option>
            <option value="Civil Engineering">Civil Engineering (60 Seats)</option>
            <option value="Mechanical Engineering">Mechanical Engineering (60 Seats)</option>
          </select>
          {errors.branchPreference ? (
            <span className="mt-1 block text-xs font-medium text-crimson">{errors.branchPreference.message}</span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">SSC / HSC / ITI Marks (%)</span>
          <input
            {...register("marks", { required: "Marks are required" })}
            className="h-12 w-full border border-black/15 bg-slate-50 px-4 text-sm text-slate outline-none focus:border-navy focus:bg-white transition-all"
            placeholder="Example: SSC 85%, HSC 78%"
          />
          {errors.marks ? <span className="mt-1 block text-xs font-medium text-crimson">{errors.marks.message}</span> : null}
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full h-12 bg-crimson hover:bg-crimson-hover px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-sm inline-flex items-center justify-center gap-2 active:scale-[0.98]"
      >
        <IconSend size={16} />
        <span>Submit Admission Inquiry</span>
      </button>

      {isSubmitSuccessful && (
        <div className="mt-4 p-3 bg-gold/10 border border-gold/20 flex items-center gap-2 text-xs font-bold text-navy">
          <IconCheck size={16} className="text-gold shrink-0" />
          <span>Inquiry captured successfully! Our team will reach out shortly.</span>
        </div>
      )}
    </form>
  );
}
