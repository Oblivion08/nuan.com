import Image from "next/image";
import { BookPreview, CustomerReviews, GameDemo } from "./components/InteractivePreviews";

const messenger = "https://m.me/61589244254642";
const facebook = "https://www.facebook.com/profile.php?id=61589244254642";
const tiktok = "https://www.tiktok.com/@nuanpastillas";

const branches = [
  {
    id: "learning",
    number: "01",
    eyebrow: "Play · Learn · Explore",
    title: "NUAN Learning Studio",
    description: "Interactive learning games and practical digital tools made to help students, teachers, and everyday learners move forward with confidence.",
    logo: "/assets/learning-logo.png",
    link: "#learning-products",
  },
  {
    id: "books",
    number: "02",
    eyebrow: "Stories with purpose",
    title: "NUAN Books",
    description: "Meaningful stories about discipline, faith, redirection, and transformation—written to stay with you beyond the final page.",
    logo: "/assets/books-logo.png",
    link: "#book-products",
  },
  {
    id: "pastillas",
    number: "03",
    eyebrow: "Wrapped with blessings",
    title: "NUAN Pastillas",
    description: "Creamy milk and ube treats, individually wrapped and thoughtfully packed for sharing, gifting, or enjoying one sweet moment at a time.",
    logo: "/assets/pastillas-logo.png",
    link: "#pastillas-products",
  },
];

const values = [
  ["Thoughtful", "Every idea begins with a real purpose and the people it hopes to serve."],
  ["Personal", "From stories to sweets, every NUAN experience is made to feel warm and human."],
  ["Growing", "NUAN brings different passions together and gives each one room to become more."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="NUAN by JLEL home">
          <Image src="/assets/nuan-logo.png" alt="NUAN by JLEL" width={86} height={100} priority />
        </a>
        <nav aria-label="Main navigation">
          <a href="#discover">Discover</a>
          <a href="#story">Our story</a>
          <a href="#values">Why NUAN</a>
        </nav>
        <a className="button button-small" href={messenger} target="_blank" rel="noreferrer">Message us <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> One meaningful dream. Many passions.</p>
          <h1>Created with heart.<br /><em>Made to inspire.</em></h1>
          <p className="lead">NUAN is a growing family of meaningful stories, engaging learning experiences, and sweet moments—brought together by purpose.</p>
          <div className="actions">
            <a className="button" href="#discover">Explore the NUAN family <span>↓</span></a>
            <a className="text-link" href="#story">Discover our story <span>→</span></a>
          </div>
          <div className="hero-proof" aria-label="NUAN brand categories">
            <span>Learning</span><i /> <span>Books</span><i /> <span>Pastillas</span>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-lockup"><Image src="/assets/nuan-logo.png" alt="" width={560} height={650} priority /></div>
        </div>
      </section>

      <section className="intro section" id="discover">
        <div className="section-heading">
          <div><p className="section-tag">The NUAN family</p><h2>One name.<br /><em>Many meaningful paths.</em></h2></div>
          <p>Explore the growing branches of NUAN—each created with its own purpose, personality, and way of bringing value to everyday life.</p>
        </div>
        <div className="branch-grid">
          {branches.map((branch) => (
            <a className={`branch-card ${branch.id}`} href={branch.link} key={branch.id}>
              <span className="card-number">{branch.number}</span>
              <div className="logo-frame"><Image src={branch.logo} alt={`${branch.title} logo`} width={1254} height={1254} /></div>
              <p className="card-kicker">{branch.eyebrow}</p>
              <h3>{branch.title}</h3>
              <p>{branch.description}</p>
              <span className="card-link">Explore this branch <b>↗</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="showcase learning-showcase" id="learning-products">
        <div className="showcase-copy">
          <p className="section-tag">NUAN Learning Studio</p>
          <h2>Learning that feels<br /><em>like an adventure.</em></h2>
          <p>Discover interactive educational games, classroom-ready experiences, and practical dashboards designed to make learning, teaching, and planning more engaging.</p>
          <ul className="feature-list"><li>Interactive learning games</li><li>Teacher-friendly digital tools</li><li>Custom dashboards and trackers</li></ul>
          <a className="button dark" href={messenger} target="_blank" rel="noreferrer">Ask about our resources <span>↗</span></a>
        </div>
        <GameDemo />
      </section>

      <section className="showcase books-showcase" id="book-products">
        <BookPreview />
        <div className="showcase-copy">
          <p className="section-tag">NUAN Books</p>
          <h2>Stories born from<br /><em>life, faith, and growth.</em></h2>
          <p>Books shaped by real journeys and honest reflections—created for readers who are learning to move through failure, redirection, and new beginnings.</p>
          <div className="book-notes"><p><strong>Mental Capital</strong><span>Finding discipline before profit</span></p><p><strong>The Gift Hidden in the Storm</strong><span>A story of redirection and transformation</span></p></div>
          <a className="button" href={messenger} target="_blank" rel="noreferrer">Inquire about the books <span>↗</span></a>
        </div>
      </section>

      <section className="showcase pastillas-showcase" id="pastillas-products">
        <div className="showcase-copy">
          <p className="section-tag">NUAN Pastillas</p>
          <h2>A little sweetness,<br /><em>thoughtfully wrapped.</em></h2>
          <p>Enjoy the familiar comfort of creamy pastillas in two well-loved flavors. Each piece is individually wrapped and packed with care—easy to share, give, or keep for your own cravings.</p>
          <div className="flavors"><span>Classic Milk</span><span>Ube</span><span>Individually wrapped</span></div>
          <p className="availability">Message us for current availability, orders, and pickup details.</p>
          <a className="button brown" href={messenger} target="_blank" rel="noreferrer">Order through Messenger <span>↗</span></a>
        </div>
        <div className="product-stage">
          <div className="product-card product-ube"><span>UBE</span><Image src="/assets/ube-pack-enhanced.webp" alt="NUAN ube pastillas pack" width={900} height={1350} /></div>
          <div className="product-card product-milk"><span>MILK</span><Image src="/assets/milk-pack-enhanced.webp" alt="NUAN milk pastillas pack" width={900} height={1350} /></div>
        </div>
      </section>

      <CustomerReviews />

      <section className="story" id="story">
        <div className="story-title"><p className="section-tag">Our beginning</p><h2>The Birth<br />of NUAN</h2><span className="story-line" /></div>
        <div className="story-text"><p className="story-lead">NUAN was born from many passions brought together by one meaningful dream.</p><p>It began with a love for creating, teaching, sharing stories, and making simple things that bring joy to others. What started as small ideas slowly grew into something more—a brand built with heart, purpose, and the hope of connecting with people in meaningful ways.</p><p>Every NUAN creation carries a story. Whether through food, learning, books, or new experiences, NUAN is a reminder that beautiful beginnings often come from following the things we truly love.</p><blockquote>“This is only the beginning of NUAN’s story—and we are grateful to have you as part of it.”</blockquote></div>
      </section>

      <section className="values section" id="values">
        <p className="section-tag">What guides us</p><h2>Made with meaning,<br /><em>in every form.</em></h2>
        <div className="values-grid">{values.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="contact">
        <Image src="/assets/nuan-logo.png" alt="NUAN by JLEL" width={560} height={650} />
        <p>Be part of the NUAN story</p><h2>Let’s create meaningful<br /><em>moments together.</em></h2>
        <div className="actions center"><a className="button" href={messenger} target="_blank" rel="noreferrer">Chat on Messenger <span>↗</span></a><a className="text-link light" href={facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a className="text-link light" href={tiktok} target="_blank" rel="noreferrer">TikTok @nuanpastillas ↗</a></div>
      </section>

      <footer><div><Image src="/assets/nuan-logo.png" alt="" width={42} height={48} /><span>© 2026 NUAN by JLEL. Made with heart.</span></div><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
