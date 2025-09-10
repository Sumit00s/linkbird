"use client"

import { useLeadStore } from "@/context/leadStore";
import { getAllLeads } from "@/server/leadActions";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function LeadFetcher(){
    const setLeads = useLeadStore((state)=>state.setLeads);
    const {data} = useQuery(["leads"],()=>getAllLeads());

   useEffect(() => {
        if (data) {
            const leadsWithDefaults = data.map((lead) => ({
            ...lead,
            bio: lead.bio ?? "",
            Company: lead.Company ?? "",
            campaignName: lead.campaignName ?? "",
            status: lead.status as "Pending" | "Contacted" | "Responded" | "Converted",
            createdAt: lead.createdAt.toISOString(),
            updatedAt: lead.updatedAt.toISOString(),
            }));
            setLeads(leadsWithDefaults);
        }
    }, [data, setLeads]);

    return null;
}