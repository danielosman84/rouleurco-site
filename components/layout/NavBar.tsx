"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav, featureLinks } from "./nav-config";

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setFeaturesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-brand-mid">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <div className="container-rc flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          <Link
            href="/lead-generation"
            className={cn(
              "px-3 py-2 text-sm font-display font-semibold text-brand-text-2 hover:text-brand-navy rounded-md",
              pathname === "/lead-generation" && "text-brand-navy"
            )}
          >
            Lead Generation
          </Link>
          <Link
            href="/how-it-works"
            className={cn(
              "px-3 py-2 text-sm font-display font-semibold text-brand-text-2 hover:text-brand-navy rounded-md",
              pathname === "/how-it-works" && "text-brand-navy"
            )}
          >
            How It Works
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 px-3 py-2 text-sm font-display font-semibold text-brand-text-2 hover:text-brand-navy rounded-md",
                pathname.startsWith("/features") && "text-brand-navy"
              )}
              aria-expanded={featuresOpen}
              aria-haspopup="menu"
              onClick={() => setFeaturesOpen((o) => !o)}
            >
              Features
              <svg className="size-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {featuresOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
              >
                <div className="w-[640px] rounded-card border border-brand-mid bg-white shadow-xl p-4 grid grid-cols-2 gap-1">
                  <Link
                    href="/features"
                    className="col-span-2 px-3 py-2 text-xs font-display font-semibold uppercase tracking-wide text-brand-blue hover:bg-brand-blue-light rounded-md"
                  >
                    All features →
                  </Link>
                  {featureLinks.map((feature) => (
                    <Link
                      key={feature.href}
                      href={feature.href}
                      className="px-3 py-2 rounded-md hover:bg-brand-light"
                      role="menuitem"
                    >
                      <div className="font-display font-semibold text-sm text-brand-navy">
                        {feature.label}
                      </div>
                      <div className="text-xs text-brand-muted mt-0.5">
                        {feature.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryNav.slice(3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-display font-semibold text-brand-text-2 hover:text-brand-navy rounded-md",
                pathname === item.href && "text-brand-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ButtonLink href="/contact" variant="ghost" size="sm">
            Contact
          </ButtonLink>
          <ButtonLink href="/register-interest" variant="primary" size="sm">
            Register Interest
          </ButtonLink>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center size-11 rounded-md text-brand-navy hover:bg-brand-light"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-brand-navy text-white overflow-y-auto">
          <div className="container-rc flex h-16 items-center justify-between">
            <Logo variant="light" />
            <button
              type="button"
              className="inline-flex items-center justify-center size-11 rounded-md text-white hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="container-rc py-6 flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-lg font-display font-semibold text-white hover:bg-white/10 rounded-md"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 px-3 py-2 text-xs font-display font-semibold uppercase tracking-wide text-white/60">
              Feature deep dives
            </div>
            {featureLinks.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="px-3 py-2 text-sm font-display text-white/90 hover:bg-white/10 rounded-md"
              >
                {feature.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/contact" variant="ghost-white" size="lg">
                Contact
              </ButtonLink>
              <ButtonLink href="/register-interest" variant="primary" size="lg">
                Register Interest
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
