import { create } from "zustand";

export type Lead = {
  id: string;
  name: string;
  bio: string;
  Company: string;
  campaignName: string;
  status: "Pending" | "Contacted" | "Responded" | "Converted";
  createdAt: string;
  updatedAt: string;
};

type LeadState = {
  leads: Lead[];
  selectedLead: Lead | null;
  setLeads: (leads: Lead[]) => void;
  setSelectedLead: (lead: Lead | null) => void;
};

export const useLeadStore = create<LeadState>((set) => ({
  leads: [],
  selectedLead: null,
  setLeads: (leads) => set({ leads }),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
}));
