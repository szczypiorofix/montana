import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./index.css";
import React, {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wróblewski Piotr",
  icons: {
   icon: "/icons/favicon.ico",
  },
  description: "Wróblewski Piotr - strona prywatna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
