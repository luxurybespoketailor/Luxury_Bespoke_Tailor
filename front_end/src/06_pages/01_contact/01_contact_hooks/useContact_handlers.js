import { useCallback } from "react";

export const useContact_handlers = ({ states, setters, apiHelpers }) => {
  const handleFormChange = useCallback(async () => {}, []);
  const handleSubmitForm = useCallback(async () => {}, []);
  const handleWhakeUpServer = useCallback(async () => {}, []);
  return {
    handlers: {
      handleFormChange,
      handleSubmitForm,
      handleWhakeUpServer,
    },
  };
};
