import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "./_components/AppSideBar";
import { AppSidebar } from "./_components/AppSidebar";
import BreadScrumb from "./_components/BreadScrumb";

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
        <AppSidebar />
          {/* <div className=" h-full bg-amber-400">
            <SidebarTrigger className=" ml-3 mt-2"/>
          </div>
          <BreadScrumb />
          <main className="mt-9">
            {children}
          </main> */}
          <div className="w-full h-full flex flex-col p-2">
              <div className=" w-full h-ful flex flex-row">
                <SidebarTrigger className=" mt-2"/>
                <BreadScrumb />
              </div>
              <main className="p-2">
                {children}
              </main>
          </div>
      </SidebarProvider>
      </body>
    </html>
  );
}
