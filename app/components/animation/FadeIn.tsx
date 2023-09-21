import React from "react";
import { animated, useSpring, easings } from "@react-spring/web";

interface FadeInProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, isVisible, delay }) => {
  const springStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    delay: isVisible ? delay : 0,
    config: {
      duration: 300,
      easing: easings.easeInOutSine,
    },
  });

  return <animated.div style={springStyles}>{children}</animated.div>;
};

export default FadeIn;
