import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Experience Programmes 2026 | Improve ME Institute",
  description:
    "Explore 2026 Improve ME Institute work experience programmes in collaboration with Study Mind UK for ages 15-18. Gain hands-on career experience in 15+ industries including medicine, law, engineering, and more.",
  openGraph: {
    title: "Improve ME Institute Work Experience 2026",
    description:
      "Experience your future career hands-on with Improve ME Institute's immersive work experience programmes, in collaboration with Study Mind UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw] w-full">
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw] w-full`}>{children}</body>
    </html>
  );
}

