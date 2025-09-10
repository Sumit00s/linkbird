import { getAllLeads } from "@/server/leadActions"

export default async function Leads(){

    const data = await getAllLeads();
    console.log(data);
    return(
        <div></div>
    )
}