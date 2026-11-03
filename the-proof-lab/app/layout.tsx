import type { Metadata } from "next";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { Header, Footer } from "@/components/Chrome";
const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://suhaib-the-proof-lab.suhaibiqbal961.chatgpt.site";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "The Proof Lab — Mohammed Suhaib Iqbal",
    template: "%s | The Proof Lab",
  },
  description:
    "From AI ideas to systems people can use. Explore source-grounded work in Generative AI, retrieval, Python backends and computer vision by Mohammed Suhaib Iqbal.",
  openGraph: {
    title: "The Proof Lab — Mohammed Suhaib Iqbal",
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
    <html lang="en">
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
