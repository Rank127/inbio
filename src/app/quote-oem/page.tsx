"use client";

import { useState } from "react";

const ORG_TYPES = [
  "Waste management",
  "Energy company",
  "Agricultural cooperative",
  "Government",
  "Distributor",
  "Investor",
  "Research",
  "Other",
];

const CAPACITIES = [
  "5 TPD",
  "10 TPD",
  "25 TPD",
  "50 TPD",
  "75 TPD",
  "Multiple units",
];

const FEEDSTOCK_TYPES = [
  "Wood waste",
  "Agricultural residues",
  "Poultry litter",
  "Nut shells",
  "Sawmill waste",
  "MSW",
  "Biosolids",
  "Other",
];

const TARGET_PRODUCTS = ["Biochar", "Bio-Oil", "Syngas", "All three"];

const FEEDSTOCK_PREP_OPTIONS = [
  "Yes, drying + sizing",
  "Sizing only",
  "No",
  "Not sure",
];

const INSTALL_OPTIONS = [
  "Full install + commission",
  "Commission only",
  "Self-install",
  "Not sure",
];

const TRAINING_OPTIONS = ["Yes", "No", "Already trained"];

const MAINTENANCE_OPTIONS = [
  "Service contract",
  "Parts only",
  "No",
  "Not sure",
];

const BUDGET_OPTIONS = [
  "Under $500K",
  "$500K-1M",
  "$1-3M",
  "$3-5M",
  "Over $5M",
  "Need help estimating",
];

const DELIVERY_TIMELINES = [
  "Within 6 months",
  "6-12 months",
  "12-18 months",
  "18+ months",
  "Flexible",
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
  "Your Operation",
  "System Requirements",
  "Support Needs",
  "Budget, Timeline & Contact",
];

type FormData = {
  orgType: string;
  deploymentLocation: string;
  capacity: string;
  feedstockTypes: string[];
  targetProducts: string[];
  feedstockPrep: string;
  installSupport: string;
  operatorTraining: string;
  maintenanceContract: string;
  budget: string;
  deliveryTimeline: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  referralSource: string;
};

const initial: FormData = {
  orgType: "",
  deploymentLocation: "",
  capacity: "",
  feedstockTypes: [],
  targetProducts: [],
  feedstockPrep: "",
  installSupport: "",
  operatorTraining: "",
  maintenanceContract: "",
  budget: "",
  deliveryTimeline: "",
  name: "",
  title: "",
  company: "",
  email: "",
  phone: "",
  referralSource: "",
};

export default function QuoteOemPage() {
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

  const toggleArray = (key: "feedstockTypes" | "targetProducts", value: string) =>
    setForm((prev) => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(value)
        ? (prev[key] as string[]).filter((x) => x !== value)
        : [...(prev[key] as string[]), value],
    }));

  /* ---- validation ---- */
  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (step === 0) {
      if (!form.orgType) errs.orgType = "Select your organization type.";
      if (!form.deploymentLocation.trim())
        errs.deploymentLocation = "Deployment location is required.";
    }
    if (step === 1) {
      if (!form.capacity) errs.capacity = "Select a desired capacity.";
      if (form.feedstockTypes.length === 0)
        errs.feedstockTypes = "Select at least one feedstock type.";
      if (form.targetProducts.length === 0)
        errs.targetProducts = "Select at least one target product.";
    }
    if (step === 2) {
      if (!form.installSupport)
        errs.installSupport = "Select an installation option.";
      if (!form.operatorTraining)
        errs.operatorTraining = "Select a training option.";
      if (!form.maintenanceContract)
        errs.maintenanceContract = "Select a maintenance option.";
    }
    if (step === 3) {
      if (!form.budget) errs.budget = "Select a budget range.";
      if (!form.deliveryTimeline)
        errs.deliveryTimeline = "Select a delivery timeline.";
      if (!form.name.trim()) errs.name = "Name is required.";
      if (!form.title.trim()) errs.title = "Title is required.";
      if (!form.company.trim()) errs.company = "Company is required.";
      if (!form.email.trim()) errs.email = "Email is required.";
      else if (!validateEmail(form.email))
        errs.email = "Enter a valid email address.";
      if (!form.phone.trim()) errs.phone = "Phone is required.";
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
        body: JSON.stringify({ type: "oem", ...form }),
      });
      setSubmitted(true);
    } catch {
      /* handle later */
    } finally {
      setSubmitting(false);
    }
  };

  /* ---- shared styles ---- */
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
            We&apos;ve received your equipment quote request. Our sales
            engineering team will review your requirements and respond within
            two business days with system specifications and pricing.
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
            Request an Equipment Quote
          </h1>
          <p className="mt-3 text-text-light">
            Tell us about your operation and we&apos;ll spec the right system.
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
          {/* Step 0 — Your Operation */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <span className={labelCls}>
                  Organization type <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {ORG_TYPES.map((o) => (
                    <label key={o} className={radioCls}>
                      <input
                        type="radio"
                        name="orgType"
                        value={o}
                        checked={form.orgType === o}
                        onChange={() => set("orgType", o)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {o}
                    </label>
                  ))}
                </div>
                {errors.orgType && (
                  <p className={errorCls}>{errors.orgType}</p>
                )}
              </div>

              <div>
                <label className={labelCls}>
                  Deployment location (Country / Region){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.deploymentLocation}
                  onChange={(e) => set("deploymentLocation", e.target.value)}
                  placeholder="e.g. United States, Southeast Asia"
                  className={inputCls}
                />
                {errors.deploymentLocation && (
                  <p className={errorCls}>{errors.deploymentLocation}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 1 — System Requirements */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className={labelCls}>
                  Desired capacity <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.capacity}
                  onChange={(e) => set("capacity", e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select capacity...</option>
                  {CAPACITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.capacity && (
                  <p className={errorCls}>{errors.capacity}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Primary feedstock <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {FEEDSTOCK_TYPES.map((f) => (
                    <label
                      key={f}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        form.feedstockTypes.includes(f)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary-light"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.feedstockTypes.includes(f)}
                        onChange={() => toggleArray("feedstockTypes", f)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text">{f}</span>
                    </label>
                  ))}
                </div>
                {errors.feedstockTypes && (
                  <p className={errorCls}>{errors.feedstockTypes}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Target products <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {TARGET_PRODUCTS.map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        form.targetProducts.includes(p)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary-light"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.targetProducts.includes(p)}
                        onChange={() => toggleArray("targetProducts", p)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text">{p}</span>
                    </label>
                  ))}
                </div>
                {errors.targetProducts && (
                  <p className={errorCls}>{errors.targetProducts}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Need feedstock prep equipment?
                </span>
                <div className="space-y-2 mt-2">
                  {FEEDSTOCK_PREP_OPTIONS.map((o) => (
                    <label key={o} className={radioCls}>
                      <input
                        type="radio"
                        name="feedstockPrep"
                        value={o}
                        checked={form.feedstockPrep === o}
                        onChange={() => set("feedstockPrep", o)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {o}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Support Needs */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className={labelCls}>
                  Installation support?{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {INSTALL_OPTIONS.map((o) => (
                    <label key={o} className={radioCls}>
                      <input
                        type="radio"
                        name="installSupport"
                        value={o}
                        checked={form.installSupport === o}
                        onChange={() => set("installSupport", o)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {o}
                    </label>
                  ))}
                </div>
                {errors.installSupport && (
                  <p className={errorCls}>{errors.installSupport}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Operator training?{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {TRAINING_OPTIONS.map((o) => (
                    <label key={o} className={radioCls}>
                      <input
                        type="radio"
                        name="operatorTraining"
                        value={o}
                        checked={form.operatorTraining === o}
                        onChange={() => set("operatorTraining", o)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {o}
                    </label>
                  ))}
                </div>
                {errors.operatorTraining && (
                  <p className={errorCls}>{errors.operatorTraining}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Maintenance contract?{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {MAINTENANCE_OPTIONS.map((o) => (
                    <label key={o} className={radioCls}>
                      <input
                        type="radio"
                        name="maintenanceContract"
                        value={o}
                        checked={form.maintenanceContract === o}
                        onChange={() => set("maintenanceContract", o)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {o}
                    </label>
                  ))}
                </div>
                {errors.maintenanceContract && (
                  <p className={errorCls}>{errors.maintenanceContract}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3 — Budget, Timeline & Contact */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>
                    Budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => set("budget", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select budget...</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className={errorCls}>{errors.budget}</p>
                  )}
                </div>
                <div>
                  <label className={labelCls}>
                    Delivery timeline <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.deliveryTimeline}
                    onChange={(e) => set("deliveryTimeline", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select timeline...</option>
                    {DELIVERY_TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.deliveryTimeline && (
                    <p className={errorCls}>{errors.deliveryTimeline}</p>
                  )}
                </div>
              </div>

              <hr className="border-border" />

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
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => set("title", e.target.value)}
                    placeholder="Your title"
                    className={inputCls}
                  />
                  {errors.title && <p className={errorCls}>{errors.title}</p>}
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Company or organization name"
                  className={inputCls}
                />
                {errors.company && (
                  <p className={errorCls}>{errors.company}</p>
                )}
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
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className={inputCls}
                  />
                  {errors.phone && <p className={errorCls}>{errors.phone}</p>}
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
                {submitting ? "Submitting..." : "Submit Equipment Request"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
