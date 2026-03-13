import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industrial Fab — Контрактне виробництво металевих деталей",
  description:
    "Повний цикл металообробки: лазерна різка, CNC-обробка, зварювання, покриття. 210 000 м² виробничих площ, 125 000 тонн металу на рік, 65 країн.",
  openGraph: {
    title: "Industrial Fab — Контрактне виробництво металевих деталей",
    description:
      "Повний цикл металообробки під ключ. ISO 9001/14001/45001. 30+ років на ринку.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
