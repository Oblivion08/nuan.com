"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { messenger } from "../lib/site-data";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/portfolio", "Portfolio"],
  ["/contact", "Contact"],
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <Link className="site-brand" href="/" onClick={() => setOpen(false)} aria-label="NUAN home">
        <Image src="/assets/nuan-logo.png" alt="NUAN by JLEL" width={86} height={100} priority />
        <span><b>NUAN</b><small>By JLEL</small></span>
      </Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation">
        <span /><span /><span /><span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="primary-navigation" className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="nav-cta" href={messenger} target="_blank" rel="noreferrer">Message us ↗</a>
      </nav>
    </header>
  );
}
