import { useCallback } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const useWakeUpServer_apiHelper = () => {
  const wakeUpServer = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`, {
        method: "GET",
      });

      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error("⚠️ Failed to wake up server:", error.message);
      return {
        success: false,
        error: error.message || "Server is not responding",
      };
    }
  }, []);

  return {
    apiHelper: {
      wakeUpServer,
    },
  };
};

