import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IB Import Export | Global Trade Excellence",
  description: "IB Import Export — A trusted international trading company based in Phaltan, India. Specializing in Agricultural Products, Textiles, Machinery, Chemicals, and Food Products for worldwide markets.",
  keywords: "import export India, international trade Phaltan, agricultural products export, textiles import export, machinery trading, chemicals trade, IB Import Export",
  openGraph: {
    title: "IB Import Export | Global Trade Excellence",
    description: "Connecting Markets. Delivering Global Trade Excellence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
