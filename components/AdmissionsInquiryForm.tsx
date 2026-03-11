"use client";

import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-sm border border-slate/20 bg-white p-6 shadow-card">
      <h2 className="font-heading text-3xl text-navy">Admission Inquiry</h2>
      <p className="mt-2 text-sm text-slate">Share your academic profile and branch preference. Our team will contact you with the next steps.</p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">Name</span>
          <input
            {...register("name", { required: "Name is required" })}
            className="h-12 w-full rounded-none border border-slate-300 px-4 outline-none focus:border-navy"
            placeholder="Enter full name"
          />
          {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name.message}</span> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">Branch Preference</span>
          <select
            {...register("branchPreference", { required: "Branch preference is required" })}
            className="h-12 w-full rounded-none border border-slate-300 px-4 outline-none focus:border-navy"
            defaultValue=""
          >
            <option value="" disabled>
              Select preferred branch
            </option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="AIML">AIML</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
          </select>
          {errors.branchPreference ? (
            <span className="mt-1 block text-xs text-red-600">{errors.branchPreference.message}</span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">SSC/HSC Marks</span>
          <input
            {...register("marks", { required: "Marks are required" })}
            className="h-12 w-full rounded-none border border-slate-300 px-4 outline-none focus:border-navy"
            placeholder="Example: SSC 89%, HSC 82%"
          />
          {errors.marks ? <span className="mt-1 block text-xs text-red-600">{errors.marks.message}</span> : null}
        </label>
      </div>

      <button type="submit" className="mt-6 h-12 rounded-none bg-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-[#173d69]">
        Submit Inquiry
      </button>

      {isSubmitSuccessful ? <p className="mt-3 text-sm font-medium text-gold">Inquiry captured successfully.</p> : null}
    </form>
  );
}
