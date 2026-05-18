import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const channels = [
  { title: "Website Forms", body: "Arrive in inboxes. Easy to miss during a busy day.", color: "text-brand-blue", bg: "bg-brand-blue/15" },
  { title: "Social Messages", body: "Facebook, Instagram — go unread for hours.", color: "text-indigo-400", bg: "bg-indigo-400/15" },
  { title: "Email Enquiries", body: "Scattered across accounts. Context easily lost.", color: "text-violet-400", bg: "bg-violet-400/15" },
  { title: "Phone Calls", body: "Notes written on paper. Details forgotten by afternoon.", color: "text-brand-amber", bg: "bg-brand-amber/15" },
];

const outcomes = [
  {
    step: "01 — Result",
    title: "Details get written on paper",
    body: "No structure, no system, no visibility for anyone else on the team.",
  },
  {
    step: "02 — Result",
    title: "Quotes sent, follow-ups forgotten",
    body: "The hire desk moves on. The enquiry sits unanswered. The customer hires somewhere else.",
  },
  {
    step: "03 — Result",
    title: "Revenue walks out the door",
    body: "Not because of price. Not because of availability. Because of process gaps.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-rc">
        <FadeUp>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-balance text-brand-navy leading-[1.15] max-w-3xl mx-auto">
            Most rental companies don&apos;t lose hires because of price.
            <br />
            They lose them because of <em className="not-italic text-brand-blue">process.</em>
          </p>
        </FadeUp>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <StaggerItem key={c.title}>
              <div className="h-full rounded-card border border-brand-mid bg-white p-5">
                <span className={`inline-flex size-10 items-center justify-center rounded-lg ${c.bg}`}>
                  <ChannelIcon className={`size-5 ${c.color}`} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-brand-navy">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-text-2">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp delay={0.1}>
          <div className="my-10 flex justify-center" aria-hidden="true">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-amber/15 text-brand-amber">
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </FadeUp>

        <StaggerChildren className="grid gap-5 md:grid-cols-3">
          {outcomes.map((o) => (
            <StaggerItem key={o.step}>
              <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-6">
                <div className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-blue">
                  {o.step}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{o.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function ChannelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8l9 6 9-6" />
    </svg>
  );
}
