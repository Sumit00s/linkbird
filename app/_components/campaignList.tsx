"use client";

import { useCampaignStore } from "@/context/campaignStore";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { CircleX, Clock, MessageSquareMore, User, UserStar } from "lucide-react";

export default function CampaignList({ isLoading }: { isLoading: boolean }) {
  const campaigns = useCampaignStore((state) => state.campaigns);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded" />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-y-auto max-h-[550px] w-full border rounded-md p-5 shadow">
      <Table className="w-full min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead>Campaign Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Leads</TableHead>
            <TableHead>Request Status</TableHead>
            <TableHead>Connection Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow
              key={campaign.id}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => router.push(`/campaign/${campaign.id}`)}
            >
              <TableCell>
                <div className="py-3">{campaign.campaignName}</div>
              </TableCell>

              <TableCell>
                <div className="py-3">
                  <Badge variant="secondary">{campaign.status}</Badge>
                </div>
              </TableCell>

              <TableCell>
                <div className="py-3">{campaign.totalLeads}</div>
              </TableCell>

              <TableCell>
                <div className="py-3 grid grid-cols-3 justify-items-center ">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-green-600" />
                    <span>0</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-yellow-300" />
                    <span>20</span>
                  </div>
                  <div className="flex items-center">
                    <CircleX className="w-5 h-5 text-red-600" />
                    <span>6</span>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <div className="py-3 grid grid-cols-2 justify-items-center ">
                  <div className="flex  items-center">
                    <UserStar className="w-5 h-5 text-blue-800" />
                    <span>0</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquareMore className="w-5 h-5 text-purple-600" />
                    <span>20</span>
                  </div>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
