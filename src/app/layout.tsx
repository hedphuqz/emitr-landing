import type { Metadata } from "next";
import { Inter,  } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Emitr",
  description: "Emitr Music",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
