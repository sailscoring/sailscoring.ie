import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

// Brand body font. Audiowide (the brand display face) is reserved for the logo,
// not page headings — it's too heavy for running headings and the logo already
// carries that character.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={poppins.className}>
        <div style={{ height: 3, backgroundColor: "var(--red)" }} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
