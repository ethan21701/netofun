import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header, Footer, WhatsAppButton } from "@/components/layout";

export const metadata: Metadata = {
  title: "נטו פאן | NetoFun - חופשות לצעירים",
  description: "נטו פאן - החברה המרכזית לתיירות צעירים! חבילות נופש מאורגנות לאיה נאפה, מאליה, רודוס, סאני ביץ, יורט דה מאר ואילת.",
  keywords: "נטו פאן, חופשות צעירים, איה נאפה, מאליה, רודוס, סאני ביץ, יורט דה מאר, אילת, חבילות נופש",
  openGraph: {
    title: "נטו פאן | NetoFun - חופשות לצעירים",
    description: "החברה המרכזית לתיירות צעירים! חבילות נופש מאורגנות עם נציגים ישראלים 24/7",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-rubik antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
