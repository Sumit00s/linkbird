"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useLeadStore } from "@/context/leadStore";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Activity } from "lucide-react";
import { Avatar,AvatarImage } from "@radix-ui/react-avatar";

export default function LeadList({ isLoading }: { isLoading: boolean }) {
  const leads = useLeadStore((state) => state.leads);
  const setSelectedLead = useLeadStore((state) => state.setSelectedLead);

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
    <div className="overflow-y-auto max-
    h-[550px] w-[80%] border rounded-md p-5 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
      <Table className="w-full min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Campaign Name</TableHead>
            <TableHead>Activity</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => {
            const shortBio = lead.bio ? lead.bio.slice(0, 25) + (lead.bio.length > 15 ? "..." : "") : "";

            return (
              <TableRow
                key={lead.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedLead(lead)}
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage className="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold">{lead.name}</span>
                        <span className="text-sm text-gray-500">{shortBio}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{lead.campaignName}</TableCell>
                <TableCell>
                  <Activity className="w-6 h-6 text-blue-500" />
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{lead.status}</Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
