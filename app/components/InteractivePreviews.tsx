"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type DemoMode = "battle" | "escape";

const demos = {
  battle: {
    number: "01",
    title: "Chronos Citadel",
    subtitle: "An interactive geography and history mission",
    video: "/assets/chronos-citadel-preview.mp4",
    poster: "/assets/game-character-battle.webp",
    format: "Landscape learning adventure",
  },
  escape: {
    number: "02",
    title: "AP8 Adventure Hub",
    subtitle: "Quest-based Araling Panlipunan experiences",
    video: "/assets/ap8-adventure-preview.mp4",
    poster: "/assets/game-escape-room.webp",
    format: "Mobile learning experience",
  },
};

export function GameDemo() {
  const [mode, setMode] = useState<DemoMode>("battle");
  const demo = demos[mode];

  return (
    <div className="game-reel">
      <div className="reel-heading">
        <div><span className="live-dot" /> GAME PREVIEW</div>
        <span>See learning in motion</span>
      </div>
      <div className="reel-tabs" role="tablist" aria-label="Choose a game preview">
        {(Object.keys(demos) as DemoMode[]).map((key) => (
          <button key={key} className={mode === key ? "active" : ""} onClick={() => setMode(key)} role="tab" aria-selected={mode === key}>
            <span>{demos[key].number}</span>{demos[key].title}
          </button>
        ))}
      </div>
      <div className="reel-stage">
        <div className={`video-device ${mode === "escape" ? "portrait" : "landscape"}`}>
          <video key={demo.video} autoPlay muted loop playsInline controls preload="metadata" poster={demo.poster} aria-label={`${demo.title} gameplay preview`}>
            <source src={demo.video} type="video/mp4" />
          </video>
        </div>
        <div className="reel-caption">
          <p>{demo.format}</p>
          <h3>{demo.title}</h3>
          <span>{demo.subtitle}</span>
        </div>
      </div>
    </div>
  );
}

const books = [
  {
    title: "Mental Capital",
    cover: "/assets/mental-capital.png",
    video: "/assets/mental-capital-preview.mp4",
    label: "Book One · Trading Psychology",
    subtitle: "Finding Discipline Before Profit",
    summary: "A personal journey through trading, failure, faith, and self-discovery—written for anyone learning that lasting progress begins with the person behind every decision.",
    quote: "The market did not only test the strategy—it revealed the person behind every decision.",
    highlights: [
      "Discipline before profit",
      "Emotional resilience after loss",
      "Faith, reflection, and rebuilding trust",
    ],
  },
  {
    title: "The Gift Hidden in the Storm",
    cover: "/assets/gift-storm.png",
    video: "/assets/gift-storm-preview-v2.mp4",
    label: "Book Two · Faith & Transformation",
    subtitle: "A Journey of Redirection, Protection, and Transformation",
    summary: "A story shaped by unexpected endings and purposeful beginnings—an invitation to see how redirection can become protection when the timing is finally understood.",
    quote: "Some storms do not arrive to destroy a dream. They arrive to reveal a different road.",
    highlights: [
      "Redirection as protection",
      "Faith through uncertain seasons",
      "Purpose, timing, and transformation",
    ],
  },
];

export function BookPreview() {
  return (
    <div className="book-library">
      {books.map((book, index) => (
        <article className={`book-feature ${index === 1 ? "reverse" : ""}`} key={book.title}>
          <div className="book-cover-showcase">
            <div className="cover-glow" />
            <Image src={book.cover} alt={`${book.title} full book cover`} width={610} height={722} sizes="(max-width: 700px) 86vw, 35vw" />
            <span>NUAN BOOKS · {String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="book-feature-copy">
            <p className="book-label">{book.label}</p>
            <h3>{book.title}</h3>
            <h4>{book.subtitle}</h4>
            <p className="book-summary">{book.summary}</p>
            <div className="book-highlight-list">
              <p>Inside this story</p>
              <ul>{book.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
            <blockquote>“{book.quote}”</blockquote>
            <a className="button book-inquiry" href="https://m.me/61589244254642" target="_blank" rel="noreferrer">Ask about this book <span>↗</span></a>
          </div>
          <div className="book-walkthrough">
            <div className="walkthrough-top"><span className="live-dot" /> DIGITAL BOOK PREVIEW <b>Press play</b></div>
            <video muted loop playsInline controls preload="metadata" poster={book.cover} aria-label={`${book.title} reading experience preview`}>
              <source src={book.video} type="video/mp4" />
            </video>
            <p>A brief look at the digital reading experience.</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const reviews = [
  ["Sobrang sarap po, Ma’am. Hindi ako mahilig sa pastillas pero yung tinda mo po may gayuma ata at nahilig ako. Kahit sila Mama naghahanap kapag ubos na!", "A new pastillas favorite"],
  ["Manyaman la pu, Ma’am. Elapu masyadung mayumu—benta kula. Sana kasu kekami mu pu kulang lapa!", "Balanced sweetness"],
  ["Super bet na bet kahit saan. Sarap po—superb! Highly recommended!", "Highly recommended"],
  ["Napakasarap! Babalik-balikan mo talaga. Best pastillas na natikman ko—tamang timpla ng tamis at creaminess, hindi nakakaumay.", "A repeat-order favorite"],
];

export function CustomerReviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="review-image-frame">
        <Image src="/assets/customer-reviews.webp" alt="Authentic NUAN Pastillas customer message reviews" width={1000} height={1250} />
        <span>Real messages · shared with care</span>
      </div>
      <div className="reviews-copy">
        <p className="section-tag">What customers are saying</p>
        <h2 id="reviews-title">The kind of sweetness<br /><em>people come back for.</em></h2>
        <p className="reviews-intro">From first-time tasters to repeat customers, these messages remind us why every thoughtfully packed treat matters.</p>
        <div className="featured-review" key={active}>
          <div className="review-stars" aria-label="Five star customer feedback">★★★★★</div>
          <blockquote>“{reviews[active][0]}”</blockquote>
          <div className="review-meta"><span>Customer feedback</span><strong>{reviews[active][1]}</strong></div>
        </div>
        <div className="review-controls" aria-label="Choose a customer review">
          {reviews.map((review, index) => <button key={review[1]} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show review ${index + 1}`}>{String(index + 1).padStart(2, "0")}</button>)}
        </div>
        <a className="button brown" href="https://m.me/61589244254642" target="_blank" rel="noreferrer">Try NUAN Pastillas <span>↗</span></a>
      </div>
    </section>
  );
}
