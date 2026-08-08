"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  ["/", "Home"],
  ["/products#pastillas", "Pastillas"],
  ["/products#books", "Books"],
  ["/portfolio", "Learning Studio"],
  ["/about", "About"],
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
        {links.map(([href, label]) => <Link key={href} href={href} className={!href.includes("#") && pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Send an Inquiry</Link>
      </nav>
    </header>
  );
}
