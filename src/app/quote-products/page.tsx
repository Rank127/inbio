"use client";

import { useState } from "react";

// NOTE: metadata must be exported from a Server Component.
// Move this to a layout.tsx in this folder if you need the title in <head>.
// For now, we set document.title via useEffect or a parent layout.
// See quote-products/layout.tsx for the metadata export.

const PRODUCTS = [
  "Biochar",
  "Bio-Oil",
  "Syngas",
  "Renewable Diesel",
  "Other",
] as const;

const BIOCHAR_APPLICATIONS = [
  "Agriculture",
  "Stormwater Filtration",
  "Remediation",
  "Concrete/Asphalt",
  "Composting",
  "Livestock Bedding",
  "Carbon Credits",
  "Other",
];

const BIOOIL_APPLICATIONS = [
  "Industrial Heat",
  "CHP",
  "Transportation Fuel",
  "Backup Power",
  "Asphalt Binder",
  "Other",
];

const UNITS = ["Tons", "Cubic Yards", "Gallons", "Barrels"];
const PERIODS = ["Day", "Month", "Year"];

const TIMELINES = [
  "Immediately",
  "Within 3 months",
  "Within 6 months",
  "Within 12 months",
  "Just researching",
];

const ORDER_TYPES = ["One-time/Spot", "Recurring/Contract", "Not sure"];

const FUELS_REPLACED = [
  "Heavy Fuel Oil",
  "Natural Gas",
  "Diesel",
  "Coal",
  "None",
  "Other",
];

const REFERRAL_SOURCES = [
  "Google Search",
  "Referral",
  "Trade Show",
  "LinkedIn",
  "Blog/Article",
  "Other",
];

const STEP_LABELS = [
  "What do you need?",
  "Volume & Timing",
  "Specifications",
  "Contact Info",
];

type FormData = {
  products: string[];
  primaryApplication: string;
  problemToSolve: string;
  volume: string;
  unit: string;
  period: string;
  howSoon: string;
  orderType: string;
  ibiCertification: string;
  carbonCredits: string;
  biocharRequirements: string;
  fuelReplaced: string;
  biofuelRequirements: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  referralSource: string;
};

const initial: FormData = {
  products: [],
  primaryApplication: "",
  problemToSolve: "",
  volume: "",
  unit: "Tons",
  period: "Month",
  howSoon: "",
  orderType: "",
  ibiCertification: "",
  carbonCredits: "",
  biocharRequirements: "",
  fuelReplaced: "",
  biofuelRequirements: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  referralSource: "",
};

export default function QuoteProductsPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ---- helpers ---- */
  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleProduct = (p: string) =>
    setForm((prev) => ({
      ...prev,
      products: prev.products.includes(p)
        ? prev.products.filter((x) => x !== p)
        : [...prev.products, p],
    }));

  const hasBiochar = form.products.includes("Biochar");
  const hasBioOil =
    form.products.includes("Bio-Oil") ||
    form.products.includes("Renewable Diesel");

  const applicationOptions = hasBiochar
    ? BIOCHAR_APPLICATIONS
    : hasBioOil
      ? BIOOIL_APPLICATIONS
      : [];

  /* ---- validation ---- */
  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (step === 0) {
      if (form.products.length === 0)
        errs.products = "Select at least one product.";
    }
    if (step === 1) {
      if (!form.volume) errs.volume = "Enter estimated volume.";
      if (!form.howSoon) errs.howSoon = "Select a timeline.";
      if (!form.orderType) errs.orderType = "Select order type.";
    }
    // Step 2 — specs — all optional
    if (step === 3) {
      if (!form.name.trim()) errs.name = "Name is required.";
      if (!form.company.trim()) errs.company = "Company is required.";
      if (!form.email.trim()) errs.email = "Email is required.";
      else if (!validateEmail(form.email))
        errs.email = "Enter a valid email address.";
      if (!form.city.trim()) errs.city = "City is required.";
      if (!form.state.trim()) errs.state = "State is required.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validate()) setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "product", ...form }),
      });
      setSubmitted(true);
    } catch {
      /* handle later */
    } finally {
      setSubmitting(false);
    }
  };

  /* ---- shared input styles ---- */
  const inputCls =
    "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text placeholder:text-text-lighter focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors";
  const labelCls = "block text-sm font-medium text-text mb-1.5";
  const errorCls = "text-sm text-red-600 mt-1";
  const radioCls =
    "flex items-center gap-2.5 cursor-pointer text-sm text-text";

  /* ---- success ---- */
  if (submitted) {
    return (
      <section className="py-20 bg-surface min-h-[60vh] flex items-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-text">
            Thank You, {form.name}!
          </h1>
          <p className="mt-4 text-text-light leading-relaxed">
            We&apos;ve received your product quote request. A member of our team
            will review your requirements and get back to you within one business
            day.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  /* ---- render ---- */
  return (
    <section className="py-12 sm:py-16 bg-surface min-h-[80vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            Request a Product Quote
          </h1>
          <p className="mt-3 text-text-light">
            Tell us what you need and we&apos;ll provide a custom quote.
          </p>
        </div>

        {/* Step indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className="flex flex-col items-center flex-1">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    i < step
                      ? "bg-primary text-white"
                      : i === step
                        ? "bg-accent text-white"
                        : "bg-border text-text-light"
                  }`}
                >
                  {i < step ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`mt-1.5 text-xs text-center hidden sm:block ${
                    i <= step ? "text-text font-medium" : "text-text-lighter"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="relative h-1.5 bg-border rounded-full mt-3">
            <div
              className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-500"
              style={{
                width: `${(step / (STEP_LABELS.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-xl border border-border shadow-sm p-6 sm:p-8">
          {/* Step 0 — What do you need? */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <span className={labelCls}>
                  Products you&apos;re interested in{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {PRODUCTS.map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        form.products.includes(p)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary-light"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.products.includes(p)}
                        onChange={() => toggleProduct(p)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text">{p}</span>
                    </label>
                  ))}
                </div>
                {errors.products && (
                  <p className={errorCls}>{errors.products}</p>
                )}
              </div>

              {applicationOptions.length > 0 && (
                <div>
                  <label className={labelCls}>Primary application</label>
                  <select
                    value={form.primaryApplication}
                    onChange={(e) => set("primaryApplication", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select an application...</option>
                    {applicationOptions.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className={labelCls}>
                  What problem are you trying to solve?{" "}
                  <span className="text-text-lighter">(optional)</span>
                </label>
                <textarea
                  value={form.problemToSolve}
                  onChange={(e) => set("problemToSolve", e.target.value)}
                  rows={3}
                  placeholder="Describe the challenge you're facing..."
                  className={inputCls}
                />
              </div>
            </div>
          )}

          {/* Step 1 — Volume & Timing */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className={labelCls}>
                  Estimated volume needed{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    min="0"
                    value={form.volume}
                    onChange={(e) => set("volume", e.target.value)}
                    placeholder="e.g. 50"
                    className={inputCls}
                  />
                  <select
                    value={form.unit}
                    onChange={(e) => set("unit", e.target.value)}
                    className={inputCls}
                  >
                    {UNITS.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                  <select
                    value={form.period}
                    onChange={(e) => set("period", e.target.value)}
                    className={inputCls}
                  >
                    {PERIODS.map((p) => (
                      <option key={p} value={p}>
                        per {p}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.volume && <p className={errorCls}>{errors.volume}</p>}
              </div>

              <div>
                <span className={labelCls}>
                  How soon do you need this?{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {TIMELINES.map((t) => (
                    <label key={t} className={radioCls}>
                      <input
                        type="radio"
                        name="howSoon"
                        value={t}
                        checked={form.howSoon === t}
                        onChange={() => set("howSoon", t)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {t}
                    </label>
                  ))}
                </div>
                {errors.howSoon && (
                  <p className={errorCls}>{errors.howSoon}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  One-time or ongoing? <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {ORDER_TYPES.map((t) => (
                    <label key={t} className={radioCls}>
                      <input
                        type="radio"
                        name="orderType"
                        value={t}
                        checked={form.orderType === t}
                        onChange={() => set("orderType", t)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {t}
                    </label>
                  ))}
                </div>
                {errors.orderType && (
                  <p className={errorCls}>{errors.orderType}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2 — Specifications (conditional) */}
          {step === 2 && (
            <div className="space-y-6">
              {hasBiochar && (
                <>
                  <h3 className="text-lg font-semibold text-text">
                    Biochar Specifications
                  </h3>
                  <div>
                    <span className={labelCls}>
                      Do you need IBI/EBC certification?
                    </span>
                    <div className="flex gap-6 mt-2">
                      {["Yes", "No", "Not sure"].map((v) => (
                        <label key={v} className={radioCls}>
                          <input
                            type="radio"
                            name="ibiCertification"
                            value={v}
                            checked={form.ibiCertification === v}
                            onChange={() => set("ibiCertification", v)}
                            className="w-4 h-4 text-primary focus:ring-primary border-border"
                          />
                          {v}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className={labelCls}>
                      Are you pursuing carbon credits?
                    </span>
                    <div className="flex gap-6 mt-2">
                      {["Yes", "No", "Not sure"].map((v) => (
                        <label key={v} className={radioCls}>
                          <input
                            type="radio"
                            name="carbonCredits"
                            value={v}
                            checked={form.carbonCredits === v}
                            onChange={() => set("carbonCredits", v)}
                            className="w-4 h-4 text-primary focus:ring-primary border-border"
                          />
                          {v}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Specific requirements?{" "}
                      <span className="text-text-lighter">(optional)</span>
                    </label>
                    <textarea
                      value={form.biocharRequirements}
                      onChange={(e) =>
                        set("biocharRequirements", e.target.value)
                      }
                      rows={3}
                      placeholder="Particle size, pH range, fixed carbon %, etc."
                      className={inputCls}
                    />
                  </div>
                </>
              )}

              {hasBioOil && (
                <>
                  <h3 className="text-lg font-semibold text-text">
                    Bio-Oil / Biofuel Specifications
                  </h3>
                  <div>
                    <label className={labelCls}>
                      Current fuel being replaced
                    </label>
                    <select
                      value={form.fuelReplaced}
                      onChange={(e) => set("fuelReplaced", e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Select current fuel...</option>
                      {FUELS_REPLACED.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Specific requirements?{" "}
                      <span className="text-text-lighter">(optional)</span>
                    </label>
                    <textarea
                      value={form.biofuelRequirements}
                      onChange={(e) =>
                        set("biofuelRequirements", e.target.value)
                      }
                      rows={3}
                      placeholder="BTU requirements, viscosity, sulfur limits, etc."
                      className={inputCls}
                    />
                  </div>
                </>
              )}

              {!hasBiochar && !hasBioOil && (
                <div className="text-center py-8">
                  <p className="text-text-light">
                    No additional specifications needed for your selected
                    products. You can proceed to the next step.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3 — Contact Info */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your full name"
                    className={inputCls}
                  />
                  {errors.name && <p className={errorCls}>{errors.name}</p>}
                </div>
                <div>
                  <label className={labelCls}>
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="Company name"
                    className={inputCls}
                  />
                  {errors.company && (
                    <p className={errorCls}>{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                  {errors.email && <p className={errorCls}>{errors.email}</p>}
                </div>
                <div>
                  <label className={labelCls}>
                    Phone{" "}
                    <span className="text-text-lighter">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <span className="block text-sm font-semibold text-text mb-3">
                  Delivery Location <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>City</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => set("city", e.target.value)}
                      placeholder="City"
                      className={inputCls}
                    />
                    {errors.city && <p className={errorCls}>{errors.city}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>State</label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) => set("state", e.target.value)}
                      placeholder="State"
                      className={inputCls}
                    />
                    {errors.state && (
                      <p className={errorCls}>{errors.state}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  How did you hear about iNBIO?
                </label>
                <select
                  value={form.referralSource}
                  onChange={(e) => set("referralSource", e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select one...</option>
                  {REFERRAL_SOURCES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {step > 0 ? (
              <button
                type="button"
                onClick={prev}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-light hover:text-text border border-border rounded-lg hover:bg-surface transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            {step < STEP_LABELS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              >
                Continue
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
