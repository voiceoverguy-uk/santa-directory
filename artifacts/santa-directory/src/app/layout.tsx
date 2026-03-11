import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SantaDirectory | Find a Professional Santa Near You",
    template: "%s | SantaDirectory",
  },
  description:
    "Browse trusted professional Santa performers for home visits, grottos, schools, and corporate events across the UK.",
  keywords: [
    "hire a santa",
    "professional santa",
    "father christmas for hire",
    "santa for events",
    "santa grotto",
    "santa home visit",
    "DBS checked santa",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SantaDirectory",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
