export const COOKIE_CONSENT_KEY = "dg_cookie_consent_v1";

export type CookieConsentChoice = "accepted" | "declined";

export function readCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export function writeCookieConsent(choice: CookieConsentChoice) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    window.dispatchEvent(
      new StorageEvent("storage", { key: COOKIE_CONSENT_KEY }),
    );
  } catch {
    /* storage disabled — non-fatal */
  }
}

export function clearCookieConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.dispatchEvent(
      new StorageEvent("storage", { key: COOKIE_CONSENT_KEY }),
    );
  } catch {
    /* storage disabled — non-fatal */
  }
}

export function subscribeCookieConsent(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}
