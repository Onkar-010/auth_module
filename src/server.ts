/** @format */

import { app } from "./app";
import { appConfig } from "./config";
import { connectDB } from "./config/dbConfig";

const startServer = async () => {
  await connectDB();
  console.log("✅ Database connected");
  app.listen(appConfig.port, () => {
    console.log(`🚀 Server running on http://localhost:${appConfig.port}`);
  });
};

startServer().catch((err) => {
  console.error("Startup failed:", err);
  process.exit(1);
});
