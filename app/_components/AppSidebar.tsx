"use client"

import { Calendar, FlaskConical, Headphones, Home, House, Inbox, Linkedin, LogOut, Mail, Moon, Search, Settings, SquareActivity, SquareUser, TicketsPlane, UserCog, Workflow } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

// Menu items.
const Overview_items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: House,
  },
  {
    title: "Leads",
    url: "/leads",
    icon: SquareUser,
  },
  {
    title: "Campaign",
    url: "/campaign",
    icon: FlaskConical,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: Mail,
  },
  {
    title: "Linkedin Accounts",
    url: "/accounts",
    icon: Linkedin,
  },
]

const settings_items = [
  {
    title: "Settings & Billing",
    url: "/settings",
    icon: Settings,
  },
]

const admin_panel = [
  {
    title: "Activity Logs",
    url: "/activitylogs",
    icon: SquareActivity,
  },
  {
    title: "User Logs",
    url: "/userlogs",
    icon: UserCog,
  },
]

const dummy_user = {
  name:"Sumit Sonawane",
  email:"sumitsonawane856@gmail.com",
  image:"https://github.com/shadcn.png",
  fallback:"SS"
}

export function AppSidebar() {

  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="bg-white p-2">
        <SidebarHeader className="flex items-center justify-center">
          <h1 className="text-center font-bold text-black text-2xl flex items-center justify-center p-1">
            <TicketsPlane className=" text-blue-600"/> Link<span className=" font-normal text-blue-600">Bird</span>
          </h1>
        </SidebarHeader>
        <hr />
        <SidebarGroup>
          <SidebarGroupLabel className=" font-bold">Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Overview_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-blue-300 ${pathname === item.url ? "bg-blue-300": ""}`}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className=" font-bold">Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settings_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-blue-300 ${pathname === item.url ? "bg-blue-300": ""}`}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className=" font-bold">Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {admin_panel.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-blue-300 ${pathname === item.url ? "bg-blue-300": ""}`}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="flex items-center gap-9 justify-center text-gray-400 p-2">
        <Mail className="w-4 h-4" />
        <Workflow className="w-4 h-4" />
        <Headphones className="w-4 h-4" />
        <Moon className="w-4 h-4" />
      </div>
      <hr />
     <SidebarFooter className="px-2 py-5 flex-row items-center justify-center">
      <Avatar>
        <AvatarImage src={dummy_user.image} />
        <AvatarFallback>{dummy_user.fallback}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-sm font-semibold">{dummy_user.name}</h3>
        <p className="text-xs text-gray-500">{dummy_user.email}</p>
      </div>
      <LogOut className="w-4 h-4 cursor-pointer"/>
    </SidebarFooter>
    </Sidebar>
  )
}