import { useEffect, useState } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export const useParallax = (speed: number = 0.5) => {
  const { y } = useScrollPosition();
  return y * speed;
};

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (scrollY > prevScrollY) {
        setScrollDirection("down");
      } else if (scrollY < prevScrollY) {
        setScrollDirection("up");
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [prevScrollY]);

  return scrollDirection;
};

export const useInView = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return [setRef, isInView] as const;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

// Magnetic effect hook for buttons
export const useMagnetic = (strength: number = 0.3) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      ref.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      ref.style.transform = "translate(0px, 0px)";
    };

    ref.addEventListener("mousemove", handleMouseMove);
    ref.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.removeEventListener("mousemove", handleMouseMove);
      ref.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);

  return setRef;
};
