import type { Metadata } from "next";
import { ZapierChatbot } from "./components/ZapierChatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUAN by JLEL | Created with Heart, Made to Inspire",
  description:
    "Meet the NUAN family: meaningful books, interactive learning experiences, and thoughtfully packed milk and ube pastillas.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH">
      <body>
        {children}
        <ZapierChatbot />
      </body>
    </html>
  );
}