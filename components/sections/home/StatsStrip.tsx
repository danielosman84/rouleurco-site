import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const stats = [
  { num: "84%", label: "of LCV rental customers are business users (BVRLA)" },
  { num: "£££", label: "Lost in missed follow-ups every month" },
  { num: "1 system", label: "Everything the hire desk needs" },
];

export function StatsStrip() {
  return (
    <section className="bg-brand-lightbg py-14">
      <div className="container-rc">
        <StaggerChildren className="grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-brand-navy">
                  {s.num}
                </div>
                <div className="mt-2 text-sm text-brand-text-2 leading-snug max-w-[20ch] mx-auto">
                  {s.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
