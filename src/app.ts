/** @format */

const express = require("express");
const cors = require("cors");

const config = require("./config/index");

const app = express();

// CORS
app.use(
  cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req: any, res: any) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

module.exports = app;
