import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { LegalProse } from "@/components/layout/LegalProse";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How RouleurCo collects, uses and protects your personal data. Governed by UK GDPR and the Data Protection Act 2018.",
  path: "/privacy",
});

const LAST_UPDATED = "16 March 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        eyebrow="Legal"
        heading="Privacy Policy"
        lead={<>Last updated: {LAST_UPDATED}</>}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <LegalProse>
            <p>RouleurCo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights under UK data protection law — including the UK GDPR and the Data Protection Act 2018.</p>
            <p>RouleurCo is a trading name. Our contact address for data protection matters is: <strong>hello@rouleurco.com</strong></p>

            <h2>1. What information we collect</h2>
            <p>We collect personal information in the following ways:</p>

            <h3>Information you provide directly</h3>
            <p>When you complete the contact or registration form on our website, we collect:</p>
            <ul>
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Company size and fleet size (where provided)</li>
              <li>Website URL (where provided)</li>
              <li>Any message or information you choose to include</li>
            </ul>

            <h3>Information collected automatically</h3>
            <p>When you visit rouleurco.com, we automatically collect certain technical information including:</p>
            <ul>
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website (where you came from)</li>
              <li>Device type and operating system</li>
            </ul>
            <p>This information is collected through cookies and analytics tools (see Section 5 below).</p>

            <h2>2. How we use your information</h2>
            <p>We use the personal information you provide to:</p>
            <ul>
              <li>Respond to your enquiry and provide information about RouleurCo</li>
              <li>Contact you about securing a founding operator position, where you have expressed interest</li>
              <li>Send follow-up communications related to your enquiry, where you have provided consent via the contact form</li>
              <li>Improve our website and communications based on how visitors interact with our content</li>
            </ul>
            <p>We do not use your personal information for automated decision-making or profiling.</p>

            <h2>3. Legal basis for processing</h2>
            <p>We process your personal data on the following legal bases under UK GDPR:</p>
            <ul>
              <li><strong>Legitimate interests</strong> — to respond to enquiries and follow up with prospective customers who have contacted us</li>
              <li><strong>Consent</strong> — where you have opted in to receive SMS or marketing communications via the contact form checkboxes</li>
              <li><strong>Legitimate interests</strong> — to analyse website traffic and improve our service using anonymised analytics data</li>
            </ul>

            <h2>4. Who we share your data with</h2>
            <p>We do not sell your personal data. We may share it with the following third parties, only where necessary to provide our service:</p>
            <ul>
              <li><strong>GoHighLevel</strong> — our CRM and communications platform, which processes enquiry data on our behalf. GoHighLevel acts as a data processor under our instruction.</li>
              <li><strong>Google Analytics</strong> — we use Google Analytics to understand how visitors interact with our website. Data collected is anonymised and subject to Google&apos;s privacy policy.</li>
            </ul>
            <p>All third parties we work with are required to handle your data in accordance with applicable data protection law.</p>

            <h2>5. Cookies</h2>
            <p>Our website uses cookies — small text files stored on your device — to improve your experience and understand how the site is used.</p>

            <h3>Types of cookies we use</h3>
            <ul>
              <li><strong>Strictly necessary cookies</strong> — required for the website to function correctly. These cannot be disabled.</li>
              <li><strong>Analytics cookies</strong> — used by Google Analytics to collect anonymised information about how visitors use the site. These are only set with your consent.</li>
            </ul>
            <p>You can control cookie settings through your browser settings at any time. Disabling analytics cookies will not affect your ability to use the website.</p>

            <h2>6. How long we keep your data</h2>
            <p>We retain personal data for as long as is necessary for the purpose it was collected:</p>
            <ul>
              <li>Enquiry and contact form data — retained for up to 2 years from the date of last contact, or until you request deletion</li>
              <li>Analytics data — retained by Google Analytics for 26 months, in line with their standard retention settings</li>
            </ul>

            <h2>7. Your rights</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you</li>
              <li><strong>Rectification</strong> — request correction of inaccurate data</li>
              <li><strong>Erasure</strong> — request deletion of your data, where we have no legal obligation to retain it</li>
              <li><strong>Restriction</strong> — request that we limit how we use your data</li>
              <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
              <li><strong>Object</strong> — to processing based on legitimate interests</li>
              <li><strong>Withdraw consent</strong> — at any time, where processing is based on consent</li>
            </ul>
            <p>To exercise any of these rights, contact us at <strong>hello@rouleurco.com</strong>. We will respond within 30 days.</p>
            <p>You also have the right to lodge a complaint with the <strong>Information Commissioner&apos;s Office (ICO)</strong> — the UK&apos;s data protection regulator — at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>

            <h2>8. Data security</h2>
            <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our CRM platform (GoHighLevel) maintains industry-standard security measures including encryption in transit and at rest.</p>

            <h2>9. Transfers outside the UK</h2>
            <p>Some of our third-party service providers, including GoHighLevel and Google Analytics, may process data outside the UK. Where this occurs, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.</p>

            <h2>10. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. The date at the top of this page will always reflect the most recent version. We encourage you to review this policy periodically.</p>

            <h2>11. Contact us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:</p>
            <p><strong>Email:</strong> hello@rouleurco.com<br /><strong>Website:</strong> rouleurco.com</p>
          </LegalProse>
        </div>
      </section>
    </>
  );
}
