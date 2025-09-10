"use client";

import { useCampaignStore } from "@/context/campaignStore";
import { getAllCampaigns } from "@/server/campaignActions";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function CampaignFetcher() {
  const setCampaigns = useCampaignStore((state) => state.setCampaigns);
  const { data } = useQuery(["campaigns"], () => getAllCampaigns());

  useEffect(() => {
    if (data) {
      const campaignsWithDefaults = data.map((campaign) => ({
        ...campaign,
        bio: campaign.bio ?? "",
        company: campaign.company ?? "",
        totalLeads: campaign.totalLeads ?? 0,
        successfulLeads: campaign.successfulLeads ?? 0,
        responseRate: campaign.responseRate ?? 0,
        status: campaign.status ?? "Inactive",
        createdAt: campaign.createdAt.toISOString(),
        updatedAt: campaign.updatedAt.toISOString(),
      }));
      setCampaigns(campaignsWithDefaults);
    }
  }, [data, setCampaigns]);

  return null;
}
