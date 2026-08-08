import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { messenger, projects } from "../lib/site-data";

export const metadata: Metadata = { title: "NUAN Learning Studio | Digital Projects and Portfolio", description: "Explore NUAN Learning Studio educational games, websites, trackers, dashboards, books, and meaningful digital solutions.", openGraph: { title: "NUAN Learning Studio | Digital Projects and Portfolio", description: "Education, creativity, business, and technology brought together by NUAN." } };

export default function PortfolioPage() {
  return <main><PageHero eyebrow="NUAN Learning Studio · By JLEL" title={<>Digital projects made<br /><em>understandable and useful.</em></>} copy="NUAN combines education, creativity, business, and technology to create meaningful digital experiences for learners, teachers, small businesses, and everyday users." actions={<Link className="button" href="/contact">Start a project inquiry →</Link>} />
    <section className="section studio-intro"><div><p className="section-tag">Our approach</p><h2>Human ideas first.<br /><em>Technology with purpose.</em></h2></div><div><p>Our work does not need to feel overly technical. We focus on clear experiences, practical outcomes, and visuals that help users understand what to do next.</p><div className="studio-points"><span>Education</span><span>Creativity</span><span>Business</span><span>Technology</span></div></div></section>
    <section className="section portfolio-section"><header className="center-heading"><p className="section-tag">Selected work</p><h2>Projects across learning,<br /><em>business, and reflection.</em></h2></header><div className="portfolio-grid">{projects.map((project)=><article className="portfolio-card" key={project.title}><div className="portfolio-image"><Image src={project.image} alt={`${project.title} screenshot`} width={1000} height={700} /></div><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><dl><div><dt>For</dt><dd>{project.audience}</dd></div><div><dt>Format</dt><dd>{project.tools}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div></dl><a href={messenger} target="_blank" rel="noreferrer">Learn more or request a demo →</a></div></article>)}</div></section>
    <section className="video-showcase"><div><p className="section-tag">Game preview</p><h2>Chronos Citadel</h2><p>See how a learning activity can feel like a focused digital mission on a laptop or desktop.</p></div><video controls playsInline preload="metadata" poster="/assets/chronos.png"><source src="/assets/chronos-citadel-preview.mp4" type="video/mp4" /></video></section>
    <section className="cta-band"><p>Have an idea for learners, clients, or your own business?</p><h2>Let’s turn it into a clear digital experience.</h2><div className="actions"><Link className="button" href="/contact">Discuss your project →</Link><a className="text-link light" href={messenger} target="_blank" rel="noreferrer">Messenger ↗</a></div></section>
  </main>;
}
