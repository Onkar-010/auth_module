/** @format */

import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;

  postgres: {
    url: string;
  };

  api: {
    prefix: string;
    version: string;
  };

  cors: {
    origin: string;
    credentials: boolean;
  };
}

const port = Number(process.env.PORT || 5000);
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is required.");

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535.");
}

export const appConfig: Config = {
  port,

  postgres: {
    url: databaseUrl,
  },

  api: {
    prefix: "/api",
    version: "v1",
  },

  cors: {
    origin: corsOrigin,
    credentials: corsOrigin !== "*",
  },
};
