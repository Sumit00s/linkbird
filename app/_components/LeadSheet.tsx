"use client";

import { useLeadStore } from "@/context/leadStore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Clock, Circle } from "lucide-react";

export default function LeadSheet() {
  const selectedLead = useLeadStore((state) => state.selectedLead);
  const setSelectedLead = useLeadStore((state) => state.setSelectedLead);

  if (!selectedLead) return null;

  return (
    <Sheet
      open={!!selectedLead}
      onOpenChange={(open) => {
        if (!open) setSelectedLead(null);
      }}
    >
      <SheetContent side="right" className="space-y-6">
        <SheetHeader>
          <SheetTitle>Lead Profile</SheetTitle>
        </SheetHeader>

        {/* Lead Info */}
        <div className="flex items-center gap-4 border-2 mx-2 p-4 rounded-md">
          <Avatar className="w-16 h-16">
            <AvatarImage src={"https://github.com/shadcn.png"} />
            <AvatarFallback>{selectedLead.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{selectedLead.name}</span>
            <span className="text-sm text-gray-500">{selectedLead.bio}</span>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary">{selectedLead.Company}</Badge>
              <Badge variant="secondary">{selectedLead.status}</Badge>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 ml-3">
          {/* Invitation Request */}
          <div className="flex items-start gap-4">
            <CheckCircle className="mt-1 w-5 h-5 text-blue-500" />
            <div>
              <span className="font-semibold text-sm">Invitation Request</span>
              <p className="text-sm text-gray-500">{""}</p>
            </div>
          </div>

          {/* Connection Status */}
          <div className="flex items-start gap-4">
            <Circle className="mt-1 w-5 h-5 text-gray-400" />
            <div>
              <span className="font-semibold text-sm">Connection Status</span>
              <p className="text-sm text-gray-500">{"Pending"}</p>
            </div>
          </div>

          {/* Replied */}
          <div className="flex items-start gap-4">
            <CheckCircle className="mt-1 w-5 h-5 text-green-500" />
            <div>
              <span className="font-semibold text-sm">Replied</span>
                <Button variant="link" className="p-0 text-blue-500 underline outline-none ml-2">
                  View Reply
                </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
