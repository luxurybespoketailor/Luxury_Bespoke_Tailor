import { useCallback } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const useContact_apiHelpers = () => {
  const submitForm = useCallback(async (formData) => {
    try {
      console.log("Submitting contact form...");

      const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit contact form");
      }

      console.log("Contact form submitted successfully");
      return { success: true, data };
    } catch (error) {
      console.error("Error submitting contact form:", error.message);
      return {
        success: false,
        error: error.message || "Network error - please try again",
      };
    }
  }, []);

  const wakeUpServer = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`, {
        method: "GET",
      });

      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error("Error waking up server:", error.message);
      return {
        success: false,
        error: error.message || "Server is not responding",
      };
    }
  }, []);

  return {
    apiHelpers: {
      submitForm,
      wakeUpServer,
    },
  };
};
