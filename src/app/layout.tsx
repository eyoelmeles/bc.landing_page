import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/layout/header";
import Footer from "@/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build Connect",
  description: "Document your site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
