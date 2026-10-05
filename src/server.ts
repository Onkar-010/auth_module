/** @format */

/** @format */

const app = require("./app");
const config = require("./config");

console.log("server.ts loaded");
console.log("PORT:", config.port);

const startServer = () => {
  console.log("starting server...");

  app.listen(config.port, () => {
    console.log(`🚀 Server running on http://localhost:${config.port}`);
  });
};

startServer();
