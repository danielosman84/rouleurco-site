type Channel = "SMS" | "Email" | "FB" | "Web";

type Message = {
  initials: string;
  name: string;
  channel: Channel;
  preview: string;
  unread?: boolean;
  avatarColor?: string;
};

const messages: Message[] = [
  { initials: "HS", name: "Hartley Svcs", channel: "SMS", preview: "Hi, is the Transit still available for next week?", unread: true, avatarColor: "bg-brand-blue" },
  { initials: "PL", name: "Pinnacle Log.", channel: "Email", preview: "Could you send over the weekly rate for a Sprinter?", unread: true, avatarColor: "bg-indigo-500" },
  { initials: "CB", name: "CityBuild Ltd", channel: "FB", preview: "Saw your post — do you do long-term hire?", avatarColor: "bg-emerald-600" },
];

const channelClasses: Record<Channel, string> = {
  SMS: "bg-brand-blue/15 text-brand-blue",
  Email: "bg-indigo-500/15 text-indigo-300",
  FB: "bg-blue-600/15 text-blue-300",
  Web: "bg-emerald-500/15 text-emerald-300",
};

export function MiniInboxMock() {
  return (
    <div
      className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-brand-navy-mid p-4 shadow-2xl"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
        <div className="font-display text-sm font-semibold text-white">All Messages</div>
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-blue text-[11px] font-bold text-white">
          {messages.filter((m) => m.unread).length}
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {messages.map((m) => (
          <li
            key={m.name}
            className={`flex gap-3 rounded-lg p-2.5 ${
              m.unread ? "bg-white/[0.04]" : ""
            }`}
          >
            <span
              className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white ${m.avatarColor ?? "bg-brand-blue"}`}
            >
              {m.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <div className="font-display text-sm font-semibold text-white truncate">
                  {m.name}
                </div>
                <span
                  className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-display font-semibold ${channelClasses[m.channel]}`}
                >
                  {m.channel}
                </span>
              </div>
              <div className="text-xs text-white/55 truncate">{m.preview}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
