import { useContext } from "react";
import { DeviceContext } from "./DeviceContext";

const useDeviceContext = () => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error(
      "useDeviceContext must be used within a DeviceProvider. " +
        "Make sure to wrap your component tree with <DeviceProvider>."
    );
  }

  return context;
};

export default useDeviceContext;
