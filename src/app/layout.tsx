import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NebulaHolo by NebulaID",
  description: "Universal Personhood Issuer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-r from-[#9efff2] to-[#c1a8ff] bg-opacity-50  `}>
        <Providers>
          <Menu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
