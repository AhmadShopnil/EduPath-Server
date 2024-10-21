import app from "./app";
import { Server } from "http";
import dotenv from "dotenv";
import config from "./app/config";
dotenv.config();

const port = config.port || 5000;
async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Learning path server is Running on Port ${port}`);
  });
}

main();
