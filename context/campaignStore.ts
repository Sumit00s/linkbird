"use client";

import { create } from "zustand";

export type Campaign = {
  id: string;
  campaignName: string;
  bio: string | null;
  company: string | null;
  totalLeads: number | null;
  successfulLeads: number | null;
  responseRate: number | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

type CampaignState = {
  campaigns: Campaign[];
  setCampaigns: (campaigns: Campaign[]) => void;
};

export const useCampaignStore = create<CampaignState>((set) => ({
  campaigns: [],
  setCampaigns: (campaigns) => set({ campaigns }),
}));
