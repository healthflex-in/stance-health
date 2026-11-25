"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";

/* ── Google Apps Script web-app URL ──
   This endpoint appends a row to the "Stance Health – Hebbal Waitlist Leads"
   Google Sheet. Deploy the companion script (see docs/hebbal-waitlist-script.md)
   and paste the deployment URL here. */
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/DEPLOY_ID_HERE/exec";

/* ── Popup image — high-quality athlete on a track ── */
const POPUP_IMAGE =
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80";

/** localStorage key — suppress the popup for 24 h after close / submit. */
const LS_KEY = "stance_hebbal_popup_dismissed";
const DISMISS_HOURS = 24;

function isDismissed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const ts = localStorage.getItem(LS_KEY);
    if (!ts) return false;
    return Date.now() - Number(ts) < DISMISS_HOURS * 3_600_000;
  } catch {
    return false;
  }
}

function setDismissed() {
  try {
    localStorage.setItem(LS_KEY, String(Date.now()));
  } catch {
    /* private browsing – ignore */
  }
}

export default function HebbalPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /* Show after 3 s unless already dismissed. */
  useEffect(() => {
    if (isDismissed()) return;
    const id = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(id);
  }, []);

  /* Lock body scroll while open. */
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  /* Close on Escape. */
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const close = useCallback(() => {
    setVisible(false);
    setDismissed();
  }, []);

  /* ── Validation ── */
  function validate(): boolean {
    let ok = true;
    if (!name.trim()) {
      setNameError("Please enter your name");
      ok = false;
    } else {
      setNameError("");
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      setPhoneError("Please enter a valid 10-digit mobile number");
      ok = false;
    } else {
      setPhoneError("");
    }
    return ok;
  }

  /* ── Submit ── */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const now = new Date();
      const dateTime = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const leadSource = (() => {
        try {
          const params = new URLSearchParams(window.location.search);
          return (
            params.get("utm_source") ||
            params.get("utm_medium") ||
            document.referrer ||
            "Direct – Website Popup"
          );
        } catch {
          return "Direct – Website Popup";
        }
      })();

      const res = await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors", // Apps Script CORS
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          dateTime,
          leadSource,
        }),
      });

      /* no-cors → opaque response (status 0); treat as success. */
      void res;
      setSubmitted(true);
      setDismissed();
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Hebbal centre launch waitlist"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-[920px] overflow-hidden rounded-2xl shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, #0c1b30 0%, #132644 50%, #1a3358 100%)",
          animation: "hebbal-pop-in 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 4l10 10M14 4L4 14" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* ── Image panel ── */}
          <div className="relative h-52 w-full flex-shrink-0 md:h-auto md:w-[42%]">
            <img
              src={POPUP_IMAGE}
              alt="Athlete training"
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Gradient overlays */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 40%, #132644 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, #132644 100%)",
              }}
            />
            {/* Accent bar */}
            <div
              className="absolute bottom-0 left-0 h-1 w-full md:bottom-auto md:left-auto md:right-0 md:top-0 md:h-full md:w-1"
              style={{ backgroundColor: "#cdfe71" }}
            />
          </div>

          {/* ── Content panel ── */}
          <div className="flex flex-1 flex-col justify-center px-6 py-6 sm:px-10 sm:py-8 md:py-10">
            {submitted ? (
              /* ── Success state ── */
              <div className="text-center md:text-left">
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full md:mx-0"
                  style={{ backgroundColor: "rgba(205,254,113,0.15)" }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#cdfe71"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="mb-3 text-xl leading-tight sm:text-2xl"
                  style={{
                    fontFamily: "var(--font-unbounded), sans-serif",
                    fontWeight: 700,
                    color: "#cdfe71",
                  }}
                >
                  You&rsquo;re on the list!
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "15px",
                  }}
                >
                  We&rsquo;ll keep you updated about our Hebbal launch. Get
                  ready for a new destination for recovery, strength &amp;
                  performance!
                </p>
                <button
                  onClick={close}
                  className="btn-primary"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Got it
                </button>
              </div>
            ) : (
              /* ── Form state ── */
              <>
                <h2
                  className="mb-2 text-2xl leading-tight sm:text-3xl md:text-[clamp(1.75rem,3.5vw,2.25rem)]"
                  style={{
                    fontFamily: "var(--font-unbounded), sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Stance is Coming to{" "}
                  <span style={{ color: "#cdfe71" }}>Hebbal!</span>
                </h2>

                <p
                  className="mb-5 leading-relaxed sm:mb-6"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "15px",
                    maxWidth: "420px",
                  }}
                >
                  A new destination for recovery, strength and performance is
                  coming closer to you. Don&rsquo;t miss the launch.
                </p>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-3"
                >
                  {/* Name field */}
                  <div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (nameError) setNameError("");
                        }}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.07] py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#cdfe71]/50 focus:bg-white/[0.1] focus:ring-1 focus:ring-[#cdfe71]/30"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                        autoComplete="name"
                      />
                    </div>
                    {nameError && (
                      <p className="mt-1 text-xs text-red-400">{nameError}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </span>
                      <input
                        type="tel"
                        placeholder="Enter your 10-digit mobile number"
                        value={phone}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "");
                          if (digits.length <= 10) setPhone(digits);
                          if (phoneError) setPhoneError("");
                        }}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.07] py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#cdfe71]/50 focus:bg-white/[0.1] focus:ring-1 focus:ring-[#cdfe71]/30"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                        inputMode="numeric"
                        maxLength={10}
                        autoComplete="tel-national"
                      />
                    </div>
                    {phoneError && (
                      <p className="mt-1 text-xs text-red-400">{phoneError}</p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-400">{submitError}</p>
                  )}

                  {/* CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition disabled:opacity-60"
                    style={{
                      backgroundColor: "#cdfe71",
                      color: "#132644",
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            opacity="0.3"
                          />
                          <path
                            d="M12 2a10 10 0 019.95 9"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Joining…
                      </>
                    ) : (
                      <>
                        Join the Waitlist
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Keyframe ── */}
      <style>{`
        @keyframes hebbal-pop-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>
  );
}
