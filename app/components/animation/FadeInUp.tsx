import React from "react";
import { animated, useSpring, easings } from "@react-spring/web";

interface FadeInUpProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay: number;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children, isVisible, delay }) => {
  const springStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(24px)",
    delay: isVisible ? delay : 0,
    config: {
      duration: 700,
      easing: easings.easeInOutSine,
    },
  });

  return <animated.div style={springStyles}>{children}</animated.div>;
};

export default FadeInUp;
