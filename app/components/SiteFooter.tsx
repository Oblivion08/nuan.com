import Image from "next/image";
import Link from "next/link";
import { facebook, messenger, tiktok } from "../lib/site-data";
import { SocialIcon } from "./SocialIcon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><Image src="/assets/nuan-logo.png" alt="Official NUAN logo" width={90} height={105} /><p>One meaningful dream. Three creative branches. Created with Heart. Made to Inspire.</p></div>
      <div><h2>Explore NUAN</h2><Link href="/products#pastillas">NUAN Pastillas</Link><Link href="/products#books">NUAN Books</Link><Link href="/portfolio">NUAN Learning Studio</Link><Link href="/about">About NUAN</Link><Link href="/contact">Send an Inquiry</Link></div>
      <div className="footer-connect"><h2>Connect</h2><a href="mailto:nuanlearningstudio@gmail.com"><SocialIcon name="email" /><span>nuanlearningstudio@gmail.com</span></a><a href={messenger} target="_blank" rel="noreferrer"><SocialIcon name="messenger" /><span>Messenger</span></a><a href={facebook} target="_blank" rel="noreferrer"><SocialIcon name="facebook" /><span>Facebook</span></a><a href={tiktok} target="_blank" rel="noreferrer"><SocialIcon name="tiktok" /><span>TikTok</span></a><div className="footer-contact-row"><SocialIcon name="clock" /><span>Business hours: 8:00 AM–5:00 PM</span></div></div>
      <div className="footer-bottom"><span>© 2026 NUAN. Created with Heart. Made to Inspire.</span><Link href="/">Back home ↑</Link></div>
    </footer>
  );
}
