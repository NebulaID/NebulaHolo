import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silk Wallet Template",
  description: "Starter template for Silk Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">      
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <Menu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
