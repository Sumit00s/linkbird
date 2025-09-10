"use client"

import { getAllLeads } from "@/server/leadActions"
import { useQuery } from "@tanstack/react-query"
import LeadFetcher from "../_components/LeadFetcher";
import LeadList from "../_components/LeadList";
import LeadSheet from "../_components/LeadSheet";

export default function Leads(){
    const {isLoading} = useQuery(["leads"],()=>getAllLeads());

    return(
        <main className="p-8 flex items-center justify-center">
            <LeadFetcher/>
            <LeadList isLoading={isLoading}/>
            <LeadSheet/>
        </main>
    )
}