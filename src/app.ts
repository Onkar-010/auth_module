/** @format */

import express from "express";
import cors from "cors";
import { appConfig } from "./config";

export const app = express();

// CORS
app.use(
  cors({
    origin: appConfig.cors.origin,
    credentials: appConfig.cors.credentials,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});
