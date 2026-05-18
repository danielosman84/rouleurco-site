import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { buildOrganizationSchema } from "@/lib/faqSchema";
import { SITE_URL } from "@/lib/metadata";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sales & automation built for vehicle rental | RouleurCo",
    template: "%s | RouleurCo",
  },
  description:
    "Capture every enquiry, send quotes faster, follow up automatically. The rental sales platform built for independent UK hire operators.",
  openGraph: {
    type: "website",
    siteName: "RouleurCo",
    url: SITE_URL,
    images: [{ url: "/rouleurco-social-share.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jakarta.variable}`}>
      <body className="bg-white text-brand-text font-sans">
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: buildOrganizationSchema() }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
