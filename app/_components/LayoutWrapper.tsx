
"use client";
import { usePathname } from "next/navigation";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import BreadScrumb from "./BreadScrumb";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/" || pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!hideLayout && <AppSidebar />}

      <div className="w-full h-full flex flex-col p-2">
        {!hideLayout && (
          <div className="w-full h-full flex flex-row">
            <SidebarTrigger className="mt-2" />
            <BreadScrumb />
          </div>
        )}
        <main className="p-2">
          {children}
        </main>
      </div>
    </>
  );
}
