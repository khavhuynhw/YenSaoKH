import React, { useEffect, useRef, useState } from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "scaleIn"
    | "bounceIn"
    | "rotateIn";
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  triggerOnce?: boolean;
  stagger?: number;
  staggerChildren?: boolean;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation = "fadeIn",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = "",
  style = {},
  triggerOnce = true,
  stagger = 0.1,
  staggerChildren = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce, hasTriggered]);

  const getAnimationStyles = () => {
    const baseStyles: React.CSSProperties = {
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}s`,
    };

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return {
            ...baseStyles,
            opacity: 0,
          };
        case "slideUp":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "translateY(40px)",
          };
        case "slideLeft":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "translateX(-40px)",
          };
        case "slideRight":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "translateX(40px)",
          };
        case "scaleIn":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "scale(0.9)",
          };
        case "bounceIn":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "scale(0.8) translateY(20px)",
          };
        case "rotateIn":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "rotate(-10deg) scale(0.9)",
          };
        default:
          return {
            ...baseStyles,
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: "none",
    };
  };

  const renderChildren = () => {
    if (staggerChildren && React.Children.count(children) > 1) {
      return React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
            transitionDelay: `${delay + index * stagger}s`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(20px)",
          }}
        >
          {child}
        </div>
      ));
    }
    return children;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...getAnimationStyles(),
        ...style,
      }}
    >
      {renderChildren()}
    </div>
  );
};

// Global CSS animations
export const globalAnimationStyles = `
  @keyframes pulse {
    0%, 100% { 
      opacity: 0.6; 
      transform: scale(1); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1.05); 
    }
  }

  @keyframes float {
    0%, 100% { 
      transform: translateY(0px); 
    }
    50% { 
      transform: translateY(-10px); 
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0, -8px, 0);
    }
    70% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0, -4px, 0);
    }
    90% {
      transform: translate3d(0,-1px,0);
    }
  }

  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes glow {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); 
    }
    50% { 
      box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); 
    }
  }

  @keyframes sparkle {
    0%, 100% { 
      opacity: 0; 
      transform: scale(0) rotate(0deg); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1) rotate(180deg); 
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .animate-sparkle {
    animation: sparkle 1.5s ease-in-out infinite;
  }

  .hover-scale {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-scale:hover {
    transform: scale(1.05);
  }

  .hover-lift {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  .hover-glow {
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-glow:hover {
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
  }

  .stagger-children > * {
    animation-delay: calc(var(--stagger-delay, 0.1s) * var(--index, 0));
  }

  .parallax-slow {
    transform: translateY(calc(var(--scroll-y, 0) * 0.5px));
  }

  .parallax-fast {
    transform: translateY(calc(var(--scroll-y, 0) * -0.3px));
  }

  .scroll-fade {
    opacity: calc(1 - var(--scroll-y, 0) / 500);
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Loading states */
  .loading-shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Magnetic effect for buttons */
  .magnetic {
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Text animations */
  .typewriter {
    overflow: hidden;
    border-right: 2px solid #d4af37;
    white-space: nowrap;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #d4af37; }
  }

  /* Reveal animations */
  .reveal-text {
    position: relative;
    overflow: hidden;
  }

  .reveal-text::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #d4af37;
    transform: translateX(-100%);
    animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  @keyframes reveal {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default AnimationWrapper;
