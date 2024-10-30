"use client";
import { Inter } from "next/font/google";
// import { CartProvider } from "./contexts/page";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./page";
import { AppWrapper } from "./contexts/contextApi";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import Head from "next/head";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  let Mode = undefined;
  useEffect(() => {
    Mode = localStorage.getItem("darkMode") === "true" ? "dark" : "light";
  }, []);
  return (
    <html
      lang="en"
      className={
        //  localStorage.getItem("darkMode") === "true" ? "dark" : "light" }
        Mode
      }
    >
      <head>
        <title>CodesWear.com</title>
        <link rel="icon" sizes="512x512" href="/logo.jpg" type="image/ico" />
        <meta name="description" description="Generated by create next app" />
        <meta name="keywords" content="codeswear.com " />
        <meta name="cryptomus" content="d8ac8e4d" />
      </head>

      <body
        className={`overflow-x-hidden dark:bg-[#1f2937] ${inter.className}`}
      >
        {/* <CartProvider> */}

        <Suspense>
          <AppWrapper>
            <Navbar />
            <NextTopLoader
              color="#db2777"
              height={2.34}
              crawlSpeed={400}
              showSpinner={false}
              speed={700}
              showAtBottom={false}
            />
            {children}
            <Footer />
          </AppWrapper>
        </Suspense>
        {/* </CartProvider> */}
      </body>
    </html>
  );
}
