import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { SocialIcon } from "../components/SocialIcon";
import { facebook, messenger, tiktok } from "../lib/site-data";

export const metadata: Metadata = { title: "Contact NUAN | Orders, Inquiries and Services", description: "Contact NUAN for pastillas orders, book inquiries, educational games, digital trackers, websites, and business systems.", openGraph: { title: "Contact NUAN | Orders, Inquiries and Services", description: "Send an order or project inquiry to the NUAN team." } };

export default function ContactPage() {
  return <main><PageHero eyebrow="Orders, inquiries, and services" title={<>Tell us what you need.<br /><em>We’ll guide the next step.</em></>} copy="Choose a product or service, share the important details, and continue the conversation through NUAN’s current Messenger inquiry process." />
    <section className="section contact-layout"><div><p className="section-tag">Send an inquiry</p><h2>Start with a few details.</h2><p>Required information is checked before Messenger opens. No payment details are collected on this website.</p><ContactForm /></div><aside><div className="contact-card social-contact"><h3>Connect with NUAN</h3><a href="mailto:nuanlearningstudio@gmail.com"><SocialIcon name="email" /><span>nuanlearningstudio@gmail.com</span></a><a href={messenger} target="_blank" rel="noreferrer"><SocialIcon name="messenger" /><span>Messenger</span></a><a href={facebook} target="_blank" rel="noreferrer"><SocialIcon name="facebook" /><span>Facebook</span></a><a href={tiktok} target="_blank" rel="noreferrer"><SocialIcon name="tiktok" /><span>TikTok @nuanpastillas</span></a><div className="business-hours"><SocialIcon name="clock" /><span>Business hours</span><strong>8:00 AM–5:00 PM</strong></div></div></aside></section>
    <section className="faq section"><header className="center-heading"><p className="section-tag">Contact FAQ</p><h2>What happens next?</h2></header><div className="faq-list">{[["Does this form send payment?","No. It only prepares your inquiry and opens Messenger. Confirm payment and fulfillment details directly with the NUAN team."],["Can I request custom digital work?","Yes. Select Website Development, Business System, Educational Game, or Digital Tracker in the form."],["Where can I browse first?","Visit Products for available categories or Portfolio for selected digital projects." ]].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><div className="center-actions"><Link className="text-link" href="/products">Browse products →</Link><Link className="text-link" href="/portfolio">View portfolio →</Link></div></section>
  </main>;
}
