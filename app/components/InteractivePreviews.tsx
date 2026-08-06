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
    cover: "/assets/mental-capital-new-cover.jpg",
    video: "/assets/mental-capital-preview.mp4",
    eyebrow: "Discipline before profit",
    pages: [
      "The market did not only test the strategy—it revealed the person behind every decision.",
      "A loss can empty an account. The wrong mindset can quietly take far more.",
      "Before learning how to protect capital, one must learn how to protect discipline.",
    ],
  },
  {
    title: "The Gift Hidden in the Storm",
    cover: "/assets/gift-storm-new-cover.jpeg",
    video: "/assets/gift-storm-preview.mp4",
    eyebrow: "Redirection can be protection",
    pages: [
      "Some storms do not arrive to destroy a dream. They arrive to reveal a different road.",
      "What felt like a painful ending slowly became the beginning she could not yet see.",
      "Sometimes the gift is not the life we planned—but the person we become after the storm.",
    ],
  },
];

export function BookPreview() {
  const [bookIndex, setBookIndex] = useState(0);
  const [page, setPage] = useState(0);
  const book = books[bookIndex];

  useEffect(() => {
    const timer = window.setInterval(() => setPage((current) => (current + 1) % book.pages.length), 5200);
    return () => window.clearInterval(timer);
  }, [bookIndex, book.pages.length]);

  function chooseBook(index: number) {
    setBookIndex(index);
    setPage(0);
  }

  return (
    <div className="book-preview">
      <div className="book-selector" role="tablist" aria-label="Choose a book preview">
        {books.map((item, index) => <button key={item.title} onClick={() => chooseBook(index)} className={bookIndex === index ? "active" : ""}>{index + 1}. {item.title}</button>)}
      </div>
      <div className="book-preview-stage">
        <div className={`book-cover-panel cover-${bookIndex}`}>
          <Image key={book.cover} src={book.cover} alt={`${book.title} book cover`} fill sizes="(max-width: 580px) 88vw, 28vw" />
          <span>Featured book</span>
        </div>
        <div className="book-media-panel">
          <div className="book-video-frame">
            <video key={book.video} autoPlay muted loop playsInline controls preload="metadata" aria-label={`${book.title} digital reading preview`}>
              <source src={book.video} type="video/mp4" />
            </video>
          </div>
          <div className="open-page" key={`${bookIndex}-${page}`}>
            <div className="page-label">A glimpse inside</div>
            <p className="page-eyebrow">{book.eyebrow}</p>
            <blockquote>“{book.pages[page]}”</blockquote>
            <div className="page-footer"><span>{String(page + 1).padStart(2, "0")} / 03</span><button onClick={() => setPage((page + 1) % book.pages.length)}>Next thought →</button></div>
          </div>
        </div>
      </div>
      <p className="teaser-note">Digital reading experience preview · Promotional lines inspired by the book&apos;s themes.</p>
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
