type NodeKind = "trigger" | "delay" | "action";

type Node = {
  kind: NodeKind;
  label: string;
  sub: string;
};

const nodes: Node[] = [
  { kind: "trigger", label: "Trigger: Quote Sent", sub: "When a quote is marked as sent" },
  { kind: "delay", label: "Wait: 24 hours", sub: "If no reply received" },
  { kind: "action", label: "Action: Send SMS Follow-up", sub: "Personalised to customer name + vehicle" },
  { kind: "delay", label: "Wait: 48 hours", sub: "If still no reply" },
  { kind: "action", label: "Action: Send Email Follow-up", sub: "With quote attached" },
];

const kindClasses: Record<NodeKind, { dot: string; ring: string; label: string }> = {
  trigger: { dot: "bg-brand-blue", ring: "ring-brand-blue/40", label: "text-brand-blue" },
  delay: { dot: "bg-brand-amber", ring: "ring-brand-amber/40", label: "text-brand-amber" },
  action: { dot: "bg-brand-green", ring: "ring-brand-green/40", label: "text-brand-green" },
};

export function AutomationFlowMock() {
  return (
    <div className="w-full max-w-[340px] mx-auto" aria-hidden="true">
      {nodes.map((n, i) => {
        const c = kindClasses[n.kind];
        return (
          <div key={i}>
            <div
              className={`flex items-start gap-3 rounded-xl border border-white/10 bg-brand-navy-mid p-3.5 ring-1 ${c.ring}`}
            >
              <span className={`mt-1.5 inline-block size-2.5 rounded-full ${c.dot}`} />
              <div>
                <div className={`font-display text-xs font-semibold uppercase tracking-wide ${c.label}`}>
                  {n.label}
                </div>
                <div className="text-xs text-white/55 mt-0.5">{n.sub}</div>
              </div>
            </div>
            {i < nodes.length - 1 && (
              <div className="ml-[18px] h-5 w-px bg-white/15" />
            )}
          </div>
        );
      })}
    </div>
  );
}
