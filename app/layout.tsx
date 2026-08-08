import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { ZapierChatbot } from "./components/ZapierChatbot";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuan-com.vercel.app"),
  title: { default: "NUAN | Products, Learning and Digital Creations", template: "%s | NUAN" },
  description:
    "Meet the NUAN family: meaningful books, interactive learning experiences, and thoughtfully packed milk and ube pastillas.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "NUAN | Products, Learning and Digital Creations", description: "Discover NUAN books, learning experiences, digital creations, and thoughtfully packed pastillas.", images: ["/assets/nuan-logo.png"], type: "website" },
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
