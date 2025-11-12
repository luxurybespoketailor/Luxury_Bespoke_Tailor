import { useEffect, useRef } from "react";
import { useWakeUpServer_apiHelper } from "./useWakeUpServer_apiHelper.js";

/**
 * Custom hook to wake up the server on app initialization
 * Runs once per session as a backup mechanism to prevent server from sleeping
 */
export const useWakeUpServer = () => {
  const { apiHelper } = useWakeUpServer_apiHelper();
  const hasWokenUp = useRef(false);

  useEffect(() => {
    // Only run once per session
    if (hasWokenUp.current) {
      return;
    }

    // Wake up server silently
    const wakeUp = async () => {
      hasWokenUp.current = true;
      await apiHelper.wakeUpServer();
      // Silent on success - no logging
    };

    wakeUp();
  }, [apiHelper]);
};
