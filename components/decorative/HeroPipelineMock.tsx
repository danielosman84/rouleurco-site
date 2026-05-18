export function HeroPipelineMock() {
  return (
    <div
      className="relative w-full max-w-[420px] ml-auto"
      aria-hidden="true"
    >
      <div className="rounded-2xl border border-white/10 bg-brand-navy-mid/80 backdrop-blur-sm shadow-2xl p-5">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <div className="font-display text-xs font-semibold uppercase tracking-wide text-white/60">
            Enquiry Pipeline
          </div>
        </div>

        <Stage label="New Enquiries">
          <Deal name="Hartley Building Svcs" meta="Web form · 2 min ago" value="Transit x3" active />
          <Deal name="Pinnacle Logistics" meta="Email · 18 min ago" value="Sprinter x1" />
        </Stage>

        <Stage label="Quote Sent" className="mt-3">
          <Deal
            name="Nexus Contractors"
            meta="Follow-up in 24h · Auto"
            value="£1,240"
            valueColor="text-brand-amber"
          />
        </Stage>

        <Stage label="Hire Confirmed" className="mt-3">
          <Deal
            name="Apex Site Services"
            meta="Docs signed · Payment received"
            value="£2,800"
            valueColor="text-brand-green"
          />
        </Stage>
      </div>

      <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl border border-white/10 bg-brand-navy-mid px-4 py-3 shadow-xl">
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-green/15">
          <svg className="size-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="text-xs">
          <div className="font-display font-semibold text-white">Follow-up sent automatically</div>
          <div className="text-white/60">Nexus Contractors — Quote #0042</div>
        </div>
      </div>
    </div>
  );
}

function Stage({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40 mb-2">
        {label}
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function Deal({
  name,
  meta,
  value,
  active,
  valueColor = "text-white/70",
}: {
  name: string;
  meta: string;
  value: string;
  active?: boolean;
  valueColor?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${
        active
          ? "border-brand-blue/40 bg-brand-blue/10"
          : "border-white/8 bg-white/[0.03]"
      }`}
    >
      <div>
        <div className="font-display text-sm font-semibold text-white">{name}</div>
        <div className="text-[11px] text-white/50">{meta}</div>
      </div>
      <div className={`font-display text-sm font-bold ${valueColor}`}>{value}</div>
    </div>
  );
}
