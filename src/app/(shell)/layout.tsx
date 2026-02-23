'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
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
  const [collapsed, setCollapsed] = useState(false);

  const appShellClass = collapsed
    ? `${styles.appShell} ${styles.appShellCollapsed}`
    : styles.appShell;

  return (
    <div className={appShellClass}>
      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brand + (collapsed ? ' ' + styles.brandCollapsed : '')}>
            {collapsed ? <span className={styles.brandInitial}>CF</span> : "CashFlow"}
          </div>
          <button
            type="button"
            className={styles.collapseButton}
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
        <nav className={styles.menu} aria-label="Navegação principal">
          {navPrimary.map((item) => (
            <Link
              key={item.href}
              className={`${styles.menuItem} ${isActive(pathname, item.href) ? styles.menuItemActive : ""}`}
              href={item.href}
            >
              <span className={styles.menuInitial}>{item.label.charAt(0)}</span>
              <span className={styles.menuText}>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.menuSpacer} />
        <nav className={styles.menuSecondary} aria-label="Navegação secundária">
          {navSecondary.map((item) => (
            <Link key={item.href} className={styles.menuItem} href={item.href}>
              <span className={styles.menuInitial}>{item.label.charAt(0)}</span>
              <span className={styles.menuText}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </main>
    </div>
  );
}
