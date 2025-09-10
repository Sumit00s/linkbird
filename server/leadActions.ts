"use server"

import { db } from "@/db/drizzle";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getAllLeads() {
    return await db.select().from(leads);
}

export async function getLeadById(id:string) {
    const result = await db.select().from(leads).where(eq(leads.id,id));
    return result[0];
}