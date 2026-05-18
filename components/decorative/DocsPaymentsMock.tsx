export function DocsPaymentsMock() {
  return (
    <div className="w-full max-w-[360px] mx-auto" aria-hidden="true">
      <div className="rounded-2xl border border-white/10 bg-brand-navy-mid p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-white/45">
            Hire Agreement
          </span>
          <span className="rounded-md bg-brand-amber/20 px-2 py-0.5 text-[10px] font-display font-bold text-brand-amber">
            PENDING
          </span>
        </div>
        <div className="font-display text-sm font-bold text-white">Apex Site Services Ltd</div>
        <div className="text-xs text-white/40 mt-1">Transit Custom · 5 days · £560</div>
        <div className="mt-4 rounded-lg border border-dashed border-brand-blue/40 bg-brand-blue/10 p-3 text-center">
          <div className="font-display text-[11px] font-semibold text-white/55 mb-1">
            Awaiting e-signature
          </div>
          <div className="text-[10px] text-white/35">Sent via SMS · 2 hours ago</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] p-4">
        <div>
          <div className="font-display text-xs font-bold text-white/85">Payment collected</div>
          <div className="text-[11px] text-white/40">Durham Plant Hire</div>
        </div>
        <div className="font-display text-base font-bold text-brand-green">£4,200</div>
      </div>
    </div>
  );
}
