/** @format */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import { appConfig } from "./index";

// Export `db` for repositories only
export const db = drizzle({ client: neon(appConfig.postgres.url) });

export const connectDB = async () => {
  await db.execute(sql`select 1`); // throws if the connection fails
};
