import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import {ToastContainer} from "react-toastify"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuziGrowth — Automate the work. Grow your business.",
  description:
    "BuziGrowth builds custom business automations that eliminate repetitive work and connect the tools your business already uses.",
     keywords: [
    "creator marketing",
    "influencer marketing",
    "content creators",
    "TikTok marketing",
    "X marketing",
    "Instagram marketing",
    "brand partnerships",
    "creator economy",
    "performance marketing",
    "automations",
    "business"
  ],

  authors: [
    {
      name: "BUZIGROWTH",
    },
  ],
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BUZIGROWTH",
    url: "https://buzigrowth.com",
    logo: "https://buzigrowth.com/buzigrowth-logo.png",
    email: "support@buzigrowth.com",
    description:
      "BUZIGROWTH is a creator marketing platform where businesses launch campaigns and creators earn from genuine views and clicks.",
    sameAs: [
      "https://x.com/buzigrowth",
      "https://instagram.com/buzigrowth",
      "https://tiktok.com/@buzigrowth",
    ],
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

       <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      
      <body className="min-h-full flex flex-col">
        <ToastContainer/>
        <Navbar/>
        {children}
        <Footer/>
         <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization),
          }}
        />
      </body>

    </html>
  );
}





