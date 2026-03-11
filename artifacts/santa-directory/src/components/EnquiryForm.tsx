"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface EnquiryFormProps {
  type: "profile" | "join" | "general";
  santaSlug?: string;
  santaName?: string;
}

export default function EnquiryForm({
  type,
  santaSlug,
  santaName,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    enquiryType: type === "general" ? "customer" : type,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: formData.enquiryType,
          santaSlug: santaSlug || null,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", message: "", enquiryType: formData.enquiryType });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Enquiry Sent
        </h3>
        <p className="text-green-700">
          {type === "profile"
            ? `Your message has been sent. ${santaName || "The performer"} will be in touch shortly.`
            : "Thank you for your enquiry. We'll get back to you as soon as possible."}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {type === "general" && (
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Enquiry Type
          </label>
          <select
            value={formData.enquiryType}
            onChange={(e) =>
              setFormData({ ...formData, enquiryType: e.target.value })
            }
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
          >
            <option value="customer">Customer Enquiry</option>
            <option value="join">Santa Listing Enquiry</option>
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
          placeholder="Optional"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">
          Message *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand resize-none"
          placeholder={
            type === "profile"
              ? `Tell ${santaName || "the performer"} about your event or requirements...`
              : type === "join"
                ? "Tell us about your experience and what you offer..."
                : "How can we help?"
          }
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle size={16} />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-brand hover:bg-brand-dark disabled:opacity-60 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
      >
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
