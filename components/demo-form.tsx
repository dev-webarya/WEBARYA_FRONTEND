"use client";

import { useState } from "react";

interface DemoScheduleRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  serviceInterest: string;
  projectDetails: string;
  preferredDemoTime: string;
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  onChange,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange: () => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 text-sm font-medium mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
      />
    </div>
  );
}

export function DemoForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(form);

    const payload: DemoScheduleRequest = {
      firstName: String(formData.get("firstName")),
      lastName: String(formData.get("lastName")),
      email: String(formData.get("email")),
      phoneNumber: String(formData.get("phoneNumber")),
      jobTitle: String(formData.get("jobTitle")),
      serviceInterest: String(formData.get("serviceInterest")),
      projectDetails: String(formData.get("projectDetails")),
      preferredDemoTime: String(formData.get("preferredDemoTime")),
    };

    try {
      const res = await fetch("/api/schedule-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to book demo.");
      }

      setSuccess("🎉 Demo booked! An acknowledgment has been sent to your email.");
      form.reset();
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = () => {
    if (success) setSuccess(null);
    if (error) setError(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4" onFocus={handleInputChange}>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField label="First Name" name="firstName" placeholder="John" onChange={handleInputChange} />
          <InputField label="Last Name" name="lastName" placeholder="Doe" onChange={handleInputChange} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField label="Email" name="email" type="email" placeholder="you@example.com" onChange={handleInputChange} />
          <InputField label="Phone Number" name="phoneNumber" placeholder="+91 9876543210" onChange={handleInputChange} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField label="Job Title" name="jobTitle" placeholder="Product Manager" onChange={handleInputChange} />
          <InputField label="Service Interest" name="serviceInterest" placeholder="Web Development" onChange={handleInputChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDetails" className="text-gray-700 text-sm font-medium mb-1.5">Project Details</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            placeholder="Describe your project..."
            required
            rows={3}
            onChange={handleInputChange}
            className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all resize-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="preferredDemoTime" className="text-gray-700 text-sm font-medium mb-1.5">Preferred Demo Time</label>
          <input
            id="preferredDemoTime"
            name="preferredDemoTime"
            type="datetime-local"
            min={new Date().toISOString().slice(0, 16)}
            required
            onChange={handleInputChange}
            className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3.5 text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Booking..." : "Schedule Demo →"}
        </button>
        {success && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 border border-green-200">
            <span className="text-green-600 text-sm">{success}</span>
          </div>
        )}
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200">
            <span className="text-red-600 text-sm">{error}</span>
          </div>
        )}
      </form>
    </div>
  );
}