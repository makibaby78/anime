import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Loading from "./loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Next JS Anime",
  description: "Displaying anime from API",
  icons: {
    icon: "/anime.png",
    apple: "/anime.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${montserrat.className} bg-gray-900`}>
          <Header/>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          <Footer/>
          <SpeedInsights />
      </body>
    </html>
  );
}
