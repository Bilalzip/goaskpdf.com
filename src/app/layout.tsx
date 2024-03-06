import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Providers from "@/components/Provider";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Goaskpdf",
  description: "Leverage Ai to ask questions to your pdf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
      <html lang="en"  suppressHydrationWarning={true}>
      <body className={inter.className}>
          {children}
        </body>
    </html>
  
      </Providers>

     </ClerkProvider>
  
  );
}
