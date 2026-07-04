import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Airox Technologies Ltd — Best PSA Oxygen Generator Manufacturer in India",
    template: "%s | Airox Technologies Ltd",
  },
  description: SITE.description,
  keywords: [
    "PSA oxygen generator",
    "oxygen generator manufacturer India",
    "medical oxygen plant",
    "on-site oxygen generation",
    "nitrogen generator",
    "VPSA oxygen plant",
    "hyperbaric chamber",
    "oxygen plant for hospital",
    "Airox Technologies",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Airox Technologies Ltd — Best PSA Oxygen Generator Manufacturer in India",
    description: SITE.description,
    images: [
      {
        url: "/assets/hero-plant.webp",
        width: 1536,
        height: 1024,
        alt: "Airox PSA oxygen generator plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airox Technologies Ltd — Best PSA Oxygen Generator Manufacturer in India",
    description: SITE.description,
    images: ["/assets/hero-plant.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/assets/airox_logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#141743",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
