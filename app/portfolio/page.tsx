import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { projects } from "../lib/site-data";

export const metadata: Metadata = {
  title: "NUAN Learning Studio | Digital Learning and Business Solutions",
  description: "Explore built and tested NUAN Learning Studio educational experiences, dashboards, trackers, and practical digital systems.",
  openGraph: { title: "NUAN Learning Studio | Digital Learning and Business Solutions", description: "Digital learning experiences and practical systems for classrooms, creators, and growing businesses." },
};

const projectGroups = [
  {
    label: "Learning Experiences",
    copy: "Interactive projects that turn lessons into focused, memorable activities.",
    titles: ["Chronos Citadel", "AP8 Adventure Hub"],
  },
  {
    label: "Business Systems",
    copy: "Practical dashboards and trackers that make everyday records easier to understand.",
    titles: ["NUAN Business Manager", "Income & Expense Tracker", "Trading Journal"],
  },
  {
    label: "Web Experiences",
    copy: "Responsive digital workspaces designed around a clear user goal.",
    titles: ["Teacher Dashboard"],
  },
] as const;

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="NUAN Learning Studio · Digital Solutions Studio"
        title={<>Useful technology,<br /><em>made human.</em></>}
        copy="Digital learning experiences and practical systems for classrooms, creators, and growing businesses."
        actions={<Link className="button" href="/contact">Start a Project</Link>}
      />

      <section className="section studio-intro compact-studio-intro">
        <div><p className="section-tag">How we work</p><h2>Clear goals first.<br /><em>Technology with purpose.</em></h2></div>
        <div><p>Every project begins with the people who will use it. We focus on understandable flows, practical outcomes, and responsive experiences.</p><div className="studio-points"><span>Learning experiences</span><span>Business systems</span><span>Web experiences</span></div></div>
      </section>

      <section className="section portfolio-section grouped-portfolio">
        <header className="center-heading"><p className="section-tag">Built &amp; Tested Projects</p><h2>Proof of work,<br /><em>organized by purpose.</em></h2></header>
        {projectGroups.map((group) => {
          const items = group.titles.map((title) => projects.find((project) => project.title === title)).filter((project) => project !== undefined);
          return (
            <section className="portfolio-group" key={group.label} aria-labelledby={`group-${group.label.replaceAll(" ", "-").toLowerCase()}`}>
              <header><div><p className="category">{group.label}</p><h3 id={`group-${group.label.replaceAll(" ", "-").toLowerCase()}`}>{group.label}</h3></div><p>{group.copy}</p></header>
              <div className="portfolio-grid">
                {items.map((project) => {
                  const isGame = project.category === "Educational Game";
                  return (
                    <article className="portfolio-card" key={project.title}>
                      <div className={`portfolio-image ${isGame ? "cover" : "contain"}`}><Image src={project.image} alt={`${project.title} project screenshot`} width={1000} height={700} sizes="(max-width: 620px) 92vw, (max-width: 980px) 46vw, 570px" /></div>
                      <div><span>{project.tools}</span><h3>{project.title}</h3><p>{project.description}</p><dl><div><dt>Designed for</dt><dd>{project.audience}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div></dl><Link className="card-cta" href="/contact">Start a Project →</Link></div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>

      <section className="video-showcase"><div><p className="section-tag">Playable work preview</p><h2>Chronos Citadel</h2><p>A landscape learning experience designed for clear viewing on laptop and desktop screens.</p></div><video controls playsInline preload="metadata" poster="/assets/chronos.png" aria-label="Chronos Citadel gameplay preview"><source src="/assets/chronos-citadel-preview.mp4" type="video/mp4" /></video></section>

      <section className="final-cta"><p className="section-tag">A useful idea deserves a clear experience</p><h2>Ready to start a digital project?</h2><p>Share the audience, goal, and format you have in mind. NUAN Learning Studio will help clarify the next step.</p><div className="actions"><Link className="button button-primary" href="/contact">Start a Project</Link></div></section>
    </main>
  );
}
