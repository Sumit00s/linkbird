import { drizzle } from 'drizzle-orm/neon-http';

console.log("DATABASE_URL:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined. Check your .env file!");
}

export const db = drizzle(process.env.DATABASE_URL);
