import { useEffect } from "react";
import {
  useContact_states,
  useContact_apiHelpers,
  useContact_handlers,
} from "./_contact_hooks.index.js";

export const useContact = () => {
  const { states, setters } = useContact_states();
  const { apiHelpers } = useContact_apiHelpers();
  const { handlers } = useContact_handlers({ states, setters, apiHelpers });

  return { states: {}, handlers: {} };
};
