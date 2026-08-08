"use client";

import { FormEvent, useState } from "react";
import { messenger } from "../lib/site-data";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const mobile = String(form.get("mobile") || "").trim();
    const inquiry = String(form.get("inquiry") || "").trim();
    const note = String(form.get("message") || "").trim();
    if (!name || !mobile || !inquiry || !note) { setMessage("Please complete the required fields before continuing."); return; }
    setMessage("Your inquiry is ready. Messenger will open so you can send it directly to the NUAN team.");
    const text = encodeURIComponent(`Hello NUAN!\n\nName: ${name}\nMobile: ${mobile}\nInquiry: ${inquiry}\nMessage: ${note}`);
    window.open(`${messenger}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="field-grid"><label>Name *<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Mobile number *<input name="mobile" inputMode="tel" autoComplete="tel" required /></label><label>Inquiry type *<select name="inquiry" required defaultValue=""><option value="" disabled>Select one</option><option>Pastillas Order</option><option>Book Inquiry</option><option>Educational Game</option><option>Digital Tracker</option><option>Website Development</option><option>Business System</option><option>General Inquiry</option></select></label></div>
    <label>Message *<textarea name="message" rows={6} required placeholder="Tell us what you need, preferred quantity, or project idea." /></label>
    <button className="button" type="submit">Continue through Messenger ↗</button>
    <p className={message.startsWith("Please") ? "form-status error" : "form-status"} role="status" aria-live="polite">{message}</p>
  </form>;
}
