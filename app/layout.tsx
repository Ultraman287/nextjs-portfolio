import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Saad Bin Ihsan",
  description: "Saad Bin Ihsan's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="android-chrome-192x192"
          href="../public/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome-384x384"
          href="../public/android-chrome-384x384.png"
        />
        <link rel="msapplication-config" href="../public/browserconfig.xml" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
