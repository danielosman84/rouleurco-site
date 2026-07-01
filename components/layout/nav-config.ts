export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const featureLinks: NavItem[] = [
  { label: "Enquiry Pipelines", href: "/features/pipelines", description: "Capture & track every hire" },
  { label: "Unified Inbox", href: "/features/unified-inbox", description: "SMS, email & social in one place" },
  { label: "Enquiry Source Tracking", href: "/features/enquiry-sources", description: "See where your hires come from" },
  { label: "Quote Follow-Up", href: "/features/quote-follow-up", description: "Chase every quote automatically" },
  { label: "Missed Call Text-Back", href: "/features/missed-call", description: "Auto-SMS on missed calls" },
  { label: "Payments & Recovery", href: "/features/payments", description: "Stripe / GoCardless + retries" },
  { label: "Enquiry Qualification", href: "/features/lead-qualification", description: "Lead scoring & time-waster filter" },
  { label: "Customer Onboarding", href: "/features/onboarding", description: "Docs, e-sign & authorisation gate" },
  { label: "Social Media", href: "/features/social-media", description: "Plan & post without leaving RC" },
  { label: "AI Agent", href: "/features/ai-agent", description: "24/7 site lead capture" },
  { label: "Active Hire Check-In", href: "/features/hire-check-in", description: "7-touchpoint long-term hire" },
  { label: "Mobile & Desktop App", href: "/features/apps", description: "iOS, Android, Mac, Windows" },
];

// Order matters: index 0 renders as a plain desktop link, index 1 ("Features")
// renders as the mega-dropdown, and everything from index 2 onwards renders
// after the dropdown. The mobile drawer renders the full list.
export const primaryNav: NavItem[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Growth Check", href: "/growth-check" },
  { label: "Compare", href: "/compare" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  platform: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Features", href: "/features" },
    { label: "Guides", href: "/guides" },
    { label: "Growth Check", href: "/growth-check" },
    { label: "Compare", href: "/compare" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Register Interest", href: "/register-interest" },
  ],
  forOperators: [
    { label: "Enquiry Pipelines", href: "/features/pipelines" },
    { label: "Unified Inbox", href: "/features/unified-inbox" },
    { label: "Customer Onboarding", href: "/features/onboarding" },
    { label: "AI Agent", href: "/features/ai-agent" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
