import { useCallback } from "react";

export const useContact_handlers = ({ states, setters, apiHelpers }) => {
  const { formData } = states;
  const { setFormData, setIsLoading, setIsFormError } = setters;
  const { submitForm, wakeUpServer } = apiHelpers;

  // Handle form field changes
  const handleFormChange = useCallback(
    (field, value) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      // Clear form error when user starts typing
      setIsFormError(false);
    },
    [setFormData, setIsFormError]
  );

  // Client-side validation
  const validateForm = useCallback(() => {
    // Validate name (required, min 3 characters)
    if (!formData.name || formData.name.trim().length < 3) {
      return "Name must be at least 3 characters";
    }

    // Validate message (required, max 1000 characters)
    if (!formData.message || formData.message.trim().length === 0) {
      return "Message is required";
    }

    if (formData.message.trim().length > 1000) {
      return "Message must not exceed 1000 characters";
    }

    return null;
  }, [formData]);

  // Handle form submission
  const handleSubmitForm = useCallback(
    async (e) => {
      e?.preventDefault();

      // Clear previous errors
      setIsFormError(false);

      // Client-side validation
      const validationError = validateForm();
      if (validationError) {
        setIsFormError(true);
        console.error("Form validation error:", validationError);
        return { success: false, error: validationError };
      }

      // Set loading state
      setIsLoading(true);

      try {
        // Prepare form data (only send non-empty optional fields)
        const submitData = {
          name: formData.name.trim(),
          message: formData.message.trim(),
        };

        // Add optional fields only if they have values
        if (formData.service && formData.service.trim().length > 0) {
          submitData.service = formData.service.trim();
        }
        if (formData.phone && formData.phone.trim().length > 0) {
          submitData.phone = formData.phone.trim();
        }
        if (formData.whatsapp && formData.whatsapp.trim().length > 0) {
          submitData.whatsapp = formData.whatsapp.trim();
        }

        // Submit form
        const result = await submitForm(submitData);

        if (result.success) {
          // Reset form on success
          setFormData({
            name: "",
            service: "",
            message: "",
            phone: "",
            whatsapp: "",
          });
          setIsFormError(false);
          return {
            success: true,
            message: "Contact form submitted successfully!",
          };
        } else {
          setIsFormError(true);
          return {
            success: false,
            error: result.error || "Failed to submit form",
          };
        }
      } catch (error) {
        setIsFormError(true);
        console.error("Error in handleSubmitForm:", error);
        return {
          success: false,
          error: error.message || "An unexpected error occurred",
        };
      } finally {
        setIsLoading(false);
      }
    },
    [
      formData,
      validateForm,
      submitForm,
      setFormData,
      setIsLoading,
      setIsFormError,
    ]
  );

  // Handle server wake-up
  const handleWakeUpServer = useCallback(async () => {
    setters.setIsWakingTheServer(true);
    try {
      const result = await wakeUpServer();
      setters.setIsServerAwake(result.success);
      return result;
    } catch (error) {
      setters.setIsServerAwake(false);
      console.error("Error waking up server:", error);
      return { success: false, error: error.message };
    } finally {
      setters.setIsWakingTheServer(false);
    }
  }, [wakeUpServer, setters]);

  return {
    handlers: {
      handleFormChange,
      handleSubmitForm,
      handleWakeUpServer,
    },
  };
};
