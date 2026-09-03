import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Rivixa Lifesciences | Science with Purpose. Care with Heart.",
    template: "%s | Rivixa Lifesciences",
  },
  description:
    "Rivixa Lifesciences Private Limited. A focused journey in Gynaecology, Ophthalmology and Orthopedic care, with offices in Mumbai and Lucknow, India.",
  openGraph: {
    title: "Rivixa Lifesciences",
    description:
      "Science with purpose. Care with heart. Explore our focus in Gynaecology, Ophthalmology and Orthopedic care.",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
