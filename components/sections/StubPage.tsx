import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function StubPage({ eyebrow, title, description }: Props) {
  return (
    <>
      <Section variant="dark">
        <SectionHeader
          eyebrow={eyebrow}
          heading={title}
          lead={description}
          variant="dark"
        />
      </Section>
      <Section variant="light">
        <div className="text-center">
          <Badge tone="amber">Stage 2 scaffolding</Badge>
          <p className="mt-4 text-brand-text-2 max-w-xl mx-auto">
            This route is wired up. Full content migration happens in Stage 3.
          </p>
        </div>
      </Section>
    </>
  );
}
