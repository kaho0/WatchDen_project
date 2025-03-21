import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
