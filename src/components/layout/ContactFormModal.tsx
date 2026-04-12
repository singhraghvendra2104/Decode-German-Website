"use client";

import { useState } from "react";
import { Modal } from "@mantine/core";

interface ContactFormModalProps {
  opened: boolean;
  onClose: () => void;
}

const germanLevels = [
  "Complete Beginner",
  "A1",
  "A2",
  "B1",
  "B2",
  "Not sure",
];

const interests = [
  "A1 Course",
  "A2 Course",
  "B1 Course",
  "B2 Course",
  "Exam Preparation",
  "Revision Course",
  "Crash Course",
  "Just exploring",
];

const countryCodes = [
  { value: "+49", label: "\u{1F1E9}\u{1F1EA} +49 (DE)" },
  { value: "+91", label: "\u{1F1EE}\u{1F1F3} +91 (IN)" },
  { value: "+1", label: "\u{1F1FA}\u{1F1F8} +1 (US)" },
  { value: "+44", label: "\u{1F1EC}\u{1F1E7} +44 (GB)" },
  { value: "+43", label: "\u{1F1E6}\u{1F1F9} +43 (AT)" },
  { value: "+41", label: "\u{1F1E8}\u{1F1ED} +41 (CH)" },
  { value: "+33", label: "\u{1F1EB}\u{1F1F7} +33 (FR)" },
  { value: "+31", label: "\u{1F1F3}\u{1F1F1} +31 (NL)" },
  { value: "+39", label: "\u{1F1EE}\u{1F1F9} +39 (IT)" },
  { value: "+34", label: "\u{1F1EA}\u{1F1F8} +34 (ES)" },
  { value: "+48", label: "\u{1F1F5}\u{1F1F1} +48 (PL)" },
  { value: "+90", label: "\u{1F1F9}\u{1F1F7} +90 (TR)" },
  { value: "+86", label: "\u{1F1E8}\u{1F1F3} +86 (CN)" },
  { value: "+81", label: "\u{1F1EF}\u{1F1F5} +81 (JP)" },
  { value: "+82", label: "\u{1F1F0}\u{1F1F7} +82 (KR)" },
  { value: "+55", label: "\u{1F1E7}\u{1F1F7} +55 (BR)" },
  { value: "+61", label: "\u{1F1E6}\u{1F1FA} +61 (AU)" },
  { value: "+971", label: "\u{1F1E6}\u{1F1EA} +971 (AE)" },
  { value: "+966", label: "\u{1F1F8}\u{1F1E6} +966 (SA)" },
  { value: "+92", label: "\u{1F1F5}\u{1F1F0} +92 (PK)" },
  { value: "+880", label: "\u{1F1E7}\u{1F1E9} +880 (BD)" },
  { value: "+94", label: "\u{1F1F1}\u{1F1F0} +94 (LK)" },
  { value: "+977", label: "\u{1F1F3}\u{1F1F5} +977 (NP)" },
  { value: "+234", label: "\u{1F1F3}\u{1F1EC} +234 (NG)" },
  { value: "+254", label: "\u{1F1F0}\u{1F1EA} +254 (KE)" },
  { value: "+27", label: "\u{1F1FF}\u{1F1E6} +27 (ZA)" },
];

const inputClass =
  "w-full bg-transparent border-0 border-b border-charcoal/15 focus:border-primary focus:ring-0 font-[var(--font-serif)] text-base md:text-lg italic py-2 px-0 placeholder:text-charcoal/20 text-charcoal outline-none transition-colors";

const selectClass =
  "w-full bg-transparent border-0 border-b border-charcoal/15 focus:border-primary focus:ring-0 font-[var(--font-serif)] text-base md:text-lg italic py-2 px-0 text-charcoal outline-none appearance-none cursor-pointer transition-colors";

const labelClass =
  "uppercase tracking-[0.2em] text-[10px] text-charcoal/40 mb-1 block font-bold";

const chevronStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234a4a46' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 0px center",
  paddingRight: "20px",
};

export default function ContactFormModal({
  opened,
  onClose,
}: ContactFormModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+49");
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountryCode("+49");
    setPhone("");
    setLevel("");
    setInterest("");
    setMessage("");
    setSubmitError(null);
    setSubmitSuccess(false);
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const fullPhone = phone.trim()
      ? `${countryCode} ${phone.trim()}`
      : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: fullPhone,
          level: level || null,
          interest: interest || null,
          message: message.trim(),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setSubmitError(json.error || "Something went wrong");
      } else {
        setSubmitSuccess(true);
        setTimeout(() => {
          handleClose();
        }, 2500);
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      size="xl"
      data-lenis-prevent
      withCloseButton={false}
      padding={0}
      radius={0}
      centered
      styles={{
        content: {
          overflow: "visible",
          background: "transparent",
          boxShadow: "none",
          margin: "8px",
        },
        body: { padding: 0 },
        inner: { padding: "0" },
      }}
    >
      <div data-lenis-prevent className="relative">
        {/* Journal-style form card */}
        <div className="bg-white shadow-2xl relative max-h-[90vh] overflow-y-auto sm:max-h-none sm:overflow-visible" style={{ scrollbarWidth: "thin", scrollbarColor: "#e2725b transparent" }}>
          {/* Handwriting accent */}
          <div className="absolute -top-5 -left-3 md:-left-5 font-handwriting text-primary text-xl md:text-2xl bg-warm-sand px-4 py-2 rotate-[-4deg] shadow-sm z-20">
            Get in Touch...
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 text-charcoal/30 hover:text-charcoal transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Header */}
          <div className="px-5 pt-12 pb-5 sm:px-8 sm:pt-14 sm:pb-6 md:px-12 md:pt-16 md:pb-8 border-b border-charcoal/5">
            <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
              Start Your Journey
            </p>
            <h2 className="font-[var(--font-serif)] text-2xl sm:text-3xl md:text-4xl italic font-bold text-charcoal leading-tight">
              Start Your <br className="hidden sm:block" /> Journey
            </h2>
            <p className="font-[var(--font-serif)] text-base text-charcoal/50 italic mt-3 max-w-md">
              Fill in the form below and we&apos;ll get back to you personally. No automated replies.
            </p>
          </div>

          {/* Scrollable body */}
          <div
            data-lenis-prevent
            className="px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 sm:max-h-[55vh] sm:overflow-y-auto"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#e2725b transparent" }}
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e2725b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-serif)] text-2xl italic font-bold text-charcoal mb-3">
                  Message sent.
                </h3>
                <p className="text-charcoal/50 text-sm max-w-xs mx-auto">
                  We&apos;ve received your message and will get back to you personally within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className={labelClass}>
                      First Name (required)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johannes"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      maxLength={120}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      placeholder="e.g. M\u00FCller"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      maxLength={120}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@example.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={200}
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                  <div className="col-span-1">
                    <label className={labelClass}>Country Code</label>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className={selectClass}
                      style={chevronStyle}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="171 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={20}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Level & Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className={labelClass}>
                      Current German Level
                    </label>
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className={selectClass}
                      style={{
                        ...chevronStyle,
                        color: level ? undefined : "#2d2d2d40",
                      }}
                    >
                      <option value="" disabled>
                        Select level
                      </option>
                      {germanLevels.map((l) => (
                        <option key={l} value={l} style={{ color: "#2d2d2d" }}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>
                      I&apos;m interested in
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className={selectClass}
                      style={{
                        ...chevronStyle,
                        color: interest ? undefined : "#2d2d2d40",
                      }}
                    >
                      <option value="" disabled>
                        Select course
                      </option>
                      {interests.map((i) => (
                        <option key={i} value={i} style={{ color: "#2d2d2d" }}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Your Message</label>
                  <textarea
                    placeholder="Tell us about your goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={2000}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-red-600">{submitError}</p>
                )}

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary text-white w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 md:py-5 text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold hover:bg-charcoal transition-all duration-500 flex items-center justify-center sm:justify-start gap-4 group cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    {!submitting && (
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* WhatsApp strip at bottom */}
          <div className="border-t border-charcoal/5 bg-warm-sand/50 px-5 py-4 sm:px-8 sm:py-5 md:px-12 border-l-4 border-l-primary">
            <div className="flex items-start gap-3 sm:gap-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <h3 className="font-[var(--font-serif)] text-base sm:text-lg md:text-xl font-bold italic text-charcoal">
                  Want a faster reply?
                </h3>
                <p className="text-charcoal/50 text-sm mt-1 leading-relaxed">
                  Message us on WhatsApp. We typically respond within minutes.
                </p>
                <a
                  href="https://wa.me/4915904836675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all mt-3"
                >
                  Open WhatsApp
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom contact info */}
          <div className="px-5 py-4 sm:px-8 sm:py-5 md:px-12 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-charcoal/40">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-[var(--font-serif)] italic text-sm">decodegerman@gmail.com</span>
            </div>
            <div className="hidden sm:block text-charcoal/15">|</div>
            <div className="flex items-center gap-2">
              <span className="font-[var(--font-serif)] italic text-sm">We speak: Deutsch, English, Hindi</span>
            </div>
          </div>
        </div>

        {/* Decorative circle */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
      </div>
    </Modal>
  );
}
