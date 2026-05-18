export function LogosBar() {
  const items = [
    "Van Hire",
    "Car Rental",
    "Commercial Vehicles",
    "Multi-Location Fleets",
    "Specialist Hire",
  ];
  return (
    <div className="border-y border-brand-mid bg-brand-off-white py-10">
      <div className="container-rc">
        <p className="text-center text-xs font-display font-semibold uppercase tracking-[0.12em] text-brand-muted mb-6">
          Designed for operators running
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((i) => (
            <span
              key={i}
              className="font-display text-sm font-semibold text-brand-text-2"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
