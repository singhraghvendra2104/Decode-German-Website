"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  readCookieConsent,
  subscribeCookieConsent,
  writeCookieConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const storedChoice = useSyncExternalStore(
    subscribeCookieConsent,
    readCookieConsent,
    () => null,
  );
  const visible = storedChoice === null;

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[9999] px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-4xl bg-white border border-accent shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1 text-sm leading-relaxed text-gray-700">
          <p className="font-semibold text-charcoal mb-1">
            We value your privacy
          </p>
          <p>
            This site uses only strictly necessary cookies to operate. No
            marketing or tracking cookies are set. Read more in our{" "}
            <Link
              href="/cookie-policy"
              className="text-primary underline hover:opacity-80"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-primary underline hover:opacity-80"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => writeCookieConsent("declined")}
            className="px-4 py-2 text-[11px] uppercase tracking-widest font-bold border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={() => writeCookieConsent("accepted")}
            className="px-4 py-2 text-[11px] uppercase tracking-widest font-bold bg-primary text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
