import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Puneet Gautam — Senior Backend Developer & API Architect",
  description: "Senior Backend Developer specializing in high-throughput PHP, Laravel, RESTful API architecture, and database optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="antialiased font-sans min-h-screen flex flex-col bg-[#08080a] text-[#f8fafc] selection:bg-[#dc2626] selection:text-white">
        {children}
      </body>
    </html>
  );
}
