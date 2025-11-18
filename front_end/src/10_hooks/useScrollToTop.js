import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to scroll to top on route change
 * Automatically triggers when pathname changes
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use 'instant' for immediate scroll, or 'smooth' for animated
    });
  }, [pathname]); // Re-run whenever pathname changes
};

