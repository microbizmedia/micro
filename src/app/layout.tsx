import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./styles/globals.css";
import './styles/animations.css'
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer'
import PrivacyPupup from "@/app/components/common/PrivacyPupupBar";

import JOSProvider from '@/app/hooks/JOSProvider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MicroBiz Media",
  description: "Web Design for Small Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <PrivacyPupup />
         <JOSProvider />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
