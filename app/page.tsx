import Image from "next/image";
import Link from "next/link";
import { CustomerReviews } from "./components/InteractivePreviews";

const branches = [
  {
    label: "Handcrafted treats",
    title: "NUAN Pastillas",
    image: "/assets/pastillas-logo.png",
    copy: "Handcrafted sweet treats made for simple moments worth sharing.",
    href: "/products#pastillas",
    cta: "Order Now",
  },
  {
    label: "Meaningful reads",
    title: "NUAN Books",
    image: "/assets/books-logo.png",
    copy: "Meaningful stories and practical reads designed to inspire reflection and growth.",
    href: "/products#books",
    cta: "Explore the Books",
  },
  {
    label: "Digital solutions studio",
    title: "NUAN Learning Studio",
    image: "/assets/learning-logo.png",
    copy: "Digital learning experiences and practical systems for classrooms, creators, and growing businesses.",
    href: "/portfolio",
    cta: "Start a Project",
  },
] as const;

const highlights = [
  {
    branch: "NUAN Pastillas",
    title: "Classic Milk Pastillas",
    copy: "A creamy, individually wrapped favorite prepared for sharing and gifting.",
    image: "/assets/milk-pack-enhanced.webp",
    href: "/products#pastillas",
    cta: "Order Now",
    portrait: true,
  },
  {
    branch: "NUAN Books",
    title: "Mental Capital",
    copy: "A digital book about discipline, faith, failure, and rebuilding trust in every decision.",
    image: "/assets/mental-capital.png",
    href: "/products#books",
    cta: "Explore the Books",
    portrait: true,
  },
  {
    branch: "NUAN Learning Studio",
    title: "Chronos Citadel",
    copy: "A built and tested interactive learning experience that turns history and geography into a focused mission.",
    image: "/assets/chronos.png",
    href: "/portfolio",
    cta: "Start a Project",
    portrait: false,
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="home-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">One meaningful dream · Three creative branches</p>
          <h1><span className="hero-name">NUAN</span>Created with Heart.<br /><em>Made to Inspire.</em></h1>
          <p>Explore handcrafted treats, meaningful books, and practical digital learning and business solutions.</p>
          <div className="actions">
            <Link className="button button-primary" href="#branches">Explore NUAN</Link>
            <Link className="button button-secondary" href="/contact">Send an Inquiry</Link>
          </div>
          <div className="hero-proof" aria-label="The three NUAN branches">
            <span>NUAN Pastillas</span><i /><span>NUAN Books</span><i /><span>NUAN Learning Studio</span>
          </div>
        </div>
        <div className="hero-logo">
          <div className="orbit one" /><div className="orbit two" />
          <Image src="/assets/nuan-logo.png" alt="Official NUAN logo" width={560} height={650} priority sizes="(max-width: 620px) 250px, (max-width: 980px) 330px, 430px" />
        </div>
      </section>

      <section className="section intro-section branch-section" id="branches">
        <header className="section-heading">
          <div><p className="section-tag">Explore NUAN</p><h2>One brand.<br /><em>Three clear paths.</em></h2></div>
          <p>Choose the NUAN branch that fits what you need today.</p>
        </header>
        <div className="feature-grid branch-grid">
          {branches.map((branch) => (
            <article className="feature-card branch-card" key={branch.title}>
              <div className="branch-visual"><Image src={branch.image} alt={`${branch.title} logo`} width={600} height={600} sizes="(max-width: 620px) 90vw, (max-width: 980px) 45vw, 390px" /></div>
              <div className="branch-copy"><p className="category">{branch.label}</p><h3>{branch.title}</h3><p>{branch.copy}</p><Link className="card-cta" href={branch.href}>{branch.cta} →</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section selected-highlights">
        <header className="center-heading"><p className="section-tag">Selected highlights</p><h2>A closer look at<br /><em>each NUAN branch.</em></h2></header>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <div className={`highlight-image ${item.portrait ? "portrait" : "landscape"}`}><Image src={item.image} alt={item.title} width={900} height={900} sizes="(max-width: 620px) 90vw, (max-width: 980px) 45vw, 390px" /></div>
              <div><p className="category">{item.branch}</p><h3>{item.title}</h3><p>{item.copy}</p><Link className="card-cta" href={item.href}>{item.cta} →</Link></div>
            </article>
          ))}
        </div>
      </section>

      <CustomerReviews />

      <section className="final-cta" aria-labelledby="final-cta-title">
        <p className="section-tag">Choose what fits you</p>
        <h2 id="final-cta-title">Ready to explore NUAN?</h2>
        <p>Whether you’re looking for something sweet, a meaningful read, or a digital solution, choose the NUAN branch that fits what you need.</p>
        <div className="actions"><Link className="button button-primary" href="#branches">Explore NUAN</Link><Link className="button button-outline-light" href="/contact">Send an Inquiry</Link></div>
      </section>
    </main>
  );
}
