import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { LegalProse } from "@/components/layout/LegalProse";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Terms governing use of the RouleurCo website and platform services. Governed by the laws of England and Wales.",
  path: "/terms",
});

const LAST_UPDATED = "16 March 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]}
        eyebrow="Legal"
        heading="Terms and Conditions"
        lead={<>Last updated: {LAST_UPDATED}</>}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <LegalProse>
            <p>These Terms and Conditions (&quot;Terms&quot;) govern your use of the RouleurCo website at rouleurco.com (&quot;the Website&quot;) and any services provided by RouleurCo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing the Website or registering interest in our services, you agree to these Terms.</p>
            <p>RouleurCo is a trading name operating in England and Wales. These Terms are governed by the laws of England and Wales.</p>

            <h2>1. About RouleurCo</h2>
            <p>RouleurCo provides a sales and automation platform built for independent vehicle rental companies, delivered as a Software as a Service (SaaS) product. The Website is used to provide information about the platform and to capture interest from prospective customers.</p>
            <p>The platform itself is subject to a separate subscription agreement, which will be provided to you prior to any commercial relationship commencing.</p>

            <h2>2. Use of the website</h2>
            <p>You may use this Website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Use the Website in any way that violates applicable local, national or international law or regulation</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
              <li>Attempt to gain unauthorised access to any part of the Website or its related systems</li>
              <li>Introduce viruses, trojans, worms, or other malicious or technologically harmful material</li>
              <li>Reproduce, duplicate, copy, or resell any part of the Website in contravention of these Terms</li>
            </ul>

            <h2>3. Intellectual property</h2>
            <p>All content on this Website — including text, graphics, logos, images, and software — is the property of RouleurCo or its licensors and is protected by applicable intellectual property laws.</p>
            <p>You may view and print pages from this Website for your personal, non-commercial use only. You may not reproduce, modify, distribute, or commercially exploit any content from this Website without our prior written consent.</p>

            <h2>4. Registering interest</h2>
            <p>By submitting the contact or registration form on this Website, you are expressing interest in the RouleurCo platform. Submitting the form does not constitute a binding commercial agreement. No contract for the provision of services exists until a separate written agreement has been signed by both parties.</p>
            <p>We reserve the right to accept or decline any registration of interest at our discretion.</p>

            <h2>5. Platform subscription terms</h2>
            <p>Where you proceed to subscribe to the RouleurCo platform, the following terms apply:</p>

            <h3>5.1 Founding operator pricing</h3>
            <p>Founding operator pricing is available to the first 10 registered operators only. Founding operator subscribers commit to a minimum term of 6 months. After the minimum term, the subscription continues on a rolling monthly basis at the founding operator rate.</p>

            <h3>5.2 Standard pricing</h3>
            <p>Standard subscriptions are subject to a minimum term of 12 months from the commencement date. After the minimum term, the subscription continues on a rolling monthly basis.</p>

            <h3>5.3 Setup fee</h3>
            <p>A one-time setup fee of £500 is payable upon commencement of any subscription. This fee covers platform configuration, pipeline build, workflow setup, and onboarding support. The setup fee is non-refundable once onboarding has commenced.</p>

            <h3>5.4 Payment</h3>
            <p>Monthly subscription fees are invoiced and collected in advance. Payment is due within 14 days of invoice. We reserve the right to suspend access to the platform for non-payment after reasonable notice.</p>

            <h3>5.5 Cancellation</h3>
            <p>You may cancel your subscription by providing written notice to hello@rouleurco.com. Cancellation takes effect at the end of the current billing period. No refunds are provided for unused portions of any billing period. Cancellation during a minimum term does not extinguish the obligation to pay for the remainder of that minimum term.</p>

            <h3>5.6 Price changes</h3>
            <p>We reserve the right to change our standard pricing with 30 days&apos; written notice. Founding operator pricing is locked for the duration of the subscription and will not increase.</p>

            <h2>6. Limitation of liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
              <li>We exclude all conditions, warranties, representations, or other terms which may apply to our Website or any content on it, whether express or implied</li>
              <li>We will not be liable to you for any loss or damage — whether in contract, tort (including negligence), breach of statutory duty, or otherwise — arising under or in connection with your use of, or inability to use, our Website</li>
              <li>We will not be liable for any indirect or consequential losses, or for any loss of profit, revenue, data, or business opportunity</li>
            </ul>
            <p>Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.</p>

            <h2>7. Third-party links</h2>
            <p>Our Website may contain links to third-party websites. These links are provided for your information only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them.</p>

            <h2>8. Availability of the website</h2>
            <p>We do not guarantee that our Website will always be available or be uninterrupted. We may suspend, withdraw, or restrict access to all or any part of the Website for business or operational reasons. We will try to give reasonable notice of any suspension or withdrawal.</p>

            <h2>9. Governing law and jurisdiction</h2>
            <p>These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. You and we both agree to submit to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h2>10. Changes to these terms</h2>
            <p>We reserve the right to update these Terms at any time. The date at the top of this page will reflect the most recent version. Your continued use of the Website following any changes constitutes acceptance of the updated Terms.</p>

            <h2>11. Contact us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><strong>Email:</strong> hello@rouleurco.com<br /><strong>Website:</strong> rouleurco.com</p>
          </LegalProse>
        </div>
      </section>
    </>
  );
}
