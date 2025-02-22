import type { Metadata } from "next";
import "./globals.css";
import styles from "./styles.module.scss";
import { Overlock } from "next/font/google";

export const metadata: Metadata = {
  title: "Dani Moraes",
};

const overlock = Overlock({
  variable: "--font-overlock",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.appRoot} ${overlock.variable}`}>
        {children}
      </body>
    </html>
  );
}
