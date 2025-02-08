import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF AI Assistant - Intelligent Document Analysis",
  description:
    "Upload your PDF documents and interact with them using advanced AI. Get instant answers, summaries, and insights from your documents",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />  {/* ✅ Header at the top */}
          <main className="flex-grow">{children}</main> {/* ✅ Main content */}
          <Footer />  {/* ✅ Footer at the bottom */}
        </body>
      </html>
    </ClerkProvider>
  );
}
