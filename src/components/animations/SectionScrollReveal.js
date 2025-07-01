'use client';
import { useRef, useEffect, useState } from "react";

const SectionScrollReveal = ({
  children,
  className = "",
  threshold = 0.15,
  ...props
}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  console.log('SectionScrollReveal isVisible:', isVisible);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: "all 0.7s cubic-bezier(.4,0,.2,1)",
        border: "2px solid red", // Debug border
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionScrollReveal; 