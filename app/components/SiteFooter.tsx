import Image from "next/image";
import Link from "next/link";
import { facebook, messenger, tiktok } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><Image src="/assets/nuan-logo.png" alt="NUAN by JLEL" width={90} height={105} /><p>Meaningful stories, learning experiences, digital solutions, and sweet moments—created with heart.</p></div>
      <div><h2>Explore</h2><Link href="/about">About NUAN</Link><Link href="/products">Products</Link><Link href="/portfolio">Learning Studio</Link><Link href="/contact">Contact</Link></div>
      <div><h2>Products</h2><Link href="/products#pastillas">Pastillas</Link><Link href="/products#books">Books</Link><Link href="/products#games">Educational Games</Link><Link href="/products#trackers">Digital Trackers</Link></div>
      <div><h2>Connect</h2><a href={messenger} target="_blank" rel="noreferrer">Messenger ↗</a><a href={facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href={tiktok} target="_blank" rel="noreferrer">TikTok ↗</a><p>Orders and inquiries are handled through our current Messenger process.</p></div>
      <div className="footer-bottom"><span>© 2026 NUAN by JLEL. Wrapped with Blessings, Made with Love.</span><Link href="/">Back home ↑</Link></div>
    </footer>
  );
}
