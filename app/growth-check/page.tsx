import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "The Hire Desk Growth Check",
  description:
    "A 10-minute checklist for independent vehicle rental operators. The questions worth asking about your own hire desk — and an honest read on whether you can answer them. No score, no sign-up.",
  path: "/growth-check",
});

type Question = { title: string; body: string };

const gettingFound: Question[] = [
  {
    title: "Google Business Profile",
    body: "When someone searches “van hire near me,” do you show up — and does what they see make them call you over the unit down the road? Is your profile complete, are your photos current, are you replying to reviews? For a local operator, GBP often does more than the website.",
  },
  {
    title: "Facebook",
    body: "When someone messages your page about a van for next week, who sees it, and how fast? Messenger enquiries are some of the warmest you'll get — and some of the easiest to miss.",
  },
  {
    title: "Do you know where your enquiries come from?",
    body: "Phone, Google, Facebook, website, word of mouth. If you can't say which channel brings the most hires, you can't lean into the one that's working.",
  },
];

const converting: Question[] = [
  {
    title: "What's your response time?",
    body: "Not your best day — your average. The first business to reply often wins the hire, especially against a slow national network. Do you know yours?",
  },
  {
    title: "What happens after a quote goes out?",
    body: "If the customer doesn't reply, who chases, and when? Or does it quietly go cold while the desk gets busy again?",
  },
  {
    title: "How many enquiries do you get a month — and how many do you lose?",
    body: "Most operators can name their bookings. Far fewer can name the ones that got away.",
  },
  {
    title: "Are you winning enough long-term hire?",
    body: "The daily work is capped by your yard. The longer hires fill the quiet months — are you converting your share, or letting them slip to someone who followed up faster?",
  },
];

export default function GrowthCheckPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Growth Check" }]}
        eyebrow="A checklist worth ten minutes"
        badge={{ tone: "blue", label: "No score · No sign-up" }}
        heading="The Hire Desk Growth Check"
        lead="Most rental businesses are busier than they are measured. Here are the questions worth asking about your own desk — and an honest read on whether you can actually answer them."
      />

      {/* SECTION 1 — Are you getting found? */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Section 1"
            heading="Are you getting found?"
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {gettingFound.map((q, i) => (
              <QuestionCard key={q.title} n={i + 1} question={q} />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* SECTION 2 — Are you converting what you get? */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Section 2"
            heading="Are you converting what you get?"
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-2">
            {converting.map((q, i) => (
              <QuestionCard key={q.title} n={i + 1} question={q} />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* THE POINT */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc max-w-3xl text-center">
          <FadeUp>
            <Eyebrow variant="white">The point</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance">
              You can&apos;t grow what you can&apos;t see.
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              If you couldn&apos;t answer some of those with confidence, you&apos;re not behind — you&apos;re normal. Almost no independent has this visible, because the systems that run the fleet and hold the emails were never built to show it.
            </p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              That&apos;s the half of the business RouleurCo makes visible: every enquiry captured, every source tracked, every quote followed up, every number in one place. You can&apos;t improve a response time you can&apos;t see, or grow a channel you didn&apos;t know was working.
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        heading="Want to see what that looks like for your desk?"
        subtext="Register your interest and we'll show you how RouleurCo makes the commercial side of your hire desk visible — and what it'd mean for how yours runs."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}

function QuestionCard({ n, question }: { n: number; question: Question }) {
  return (
    <StaggerItem>
      <div className="flex h-full flex-col rounded-card border border-brand-mid bg-white p-7">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-blue-light font-display text-sm font-bold text-brand-blue">
          {n}
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-brand-navy leading-snug">
          {question.title}
        </h3>
        <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">
          {question.body}
        </p>
      </div>
    </StaggerItem>
  );
}
