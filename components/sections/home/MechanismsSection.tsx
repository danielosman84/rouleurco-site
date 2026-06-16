import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

type Mechanism = {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

// Each mechanism links to its matching feature page.
const mechanisms: Mechanism[] = [
  {
    title: "Capture every enquiry, from everywhere.",
    body: "Phone, email, website, Facebook, a missed call at 9pm — all of them, in one inbox, the moment they land.",
    href: "/features/unified-inbox",
    linkLabel: "See the unified inbox",
  },
  {
    title: "Know where your work comes from.",
    body: "See whether your hires come from Google, Facebook or the phone, so you can lean into what's converting.",
    href: "/features/enquiry-sources",
    linkLabel: "See enquiry source tracking",
  },
  {
    title: "Follow up until someone replies.",
    body: "Every quote chased automatically, across channels, until you get an answer.",
    href: "/features/quote-follow-up",
    linkLabel: "See quote follow-up",
  },
  {
    title: "Convert more of the hires that change your year.",
    body: "A structured desk turns more enquiries — especially the long-term ones — into booked, earning vehicles.",
    href: "/features/pipelines",
    linkLabel: "See enquiry pipelines",
  },
];

export function MechanismsSection() {
  return (
    <section className="bg-brand-navy py-20 sm:py-24 text-white">
      <div className="container-rc">
        <SectionHeader
          eyebrow="How RouleurCo does it"
          heading="The commercial side of a growing hire desk."
          lead="Four moving parts, each built to win you more of the work — and more of the long-term work in particular."
          variant="dark"
        />

        <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2">
          {mechanisms.map((m) => (
            <StaggerItem key={m.title}>
              <div className="flex h-full flex-col rounded-card border border-white/10 bg-white/[0.04] p-7">
                <h3 className="font-display text-lg font-bold text-white">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {m.body}
                </p>
                {m.href && (
                  <Link
                    href={m.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-blue hover:text-white"
                  >
                    {m.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
