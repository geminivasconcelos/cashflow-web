"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import styles from "./layout.module.css";
// import HeaderActionsMobile from "./HeaderActionsMobile";
import Image from "next/image";

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

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className={styles.appShellTopNav}>
      <header className={styles.topNavHeader}>
        <div className={styles.topNavLeft}>
          {/* <span className={styles.logoCircle}> */}
          <img
            className={styles.imgLogo}
            src="/cashflow_sem_nome.png"
            alt="Logo"
          />
          {/* </span> */}
          <span className={styles.topNavBrand}>Cashflow</span>
        </div>
        <nav className={styles.topNavMenu} aria-label="Navegação principal">
          {navPrimary.map((item) => (
            <Link
              key={item.href}
              className={
                isActive(pathname, item.href)
                  ? styles.topNavMenuItemActive
                  : styles.topNavMenuItem
              }
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.topNavActions}>
   
          <span className="material-symbols-outlined">mode_night</span>
          <span className="material-symbols-outlined">notifications</span>
          <span className="material-symbols-outlined">settings</span>
          <div className={styles.avatarCircle}>
            <Image src="/avatar.png" alt="User" width={32} height={32} />
          </div>
        </div>
      </header>
      <main className={styles.contentTopNav}>
        <div className={styles.contentInner}>{children}</div>
      </main>
    </div>
  );
}
