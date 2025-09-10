"use client";

import { Button } from "@/components/ui/button"
import { getAllCampaigns } from "@/server/campaignActions"
import { useQuery } from "@tanstack/react-query";
import { CirclePlus } from "lucide-react"
import CampaignFetcher from "../_components/CampaignFetcher";
import CampaignList from "../_components/campaignList";

export default function Campaign(){
    const { isLoading } = useQuery(["campaigns"], () => getAllCampaigns());
    return(
        <div>
            <div className=" flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-4xl mt-2">Campaigns</h1>
                    <p className="mt-2 text-gray-400">Manage your campaign ans track there performance</p>
                </div>
                <Button className=" bg-blue-800"><CirclePlus/>Create Campaign</Button>
            </div>
            <main className="p-8 flex items-center justify-center">
                <CampaignFetcher />
                <CampaignList isLoading={isLoading} />
            </main>
        </div>
    )
}



