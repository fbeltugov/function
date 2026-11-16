"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type CookieConsentValue = {
  necessary: true;
  analytics: boolean;
};

type BannerView = "initial" | "preferences";

const CONSENT_COOKIE = "cookieConsent";
const CONSENT_MAX_AGE = 31536000;

function getConsentCookie(): CookieConsentValue | null {
  const row = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`));
  if (!row) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(row.split("=")[1] ?? "")) as {
      necessary?: boolean;
      analytics?: boolean;
    };
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
    };
  } catch {
    return null;
  }
}

function setConsentCookie(consent: CookieConsentValue) {
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; max-age=${CONSENT_MAX_AGE}; path=/`;
}

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState<BannerView>("initial");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    let ti: NodeJS.Timeout;
    const existing = getConsentCookie();

    if (!existing) {
      ti = setTimeout(() => {
        setView("initial");
        setIsVisible(true);
      }, 5000);
    }

    const openSettings = () => {
      const saved = getConsentCookie();
      setAnalyticsEnabled(saved?.analytics ?? false);
      setView("preferences");
      setIsVisible(true);
    };
    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      clearTimeout(ti);
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  const saveAndClose = (analytics: boolean) => {
    setConsentCookie({ necessary: true, analytics });
    setAnalyticsEnabled(analytics);
    setIsVisible(false);
    setView("initial");
  };

  const handleAcceptAll = () => saveAndClose(true);
  const handleRejectAll = () => saveAndClose(false);
  const handleSavePreferences = () => saveAndClose(analyticsEnabled);
  const handleManagePreferences = () => {
    const saved = getConsentCookie();
    setAnalyticsEnabled(saved?.analytics ?? false);
    setView("preferences");
  };

  return (
    <div
      className={cn(
        "fixed right-0 bottom-0 left-0 z-100",
        "xs:text-[0.5625rem] bg-[#FF3F1A] text-[0.4375rem] text-[#F0EDE8] md:text-sm",
        "transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      {view === "initial" ? (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-[8.2vw] py-4">
          <p className="max-w-[52rem]">
            We use cookies to improve your experience and analyze website
            traffic. Manage your preferences at any time.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="underline underline-offset-[5px]"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleRejectAll}
              className="underline underline-offset-[5px]"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={handleManagePreferences}
              className="underline underline-offset-[5px]"
            >
              Manage Preferences
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-[8.2vw] py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <p className="shrink-0 font-medium">Cookie Preferences</p>

            <label className="flex cursor-default items-center gap-2">
              <span
                aria-hidden
                className="flex h-4 w-4 items-center justify-center rounded-full border border-[#F0EDE8]"
              >
                <span className="h-2 w-2 rounded-full bg-[#F0EDE8]" />
              </span>
              <input
                type="checkbox"
                checked
                disabled
                readOnly
                className="sr-only"
                aria-label="Necessary cookies (always active)"
              />
              <span>Necessary cookies (always active)</span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <span
                aria-hidden
                className="flex h-4 w-4 items-center justify-center rounded-full border border-[#F0EDE8]"
              >
                {analyticsEnabled && (
                  <span className="h-2 w-2 rounded-full bg-[#F0EDE8]" />
                )}
              </span>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                className="sr-only"
                aria-label="Analytics"
              />
              <span>Analytics</span>
            </label>
          </div>

          <button
            type="button"
            onClick={handleSavePreferences}
            className="underline underline-offset-2"
          >
            Save Preferences &amp; Close
          </button>
        </div>
      )}
    </div>
  );
}

export default CookieConsent;
