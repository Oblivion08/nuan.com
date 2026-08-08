import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { ZapierChatbot } from "./components/ZapierChatbot";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuan-com.vercel.app"),
  title: { default: "NUAN | Pastillas, Books and Digital Solutions", template: "%s | NUAN" },
  description:
    "Explore NUAN Pastillas, NUAN Books, and NUAN Learning Studio—one warm, creative umbrella brand with three clear branches.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "NUAN | Pastillas, Books and Digital Solutions", description: "One meaningful dream. Three creative branches: NUAN Pastillas, NUAN Books, and NUAN Learning Studio.", images: ["/assets/nuan-logo.png"], type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH">
      <body>
        <SiteNav />
        <div className="site-content">{children}</div>
        <SiteFooter />
        <ZapierChatbot />
      </body>
    </html>
  );
}
