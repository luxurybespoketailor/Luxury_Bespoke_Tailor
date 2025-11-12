import { useCallback } from "react";

export const useContact_apiHelpers = () => {
  const submitForm = useCallback(async () => {}, []);
  const whakeUpServer = useCallback(async () => {}, []);
  return {
    apiHelpers: {
      submitForm,
      whakeUpServer,
    },
  };
};
