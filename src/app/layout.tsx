import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });
import { UserCreditsProvider } from "@chipp/nextjs-chipp/client";
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
      <html lang="en">
     
      <body className={inter.className}>
          {children}
        </body>
    </html>
  
      </Providers>

     </ClerkProvider>
  
  );
}
