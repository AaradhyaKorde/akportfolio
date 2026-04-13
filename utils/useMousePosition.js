import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    // Handle both mouse and touch events
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    // Add mouse event listeners
    window.addEventListener("mousemove", updateMousePosition);

    // Add touch event listeners for mobile
    window.addEventListener("touchstart", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);

    return () => {
      // Clean up all event listeners
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchstart", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
