// Compact decorative mockups for the Features overview page.
// Smaller / simpler than the deep-dive page mockups — these are inline
// previews of what each feature looks like, with the full visual on the
// dedicated /features/<slug> page.

export function CrmRecordMock() {
  return (
    <div className="w-full max-w-[340px] mx-auto rounded-2xl border border-white/10 bg-brand-navy-mid p-5 shadow-xl" aria-hidden="true">
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/10">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-blue font-display text-sm font-bold text-white">
          AS
        </span>
        <div>
          <div className="font-display text-sm font-bold text-white/90">Apex Site Services</div>
          <div className="text-[10px] text-white/40">Business · Since Jan 2024</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-md bg-white/[0.05] p-2.5 text-center">
          <div className="font-display text-lg font-bold text-white">7</div>
          <div className="text-[10px] text-white/40">Total Hires</div>
        </div>
        <div className="rounded-md bg-white/[0.05] p-2.5 text-center">
          <div className="font-display text-lg font-bold text-brand-green">£9,800</div>
          <div className="text-[10px] text-white/40">Total Value</div>
        </div>
      </div>

      <div className="font-display text-[10px] font-semibold uppercase tracking-wide text-white/30 mb-1.5">
        Recent activity
      </div>
      <ul className="text-[11px] text-white/55 leading-relaxed flex flex-col gap-0.5">
        <li>✓ Hire agreement signed · 2 days ago</li>
        <li>✓ Quote #0047 sent · 3 days ago</li>
        <li>✓ SMS follow-up sent · 4 days ago</li>
      </ul>
    </div>
  );
}

export function ReportingMock() {
  const bars = [40, 60, 50, 75, 90, 85];
  return (
    <div className="w-full max-w-[340px] mx-auto rounded-2xl border border-white/10 bg-brand-navy-mid p-5 shadow-xl" aria-hidden="true">
      <div className="font-display text-[10px] font-bold uppercase tracking-wide text-white/40 mb-3">
        Conversion Rate
      </div>
      <div className="flex items-end gap-2 h-20 mb-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i >= bars.length - 2 ? "bg-brand-blue" : "bg-brand-blue/40"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-md bg-white/[0.05] p-2.5">
          <div className="font-display text-lg font-bold text-white">68%</div>
          <div className="text-[10px] text-white/40">Conversion rate</div>
        </div>
        <div className="rounded-md border border-brand-green/30 bg-brand-green/10 p-2.5">
          <div className="font-display text-lg font-bold text-brand-green">+12%</div>
          <div className="text-[10px] text-white/40">vs last month</div>
        </div>
      </div>
    </div>
  );
}

export function CheckInTimelineMock() {
  const items = [
    { day: "Day 1", label: "Welcome on Hire", color: "bg-brand-blue" },
    { day: "4 Weeks", label: "Mileage Check", color: "bg-brand-blue" },
    { day: "6 Weeks", label: "Full Check-In", color: "bg-brand-amber" },
    { day: "3 Months", label: "Review + Renewal", color: "bg-brand-amber" },
    { day: "30 Days Out", label: "Renewal Conversation", color: "bg-brand-green" },
    { day: "5 Days Out", label: "Final Confirmation", color: "bg-brand-green" },
  ];
  return (
    <div className="w-full max-w-[320px] mx-auto" aria-hidden="true">
      {items.map((it, i) => (
        <div key={it.label} className="flex gap-3 items-start">
          <div className="flex flex-col items-center w-4 shrink-0">
            <span className={`mt-1 size-3 rounded-full ${it.color}`} />
            {i < items.length - 1 && <span className="w-px flex-1 bg-white/15 my-1 min-h-[24px]" />}
          </div>
          <div className="pb-3 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-display text-xs font-bold text-white/85">{it.label}</span>
              <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-display font-semibold text-white/40">
                {it.day}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function OnboardingChecklistMock() {
  const docs = [
    { label: "Hire agreement", status: "Signed", color: "text-brand-green" },
    { label: "Driving licence", status: "Received", color: "text-brand-green" },
    { label: "Insurance cert.", status: "Pending", color: "text-brand-amber" },
    { label: "Deposit payment", status: "Received", color: "text-brand-green" },
  ];
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-2xl border border-white/10 bg-brand-navy-mid p-5 shadow-xl" aria-hidden="true">
      <div className="font-display text-[10px] font-bold uppercase tracking-wide text-white/40 mb-3">
        Onboarding Status
      </div>
      <ul className="flex flex-col">
        {docs.map((d, i) => (
          <li
            key={d.label}
            className={`flex items-center justify-between py-2.5 ${i < docs.length - 1 ? "border-b border-white/[0.06]" : ""}`}
          >
            <span className="text-sm text-white/65">{d.label}</span>
            <span className={`font-display text-[10px] font-bold ${d.color}`}>{d.status}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-md border border-brand-amber/30 bg-brand-amber/10 p-2 text-center text-[11px] font-display font-semibold text-brand-amber">
        1 document still needed
      </div>
    </div>
  );
}

export function SocialCalendarMock() {
  const posts = [
    { day: "Mon", content: "Fleet update — new Sprinters now available", channel: "FB + IG" },
    { day: "Wed", content: "Did you know we offer same-day van hire?", channel: "IG" },
    { day: "Fri", content: "Weekend hire — book by Thursday midday", channel: "FB" },
  ];
  return (
    <div className="w-full max-w-[320px] mx-auto rounded-2xl border border-white/10 bg-brand-navy-mid p-5 shadow-xl" aria-hidden="true">
      <div className="font-display text-[10px] font-bold uppercase tracking-wide text-white/40 mb-3">
        Scheduled Posts
      </div>
      <ul className="flex flex-col">
        {posts.map((p, i) => (
          <li
            key={p.day}
            className={`flex gap-3 items-start py-2.5 ${i < posts.length - 1 ? "border-b border-white/[0.06]" : ""}`}
          >
            <span className="shrink-0 mt-0.5 rounded bg-brand-blue/20 px-2 py-0.5 font-display text-[10px] font-bold text-brand-blue">
              {p.day}
            </span>
            <div className="flex-1">
              <div className="text-xs text-white/70 leading-snug">{p.content}</div>
              <div className="text-[10px] text-white/35 mt-0.5">{p.channel}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppPhoneMock() {
  const deals = [
    { name: "Hartley Svcs", stage: "New", color: "bg-brand-blue/25 text-brand-blue" },
    { name: "Nexus Contractors", stage: "Quoted", color: "bg-brand-amber/20 text-brand-amber" },
    { name: "Apex Sites", stage: "Confirmed", color: "bg-brand-green/20 text-brand-green" },
  ];
  return (
    <div className="w-full max-w-[300px] mx-auto rounded-3xl bg-brand-navy-mid p-5 shadow-2xl" aria-hidden="true">
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-display text-xs font-bold text-white/90">Pipeline</div>
          <span className="rounded border border-brand-blue/40 bg-brand-blue/25 px-2 py-0.5 font-display text-[9px] font-bold text-brand-blue">
            3 new today
          </span>
        </div>
        <ul className="flex flex-col gap-1.5">
          {deals.map((d) => (
            <li
              key={d.name}
              className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.04] px-3 py-2"
            >
              <span className="font-display text-[11px] font-bold text-white/85">{d.name}</span>
              <span className={`rounded px-1.5 py-0.5 text-[9px] font-display font-bold ${d.color}`}>
                {d.stage}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.08] px-3 py-2.5">
        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/30 text-brand-blue">
          <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </span>
        <div>
          <div className="font-display text-[11px] font-bold text-white/90">New enquiry — Pinnacle</div>
          <div className="text-[10px] text-white/40">Just now via web form</div>
        </div>
      </div>
    </div>
  );
}
