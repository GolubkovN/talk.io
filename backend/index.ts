import path from "node:path";
import { config } from "dotenv";
import app from "./src/app";
import { connectDB } from "./src/config/db";
import { createServer } from "http";
import { initializeSocket } from "./src/utils/socket";

const nodeEnv = process.env.NODE_ENV ?? "development";

// Choose which file to load
const envFile = path.resolve(process.cwd(), "env", `.env.${nodeEnv}.local`);

// Load it
config({ path: envFile });

// Optional: allow local overrides (uncommitted)
config({ path: path.resolve(process.cwd(), "env", ".env.local"), override: true });


const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;


const httpServer = createServer(app);


connectDB().then(() => {
  initializeSocket(httpServer);
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Error connecting to MongoDB", error);
  process.exit(1);
});