//Fade in when in view
import React from 'react';
import { animated, useSpring, useInView, easings  } from '@react-spring/web';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [ref, inView] = useInView();

  const springStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    config: {
      duration: 700,
      easing:easings.easeInOutSine,
    }
  });

  return (
    <animated.div ref={ref} style={springStyles}>
      {children}
    </animated.div>
  );
};

export default FadeIn;