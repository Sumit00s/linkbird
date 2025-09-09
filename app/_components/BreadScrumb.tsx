"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BreadScrumb_items = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Leads",
    url: "/leads",
  },
  {
    title: "Campaign",
    url: "/campaign",
  },
  {
    title: "Messages",
    url: "/messages",
  },
  {
    title: "Linkedin Accounts",
    url: "/accounts",
  },
  {
    title: "Settings & Billing",
    url: "/settings",
  },
  {
    title: "Activity Logs",
    url: "/activitylogs",
  },
  {
    title: "User Logs",
    url: "/userlogs",
  },
]


export default function BreadScrumb(){
    const pathname = usePathname();
    const currentPage = BreadScrumb_items.find(item => item.url === pathname)
    
    return(
        <Breadcrumb className="ml-2 mt-3">
            <BreadcrumbList>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink href={currentPage?.url}>{currentPage?.title}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}