import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedElement = ({ children }) => {
  const elementRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.5, // Change this value to adjust when the animation should start
  });

  useEffect(() => {
    const element = elementRef.current;
    if (inView) {
      element.classList.add("animate-slide-in-right");
    } else {
      element.classList.remove("animate-slide-in-right");
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full flex items-start justify-end">
      <div ref={elementRef}>{children}</div>
    </div>
  );
};

export default AnimatedElement;
