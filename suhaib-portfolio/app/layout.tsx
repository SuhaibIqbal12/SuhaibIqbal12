import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { Header, Footer } from "@/components/Chrome";
const dmSans = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/dm-sans/files/dm-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm",
  display: "swap",
  preload: true,
});
const editorial = localFont({
  src: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2",
  variable: "--font-editorial",
  weight: "400",
  style: "italic",
  display: "swap",
  preload: true,
});
const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://suhaib-the-proof-lab.suhaibiqbal961.chatgpt.site";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Suhaib IqbaL — AI Engineer Portfolio",
    template: "%s | Suhaib IqbaL",
  },
  description:
    "From AI ideas to systems people can use. Explore source-grounded work in Generative AI, retrieval, Python backends and computer vision by Mohammed Suhaib Iqbal.",
  openGraph: {
    title: "Suhaib IqbaL — AI Engineer Portfolio",
    description: "Three systems. Open the engineering.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${editorial.variable}`}>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ModeProvider>
          <Header />
          {children}
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
