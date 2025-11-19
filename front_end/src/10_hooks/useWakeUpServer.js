import { useEffect, useRef } from "react";
import { useWakeUpServer_apiHelper } from "./useWakeUpServer_apiHelper.js";


export const useWakeUpServer = () => {
  const { apiHelper } = useWakeUpServer_apiHelper();
  const hasWokenUp = useRef(false);

  useEffect(() => {
    if (hasWokenUp.current) {
      return;
    }

    const wakeUp = async () => {
      hasWokenUp.current = true;
      await apiHelper.wakeUpServer();
    };

    wakeUp();
  }, [apiHelper]);
};
