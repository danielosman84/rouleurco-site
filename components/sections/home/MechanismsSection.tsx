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
    body: "Phone, email, website, Facebook, a missed call at 9pm — every one lands in a single inbox the moment it arrives. Nothing gets scribbled on a pad and lost when the desk gets busy.",
    href: "/features/unified-inbox",
    linkLabel: "See the unified inbox",
  },
  {
    title: "Know where your work comes from.",
    body: "Every enquiry is tagged with where it came from — Google, Facebook, the phone, word of mouth. So you can stop guessing which channel earns its keep and put your effort where the hires actually come from.",
    href: "/features/enquiry-sources",
    linkLabel: "See enquiry source tracking",
  },
  {
    title: "Follow up until someone replies.",
    body: "Send the quote and RouleurCo chases it — email, then a text — on the schedule you set, until the customer answers or the hire's booked. The follow-up that used to rely on someone remembering now just happens.",
    href: "/features/quote-follow-up",
    linkLabel: "See quote follow-up",
  },
  {
    title: "Convert more of the hires that change your year.",
    body: "Every enquiry sits on a pipeline you can see at a glance — new, quoted, chasing, won — so nothing goes quiet unnoticed. The long-term ones especially: the hires worth chasing hardest are now the ones you can see and push.",
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
