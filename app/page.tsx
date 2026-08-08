import Image from "next/image";
import Link from "next/link";
import { CustomerReviews } from "./components/InteractivePreviews";
import { messenger, products, projects } from "./lib/site-data";

export default function Home() {
  return <main>
    <section className="home-hero"><div className="hero-copy"><p className="eyebrow">One meaningful dream · Three creative branches</p><h1>Created with heart.<br /><em>Made to inspire.</em></h1><p>Meet NUAN Pastillas, NUAN Books, and NUAN Learning Studio—three branches creating sweet moments, meaningful stories, and useful digital experiences.</p><div className="actions"><Link className="button" href="#branches">Choose a NUAN branch →</Link><Link className="text-link" href="/contact">Order or start a project</Link></div><div className="hero-proof"><span>NUAN Pastillas</span><i /><span>NUAN Books</span><i /><span>NUAN Learning Studio</span></div></div><div className="hero-logo"><div className="orbit one" /><div className="orbit two" /><Image src="/assets/nuan-logo.png" alt="NUAN by JLEL" width={560} height={650} priority /></div></section>

    <section className="section intro-section" id="branches"><header className="section-heading"><div><p className="section-tag">The NUAN family</p><h2>Three distinct branches.<br /><em>One purposeful name.</em></h2></div><p>Choose the branch that matches what you need, then explore its products, stories, or digital work.</p></header><div className="feature-grid">{[
      ["NUAN Pastillas", "/assets/pastillas-logo.png", "Thoughtfully wrapped milk and ube treats for sharing, gifting, and sweet moments.", "/products#pastillas"],
      ["NUAN Books", "/assets/books-logo.png", "Purpose-driven stories about discipline, faith, redirection, and transformation.", "/products#books"],
      ["NUAN Learning Studio", "/assets/learning-logo.png", "Educational games, trackers, dashboards, websites, and useful digital solutions.", "/portfolio"],
    ].map(([title,image,copy,href])=><Link className="feature-card" href={href} key={title}><Image src={image} alt={`${title} by NUAN`} width={600} height={600} /><div><h3>{title}</h3><p>{copy}</p><span>Explore →</span></div></Link>)}</div></section>

    <section className="section featured-products"><header className="center-heading"><p className="section-tag">Featured products</p><h2>Made to be enjoyed,<br /><em>read, and remembered.</em></h2></header><div className="product-grid">{products.slice(0,4).map((item)=><article className="product-tile" key={item.title}><div className="product-image"><Image src={item.image} alt={item.title} width={700} height={900} /></div><p className="category">{item.category}</p><h3>{item.title}</h3><p>{item.description}</p><Link href={`/products#${item.category.toLowerCase()}`}>View details →</Link></article>)}</div></section>

    <section className="section project-preview"><div className="split-heading"><div><p className="section-tag">NUAN Learning Studio</p><h2>Creativity meets<br /><em>useful technology.</em></h2></div><div><p>Educational games and practical systems designed for learners, teachers, individuals, and growing businesses.</p><Link className="button dark" href="/portfolio">View digital projects →</Link></div></div><div className="portfolio-grid compact">{projects.slice(0,3).map((project)=><article className="portfolio-card" key={project.title}><Image src={project.image} alt={project.title} width={900} height={600} /><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div></section>

    <section className="story-preview"><div><p className="section-tag">The NUAN story</p><h2>Many passions,<br />one meaningful beginning.</h2></div><div><p>NUAN began with a love for creating, teaching, sharing stories, and making simple things that bring joy. Today, those ideas continue to grow under one name.</p><Link className="text-link" href="/about">Read our story →</Link></div></section>
    <section className="section trust-order" aria-labelledby="order-title"><header className="center-heading"><p className="section-tag">A clear way forward</p><h2 id="order-title">From interest to confirmation,<br /><em>one simple step at a time.</em></h2><p>Whether you are ordering a treat, asking about a book, or planning a digital project, a real person confirms the important details with you.</p></header><div className="order-steps">{[
      ["01", "Choose your branch", "Browse NUAN Pastillas, NUAN Books, or NUAN Learning Studio and select what fits your need."],
      ["02", "Send your inquiry", "Share the product, quantity, preferred format, or project goal through the inquiry form or Messenger."],
      ["03", "Confirm the details", "NUAN confirms availability, price, delivery or access, timeline, and payment instructions before you proceed."],
    ].map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="trust-strip"><span>✓ No payment collected on this website</span><span>✓ Direct confirmation from NUAN</span><span>✓ Real customer feedback</span><span>✓ Replies during 8:00 AM–5:00 PM</span></div><div className="center-actions"><Link className="button" href="/contact">Start an inquiry →</Link><a className="text-link" href={messenger} target="_blank" rel="noreferrer">Continue through Messenger ↗</a></div></section>
    <CustomerReviews />
    <section className="cta-band"><p>Wrapped with Blessings, Made with Love.</p><h2>Have a product question or a project idea?</h2><div className="actions"><Link className="button" href="/contact">Order or inquire now →</Link><a className="text-link light" href={messenger} target="_blank" rel="noreferrer">Chat on Messenger ↗</a></div></section>
  </main>;
}
