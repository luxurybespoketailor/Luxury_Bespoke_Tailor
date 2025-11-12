import { useState } from "react";

export const useContact_states = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: "",
    phone: "",
    whatsapp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [isServerAwake, setIsServerAwake] = useState(false);
  const [isWakingTheServer, setIsWakingTheServer] = useState(false);

  return {
    states: {
      formData,
      isLoading,
      isFormError,
      isServerAwake,
      isWakingTheServer,
    },
    setters: {
      setFormData,
      setIsLoading,
      setIsFormError,
      setIsServerAwake,
      setIsWakingTheServer,
    },
  };
};
