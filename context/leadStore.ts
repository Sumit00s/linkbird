import { create } from "zustand";

export type Lead = {
  replied: any;
  connectionStatus: string;
  invitationMessage: string;
  id: string;
  name: string;
  bio: string | null;
  Company: string | null;
  campaignName: string | null;
  status: "Pending" | "Contacted" | "Responded" | "Converted" | null;
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
