import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import Header from "@/components/layout/root/header/Header";
import "./globals.css";

export const metadata: Metadata = {
   title: "Invest Way",
   description: "Ресурс для тех, кто хочет начать инвестировать",
};

const roboto = Roboto({
   subsets: ["latin", "cyrillic"],
});

const raleway = Raleway({
   subsets: ["cyrillic", "latin"],
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru" className={`${raleway.className} ${roboto.className}`}>
         <body>
            <div className="overflow-x-hidden">
               <Header />
               <main className="sm:pt-16 pt-10">{children}</main>
            </div>
         </body>
      </html>
   );
}
