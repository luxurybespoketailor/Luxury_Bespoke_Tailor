import http from "http";
import { PORT } from "../00_config/config.index.js";

const displayName = " | keepAlive_srv.js | ";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pingKeepAlive = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "localhost",
      port: PORT,
      path: "/api/keepalive",
      method: "GET",
      timeout: 5000,
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          resolve({ success: true, statusCode: res.statusCode });
        } else {
          reject(
            new Error(
              `Keep-alive ping failed with status code: ${res.statusCode}`
            )
          );
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Keep-alive ping timeout"));
    });

    req.end();
  });
};

export const keepAlive_srv = async () => {
  const maxRetries = 3;
  const retryDelays = [1000, 2000, 4000]; 

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await pingKeepAlive();
      return { success: true };
    } catch (error) {
      if (attempt === maxRetries) {
        const timestamp = new Date().toISOString();
        console.error(
          `⚠️${displayName}|<KEEP_ALIVE>| [FAILED] | ${timestamp} | Failed after ${maxRetries} attempts:`,
          error.message
        );
        return { success: false, error: error.message };
      }

      await delay(retryDelays[attempt - 1]);
    }
  }

  return { success: false, error: "All retry attempts exhausted" };
};
