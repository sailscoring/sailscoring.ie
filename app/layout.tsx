import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Sail Scoring",
    default: "Sail Scoring — Race scoring that anyone can use",
  },
  description:
    "Modern, web-based sail race scoring for Irish yacht clubs and class associations. Accessible, correct, and built to last.",
  metadataBase: new URL("https://sailscoring.ie"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div style={{ height: 3, backgroundColor: "var(--red)" }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
