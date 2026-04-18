"use client";

import { clearCookieConsent } from "@/lib/cookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={clearCookieConsent}
      className="hover:text-primary transition-colors cursor-pointer"
    >
      Cookie Settings
    </button>
  );
}
