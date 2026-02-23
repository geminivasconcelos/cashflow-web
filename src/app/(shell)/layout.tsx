'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navPrimary = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/transitions", label: "Transações" },
  { href: "/wallet", label: "Carteiras" },
  { href: "/goals", label: "Metas" },
  { href: "/budget", label: "Budget" },
  { href: "/analytics", label: "Analytics" },
  { href: "/settings", label: "Settings" },
];

const navSecondary = [
  { href: "#help", label: "Help" },
  { href: "#logout", label: "Log out" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles.appShell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>FinSet</div>
        <nav className={styles.menu} aria-label="Navegação principal">
          {navPrimary.map((item) => (
            <Link
              key={item.href}
              className={`${styles.menuItem} ${isActive(pathname, item.href) ? styles.menuItemActive : ""}`}
              href={item.href}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.menuSpacer} />
        <nav className={styles.menuSecondary} aria-label="Navegação secundária">
          {navSecondary.map((item) => (
            <Link key={item.href} className={styles.menuItem} href={item.href}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
