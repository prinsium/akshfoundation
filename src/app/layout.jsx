import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aksh Foundation",
  description: "Aksh Foundation Welcomes You!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
      <Navbar />{children}<Footer />
      </body>
    </html>
  );
}
