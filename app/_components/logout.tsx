"use client"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ChevronsUpDown} from "lucide-react"
import { useRouter } from "next/navigation"

export default function(){
    const router = useRouter();

    const handleLogout = async () => {
    try {
      await authClient.signOut(); // BetterAuth logout
      window.location.href = "/login"; // full reload ensures session cleared
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
     
    return (

        <DropdownMenu>
        <DropdownMenuTrigger><ChevronsUpDown className="w-4 h-4 cursor-pointer"/></DropdownMenuTrigger>
        <DropdownMenuContent>
            
            <DropdownMenuItem className=" cursor-pointer">
                <Button variant="outline" onClick={handleLogout}>Logout <LogOut className="size-4 cursor-pointer"/></Button>
            </DropdownMenuItem>
        
        </DropdownMenuContent>
        </DropdownMenu>
    )
}