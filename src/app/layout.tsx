import type { Metadata } from "next";
import { Geist_Mono, Newsreader } from "next/font/google";
import Clock from "@/components/Clock";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Pranav Shukla",
  description: "Personal portfolio and projects by Pranav Shukla",
};

const themeScript = `(()=>{const r=document.documentElement;let t;try{t=localStorage.getItem('theme')}catch{}r.dataset.theme=t||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${newsreader.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Navigation />
        <main className="page">{children}</main>
        <Clock />
      </body>
    </html>
  );
}
