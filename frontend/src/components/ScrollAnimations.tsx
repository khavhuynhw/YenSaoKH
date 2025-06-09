import React, { useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollAnimation";

const ScrollAnimations: React.FC = () => {
  const { y } = useScrollPosition();

  useEffect(() => {
    // Update CSS custom properties for parallax effects
    document.documentElement.style.setProperty("--scroll-y", y.toString());

    // Add scroll-based classes to elements
    const elements = document.querySelectorAll("[data-scroll]");
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate visibility percentage
      const visibilityStart = windowHeight;
      const visibilityEnd = -elementHeight;
      const totalDistance = visibilityStart - visibilityEnd;
      const currentDistance = visibilityStart - elementTop;
      const visibilityPercentage = Math.max(
        0,
        Math.min(100, (currentDistance / totalDistance) * 100),
      );

      // Apply scroll-based transforms
      const scrollType = element.getAttribute("data-scroll");

      switch (scrollType) {
        case "fade":
          (element as HTMLElement).style.opacity = (
            visibilityPercentage / 100
          ).toString();
          break;
        case "slide-up":
          const translateY = Math.max(0, 50 - visibilityPercentage * 0.5);
          (element as HTMLElement).style.transform =
            `translateY(${translateY}px)`;
          (element as HTMLElement).style.opacity = (
            visibilityPercentage / 100
          ).toString();
          break;
        case "scale":
          const scale = 0.8 + visibilityPercentage * 0.002;
          (element as HTMLElement).style.transform =
            `scale(${Math.min(1, scale)})`;
          break;
        case "parallax-slow":
          (element as HTMLElement).style.transform = `translateY(${y * 0.3}px)`;
          break;
        case "parallax-fast":
          (element as HTMLElement).style.transform =
            `translateY(${y * -0.2}px)`;
          break;
      }
    });
  }, [y]);

  return null;
};

export default ScrollAnimations;
