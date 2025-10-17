import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./styles/globals.css";
import './styles/animations.css'
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import PrivacyPupup from "@/app/components/common/PrivacyPupupBar";
import { Roboto } from 'next/font/google';
import AOSInit from "@/app/hooks/aos-animation";  // 👈 import client wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ['200', '300', '400', '500', '700'], // include lighter weights
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: " MicroBiz Media | Denver Digital Marketing & Web Design Agency",
  description: "Based in Denver, MicroBiz Media provides expert digital marketing, web design, and branding services for small businesses. Grow your online presence with us.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.className}`} 
      >
        <Header />
        <PrivacyPupup />
        <AOSInit />  
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
