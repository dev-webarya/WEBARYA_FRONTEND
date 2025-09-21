"use client";

import { useState } from "react";

// The interface remains the same
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

// The InputField component remains the same
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
      <label htmlFor={name} className="text-gray-700 text-sm font-medium mb-1">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="rounded-lg bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
      // ✅ CHANGED: Point fetch to your new API route
      const res = await fetch("/api/schedule-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Try to get a more specific error message from the API response
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to book demo.");
      }

      // ✅ CHANGED: Updated success message
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
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">Schedule a Demo</h2>
      {/* The form structure remains exactly the same */}
      <form onSubmit={handleSubmit} className="grid gap-3" onFocus={handleInputChange}>
        <div className="grid gap-2 md:grid-cols-2">
          <InputField label="First Name" name="firstName" placeholder="John" onChange={handleInputChange} />
          <InputField label="Last Name" name="lastName" placeholder="Doe" onChange={handleInputChange} />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <InputField label="Email" name="email" type="email" placeholder="you@example.com" onChange={handleInputChange} />
          <InputField label="Phone Number" name="phoneNumber" placeholder="+1234567890" onChange={handleInputChange} />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <InputField label="Job Title" name="jobTitle" placeholder="Product Manager" onChange={handleInputChange} />
          <InputField label="Service Interest" name="serviceInterest" placeholder="Web Development" onChange={handleInputChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDetails" className="text-gray-700 text-sm font-medium mb-1">Project Details</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            placeholder="Describe your project..."
            required
            onChange={handleInputChange}
            className="rounded-lg bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="preferredDemoTime" className="text-gray-700 text-sm font-medium mb-1">Preferred Demo Time</label>
          <input
            id="preferredDemoTime"
            name="preferredDemoTime"
            type="datetime-local"
            min={new Date().toISOString().slice(0, 16)}
            required
            onChange={handleInputChange}
            className="rounded-lg bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Booking..." : "Schedule Demo"}
        </button>
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}