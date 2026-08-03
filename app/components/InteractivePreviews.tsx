"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type DemoMode = "battle" | "escape";

const demos = {
  battle: {
    icon: "⚔️",
    title: "Character Battle",
    subtitle: "Defeat the History Boss",
    image: "/assets/game-character-battle.webp",
    question: "A ruler wants to strengthen a civilization by creating a written code of laws. Whose achievement offers the clearest model?",
    choices: ["Ashoka", "Hammurabi", "Ramses II"],
    answer: "Hammurabi",
  },
  escape: {
    icon: "🏺",
    title: "Escape Room",
    subtitle: "Unlock the Ancient Chamber",
    image: "/assets/game-escape-room.webp",
    question: "The clue describes a society divided into hereditary social groups. Which ancient civilization unlocks the door?",
    choices: ["Egyptian", "Indus", "Sumerian"],
    answer: "Indus",
  },
};

export function GameDemo() {
  const [mode, setMode] = useState<DemoMode>("battle");
  const [selected, setSelected] = useState<string | null>(null);
  const demo = demos[mode];
  const correct = selected === demo.answer;

  function changeMode(next: DemoMode) {
    setMode(next);
    setSelected(null);
  }

  return (
    <div className="game-demo-shell">
      <div className="demo-topline"><span className="live-dot" /> PLAYABLE WEBSITE DEMO <span>1 SAMPLE ROUND</span></div>
      <div className="demo-switch" role="tablist" aria-label="Choose a sample game">
        <button className={mode === "battle" ? "active" : ""} onClick={() => changeMode("battle")} role="tab">⚔️ Battle</button>
        <button className={mode === "escape" ? "active" : ""} onClick={() => changeMode("escape")} role="tab">🏺 Escape Room</button>
      </div>
      <div className="demo-screen">
        <div className="demo-visual">
          <Image src={demo.image} alt={`${demo.title} mobile game preview`} width={945} height={2048} priority={false} />
          <div className="screen-shine" />
        </div>
        <div className="demo-play">
          <p className="demo-week">NUAN LEARNING STUDIO · AP8</p>
          <h3><span>{demo.icon}</span>{demo.title}</h3>
          <p className="demo-subtitle">{demo.subtitle}</p>
          <p className="demo-question">{demo.question}</p>
          <div className="demo-choices">
            {demo.choices.map((choice) => (
              <button
                key={choice}
                className={selected === choice ? (correct ? "correct" : "wrong") : ""}
                onClick={() => setSelected(choice)}
                disabled={selected !== null}
              >{choice}</button>
            ))}
          </div>
          {selected && <div className={`demo-result ${correct ? "success" : "retry"}`}>
            <strong>{correct ? "🏆 History Boss defeated!" : "🔐 The chamber remains locked."}</strong>
            <span>{correct ? "Great reasoning! You found the historical clue." : `The correct answer is ${demo.answer}. Try another mission!`}</span>
            <button onClick={() => setSelected(null)}>Play again ↻</button>
          </div>}
        </div>
      </div>
    </div>
  );
}

const books = [
  {
    title: "Mental Capital",
    cover: "/assets/mental-capital.png",
    eyebrow: "Discipline before profit",
    pages: [
      "The market did not only test the strategy—it revealed the person behind every decision.",
      "A loss can empty an account. The wrong mindset can quietly take far more.",
      "Before learning how to protect capital, one must learn how to protect discipline.",
    ],
  },
  {
    title: "The Gift Hidden in the Storm",
    cover: "/assets/gift-storm.png",
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
        <div className="preview-cover"><Image key={book.cover} src={book.cover} alt={`${book.title} cover`} width={610} height={722} /></div>
        <div className="open-page" key={`${bookIndex}-${page}`}>
          <div className="page-label">A glimpse inside</div>
          <p className="page-eyebrow">{book.eyebrow}</p>
          <blockquote>“{book.pages[page]}”</blockquote>
          <div className="page-footer"><span>{String(page + 1).padStart(2, "0")} / 03</span><button onClick={() => setPage((page + 1) % book.pages.length)}>Turn the page →</button></div>
        </div>
      </div>
      <p className="teaser-note">Promotional preview inspired by the book&apos;s themes.</p>
    </div>
  );
}
