"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function InvestEmailForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim() || undefined,
          source: "invest-page",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "You're subscribed!");
        setEmail("");
        setFirstName("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text mb-2">You&apos;re In!</h3>
        <p className="text-text-light">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <input
          type="text"
          placeholder="First name (optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-lighter focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-[2] px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-lighter focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Subscribing..." : "Get Investor Updates"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600 text-center">{message}</p>
      )}
      <p className="mt-4 text-xs text-text-lighter text-center leading-relaxed">
        We respect your privacy. Unsubscribe anytime. We&apos;ll only send
        campaign updates and company news — no spam, ever. CAN-SPAM compliant.
      </p>
    </form>
  );
}
