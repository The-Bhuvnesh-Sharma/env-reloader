#!/usr/bin/env node

const chokidar = require("chokidar");
const { spawn } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
if (!args.length) {
  console.log("Usage: env-reloader <your-start-command>");
  console.log("Example: env-reloader server.js");
  process.exit(1);
}

let serverProcess;

function startServer() {
  if (serverProcess) {
    serverProcess.kill();
  }
  serverProcess = spawn("node", args, {
    stdio: "inherit",
    shell: true,
  });
}

const envPath = path.resolve(process.cwd(), ".env");
console.log(`Watching for changes in: ${envPath}`);

chokidar.watch(envPath).on("change", () => {
  console.log("\n.env file changed. Restarting server...\n");
  startServer();
});

startServer();
