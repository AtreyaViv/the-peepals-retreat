import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to the top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Optional: If using hash links (e.g., /about#team), scroll to that section
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
