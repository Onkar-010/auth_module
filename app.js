/** @format */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));
app.use("/api/auth", authRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
