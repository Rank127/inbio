"use client";

import { useState } from "react";

const DESCRIBES_YOU = [
  "Waste generator",
  "Investor/Developer",
  "Municipality",
  "Agricultural operation",
  "Industrial facility",
  "Other",
];

const PROBLEMS = [
  "Biomass waste disposal",
  "Revenue from waste",
  "Carbon credits",
  "Energy independence",
  "Regulatory compliance",
  "Other",
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

const VOLUME_PERIODS = ["Day", "Month", "Year"];

const MOISTURE_OPTIONS = [
  "Under 15%",
  "15-25%",
  "25-40%",
  "Over 40%",
  "Unknown",
];

const SUPPLY_OPTIONS = ["Yes", "Seasonal", "Variable", "Unknown"];

const OUTPUT_PRODUCTS = [
  "Biochar",
  "Bio-Oil",
  "Syngas",
  "Biofuels",
  "Carbon Credits",
];

const ENGAGEMENT_MODELS = [
  "iNBIO builds AND operates",
  "iNBIO builds, client operates",
  "iNBIO builds, trains, transfers",
  "Not sure",
];

const SITE_OPTIONS = ["Owned", "Leased", "No", "Not yet"];

const TIMELINE_OPTIONS = [
  "ASAP",
  "6-12 months",
  "1-2 years",
  "2+ years",
  "Exploring",
];

const BUDGET_OPTIONS = [
  "Under $1M",
  "$1-5M",
  "$5-15M",
  "$15-50M",
  "Over $50M",
  "Need help estimating",
];

const GRANT_OPTIONS = [
  "Yes, identified",
  "Yes, need help",
  "No",
  "Not sure",
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
  "Your Situation",
  "Feedstock",
  "Outputs & Model",
  "Project Parameters",
  "Contact",
];

type FormData = {
  describesYou: string;
  problems: string[];
  feedstockTypes: string[];
  feedstockVolume: string;
  feedstockPeriod: string;
  moistureContent: string;
  disposalCost: string;
  yearRoundSupply: string;
  outputProducts: string[];
  engagementModel: string;
  siteStatus: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  timeline: string;
  budget: string;
  seekingGrants: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  referralSource: string;
};

const initial: FormData = {
  describesYou: "",
  problems: [],
  feedstockTypes: [],
  feedstockVolume: "",
  feedstockPeriod: "Day",
  moistureContent: "",
  disposalCost: "",
  yearRoundSupply: "",
  outputProducts: [],
  engagementModel: "",
  siteStatus: "",
  locationCity: "",
  locationState: "",
  locationCountry: "",
  timeline: "",
  budget: "",
  seekingGrants: "",
  name: "",
  title: "",
  company: "",
  email: "",
  phone: "",
  referralSource: "",
};

export default function QuoteEpcPage() {
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

  const toggleArray = (key: "problems" | "feedstockTypes" | "outputProducts", value: string) =>
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
      if (!form.describesYou) errs.describesYou = "Select what best describes you.";
      if (form.problems.length === 0) errs.problems = "Select at least one problem.";
    }
    if (step === 1) {
      if (form.feedstockTypes.length === 0)
        errs.feedstockTypes = "Select at least one feedstock type.";
      if (!form.feedstockVolume) errs.feedstockVolume = "Enter volume available.";
      if (!form.moistureContent) errs.moistureContent = "Select moisture content.";
    }
    if (step === 2) {
      if (form.outputProducts.length === 0)
        errs.outputProducts = "Select at least one output product.";
      if (!form.engagementModel)
        errs.engagementModel = "Select an engagement model.";
      if (!form.siteStatus) errs.siteStatus = "Indicate your site status.";
    }
    if (step === 3) {
      if (!form.locationCity.trim()) errs.locationCity = "City is required.";
      if (!form.locationState.trim()) errs.locationState = "State is required.";
      if (!form.locationCountry.trim())
        errs.locationCountry = "Country is required.";
      if (!form.timeline) errs.timeline = "Select a timeline.";
      if (!form.budget) errs.budget = "Select a budget range.";
    }
    if (step === 4) {
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
        body: JSON.stringify({ type: "epc", ...form }),
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
            We&apos;ve received your plant proposal request. Our engineering
            team will review your project parameters and reach out within two
            business days to schedule an initial consultation.
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
            Request a Plant Proposal
          </h1>
          <p className="mt-3 text-text-light">
            Tell us about your operation and we&apos;ll design the right
            solution.
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
          {/* Step 0 — Your Situation */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <span className={labelCls}>
                  What best describes you?{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {DESCRIBES_YOU.map((d) => (
                    <label key={d} className={radioCls}>
                      <input
                        type="radio"
                        name="describesYou"
                        value={d}
                        checked={form.describesYou === d}
                        onChange={() => set("describesYou", d)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {d}
                    </label>
                  ))}
                </div>
                {errors.describesYou && (
                  <p className={errorCls}>{errors.describesYou}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Problems you&apos;re looking to solve{" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {PROBLEMS.map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        form.problems.includes(p)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary-light"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.problems.includes(p)}
                        onChange={() => toggleArray("problems", p)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text">{p}</span>
                    </label>
                  ))}
                </div>
                {errors.problems && (
                  <p className={errorCls}>{errors.problems}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 1 — Feedstock */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className={labelCls}>
                  Primary feedstock type{" "}
                  <span className="text-red-500">*</span>
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
                <label className={labelCls}>
                  Volume available <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    min="0"
                    value={form.feedstockVolume}
                    onChange={(e) => set("feedstockVolume", e.target.value)}
                    placeholder="e.g. 100"
                    className={inputCls}
                  />
                  <select
                    value={form.feedstockPeriod}
                    onChange={(e) => set("feedstockPeriod", e.target.value)}
                    className={inputCls}
                  >
                    {VOLUME_PERIODS.map((p) => (
                      <option key={p} value={p}>
                        Tons per {p}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.feedstockVolume && (
                  <p className={errorCls}>{errors.feedstockVolume}</p>
                )}
              </div>

              <div>
                <label className={labelCls}>
                  Moisture content <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.moistureContent}
                  onChange={(e) => set("moistureContent", e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select moisture content...</option>
                  {MOISTURE_OPTIONS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                {errors.moistureContent && (
                  <p className={errorCls}>{errors.moistureContent}</p>
                )}
              </div>

              <div>
                <label className={labelCls}>
                  Current disposal cost per ton{" "}
                  <span className="text-text-lighter">(optional)</span>
                </label>
                <input
                  type="text"
                  value={form.disposalCost}
                  onChange={(e) => set("disposalCost", e.target.value)}
                  placeholder="e.g. $45/ton"
                  className={inputCls}
                />
              </div>

              <div>
                <span className={labelCls}>Year-round supply?</span>
                <div className="flex flex-wrap gap-4 mt-2">
                  {SUPPLY_OPTIONS.map((s) => (
                    <label key={s} className={radioCls}>
                      <input
                        type="radio"
                        name="yearRoundSupply"
                        value={s}
                        checked={form.yearRoundSupply === s}
                        onChange={() => set("yearRoundSupply", s)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Outputs & Model */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className={labelCls}>
                  Products wanted <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                  {OUTPUT_PRODUCTS.map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        form.outputProducts.includes(p)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary-light"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.outputProducts.includes(p)}
                        onChange={() => toggleArray("outputProducts", p)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text">{p}</span>
                    </label>
                  ))}
                </div>
                {errors.outputProducts && (
                  <p className={errorCls}>{errors.outputProducts}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Engagement model <span className="text-red-500">*</span>
                </span>
                <div className="space-y-2 mt-2">
                  {ENGAGEMENT_MODELS.map((m) => (
                    <label key={m} className={radioCls}>
                      <input
                        type="radio"
                        name="engagementModel"
                        value={m}
                        checked={form.engagementModel === m}
                        onChange={() => set("engagementModel", m)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {m}
                    </label>
                  ))}
                </div>
                {errors.engagementModel && (
                  <p className={errorCls}>{errors.engagementModel}</p>
                )}
              </div>

              <div>
                <span className={labelCls}>
                  Site identified? <span className="text-red-500">*</span>
                </span>
                <div className="flex flex-wrap gap-4 mt-2">
                  {SITE_OPTIONS.map((s) => (
                    <label key={s} className={radioCls}>
                      <input
                        type="radio"
                        name="siteStatus"
                        value={s}
                        checked={form.siteStatus === s}
                        onChange={() => set("siteStatus", s)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {s}
                    </label>
                  ))}
                </div>
                {errors.siteStatus && (
                  <p className={errorCls}>{errors.siteStatus}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3 — Project Parameters */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="block text-sm font-semibold text-text mb-3">
                  Project Location <span className="text-red-500">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelCls}>City</label>
                    <input
                      type="text"
                      value={form.locationCity}
                      onChange={(e) => set("locationCity", e.target.value)}
                      placeholder="City"
                      className={inputCls}
                    />
                    {errors.locationCity && (
                      <p className={errorCls}>{errors.locationCity}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelCls}>State</label>
                    <input
                      type="text"
                      value={form.locationState}
                      onChange={(e) => set("locationState", e.target.value)}
                      placeholder="State"
                      className={inputCls}
                    />
                    {errors.locationState && (
                      <p className={errorCls}>{errors.locationState}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelCls}>Country</label>
                    <input
                      type="text"
                      value={form.locationCountry}
                      onChange={(e) => set("locationCountry", e.target.value)}
                      placeholder="Country"
                      className={inputCls}
                    />
                    {errors.locationCountry && (
                      <p className={errorCls}>{errors.locationCountry}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className={labelCls}>
                  Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.timeline}
                  onChange={(e) => set("timeline", e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select timeline...</option>
                  {TIMELINE_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className={errorCls}>{errors.timeline}</p>
                )}
              </div>

              <div>
                <label className={labelCls}>
                  Budget range <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => set("budget", e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select budget range...</option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                {errors.budget && <p className={errorCls}>{errors.budget}</p>}
              </div>

              <div>
                <span className={labelCls}>
                  Seeking grants or incentives?
                </span>
                <div className="flex flex-wrap gap-4 mt-2">
                  {GRANT_OPTIONS.map((g) => (
                    <label key={g} className={radioCls}>
                      <input
                        type="radio"
                        name="seekingGrants"
                        value={g}
                        checked={form.seekingGrants === g}
                        onChange={() => set("seekingGrants", g)}
                        className="w-4 h-4 text-primary focus:ring-primary border-border"
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4 — Contact */}
          {step === 4 && (
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
                {submitting ? "Submitting..." : "Submit Proposal Request"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
