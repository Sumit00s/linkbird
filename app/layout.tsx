import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider} from "@/components/ui/sidebar"
import LayoutWrapper from "./_components/LayoutWrapper";
import { Toaster } from "@/components/ui/sonner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkBird",
  description: "LinkBird is a LinkedIn automation tool that helps you connect with your network and grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <SidebarProvider>
        <LayoutWrapper>
            {children}
            <Toaster />
        </LayoutWrapper>
      </SidebarProvider>
      </body>
    </html>
  );
}
