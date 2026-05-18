import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav } from "./nav-config";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-rc py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4 max-w-sm">
            <Logo variant="light" />
            <p className="text-white/70 text-sm leading-relaxed">
              Enterprise-level sales and automation tools, configured specifically for independent UK vehicle rental companies.
            </p>
          </div>

          <FooterColumn title="Platform" items={footerNav.platform} />
          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="For Operators" items={footerNav.forOperators} />
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} RouleurCo. All rights reserved.</div>
          <div className="flex gap-5">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-display font-semibold uppercase tracking-wide text-white/60">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-white/85 hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
