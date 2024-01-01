import { Inter } from "next/font/google";
import "./globals.css";
import sss from "../public/جديد الهيثم1.svg";
import { Inter as FontSans } from "next/font/google";
import { cn } from "./lib/utils";

export const metadata = {
  title: "الهيثم",
  description: "مطعم الهيثم",
  keywords: "مطعم الهيثم",
  author: "Omar Ghandour",
  url: "https://alhaitham-weld.vercel.app/",
  icons: ["./جديد الهيثم2.svg"],
  twitter: {
    card: "summary_large_image",
    title: "الهيثم",
    description: "مطعم الهيثم",
    image: { sss },
  },
  openGraph: {
    type: "website",
    url: "https://alhaitham-weld.vercel.app/",
    title: "الهيثم",
    description: "مطعم الهيثم",
  },
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
