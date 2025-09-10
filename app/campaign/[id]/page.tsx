import { getCampaignById } from "@/server/campaignActions";
import { CircleEqual, CircleUserRound, Mail, MessageSquare } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, CheckCircle, TrendingUp } from "lucide-react";


interface CampaignPageProps {
  params: { id: string };
}

export default async function CampignId({ params }: CampaignPageProps){

    const { id } = params;
    const campaign = await getCampaignById(id);
    return(
        <div>
            <div className=" flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-4xl mt-2">Campaigns Details</h1>
                    <p className="mt-2 text-gray-400">Manage your track your campaign performance</p>
                </div>
            </div>
        <main className="p-8 flex flex-col gap-8">
        {/* First Row: 4 stats boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center justify-between bg-slate-100 rounded-md shadow p-5">
            <div>
                <p>Total Leads</p>
                <h3 className="font-bold">{campaign.totalLeads}</h3>
            </div>
            <CircleUserRound className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between bg-slate-100 rounded-md shadow p-5">
            <div>
                <p>Request Sent</p>
                <h3 className="font-bold">{campaign.responseRate}</h3>
            </div>
            <Mail className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between bg-slate-100 rounded-md shadow p-5">
            <div>
                <p>Request Accepted</p>
                <h3 className="font-bold">20</h3>
            </div>
            <MessageSquare className="w-6 h-6" />
            </div>

            <div className="flex items-center justify-between bg-slate-100 rounded-md shadow p-5">
            <div>
                <p>Request Replied</p>
                <h3 className="font-bold">{campaign.successfulLeads}</h3>
            </div>
            <CircleEqual className="w-6 h-6" />
            </div>
        </div>

        {/* Second Row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Campaign Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Metric 1 */}
                    <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <span>Lead Contacted</span>
                        <span>0.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full w-0"></div>
                    </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <span>Acceptance Rate</span>
                        <span>0.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-green-500 h-2 rounded-full w-0"></div>
                    </div>
                    </div>

                    {/* Metric 3 */}
                    <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <span>Reply Rate</span>
                        <span>0.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-yellow-400 h-2 rounded-full w-0"></div>
                    </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Campaign Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Start Date */}
                    <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span>Start Date: 2025-09-01</span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Status: Active</span>
                    </div>

                    {/* Conversion Rate */}
                    <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <span>Conversion Rate: 12.5%</span>
                    </div>
                </CardContent>
                </Card>
            
            </div>
        </main>


        </div>
    )
}