"use server"

import { db } from "@/db/drizzle";
import { campaigns } from "@/db/schema";
import { eq } from "drizzle-orm";

// Fetch all campaigns
export async function getAllCampaigns() {
    const allCampaigns = await db.select().from(campaigns);
    return allCampaigns;
}

// Fetch a single campaign by id
export async function getCampaignById(id: string) {
    const campaign = await db
        .select()
        .from(campaigns)
        .where(eq(campaigns.id,id))
        .limit(1);

    return campaign[0] ?? null;
}
