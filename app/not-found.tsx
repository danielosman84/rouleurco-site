import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section variant="dark">
      <SectionHeader
        eyebrow="404"
        heading="Page not found"
        lead="We can't find the page you're looking for. Try one of these instead."
        variant="dark"
      />
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="primary" size="lg">
          Back to home
        </ButtonLink>
        <ButtonLink href="/features" variant="ghost-white" size="lg">
          Browse features
        </ButtonLink>
        <Link href="/register-interest" className="text-white/80 underline self-center">
          Register your interest
        </Link>
      </div>
    </Section>
  );
}
