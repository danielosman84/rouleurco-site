"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rc_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing =
      typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
    if (!existing) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 bg-brand-navy text-white shadow-lg"
    >
      <div className="container-rc flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3">
        <p className="text-sm text-white/85 max-w-2xl">
          We use cookies to understand how the site is used and to improve it. See our{" "}
          <a href="/privacy" className="underline hover:text-white">
            privacy policy
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={decline}
            className="rounded-btn border border-white/30 px-4 py-2 text-sm font-display font-semibold hover:bg-white/10 min-h-[44px]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-btn bg-brand-blue px-4 py-2 text-sm font-display font-semibold hover:bg-brand-blue-hover min-h-[44px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
