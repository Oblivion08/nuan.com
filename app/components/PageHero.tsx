import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, copy, actions }: { eyebrow: string; title: ReactNode; copy: string; actions?: ReactNode }) {
  return <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p>{actions ? <div className="actions">{actions}</div> : null}</div><div className="hero-rings" aria-hidden="true"><i /><i /><i /></div></section>;
}
