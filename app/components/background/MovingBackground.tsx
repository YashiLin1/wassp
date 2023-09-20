import React, { useState } from 'react';
import styles from './MovingBackground.module.css';
import { Box } from '@mui/material';
import { animated } from '@react-spring/web';

const MovingBackground = () => {
    // const containerRef = React.useRef<HTMLDivElement>(null!)
    const [firstDotOpacity, setFirstDotOpacity] = useState(0.8);
    const [secondDotOpacity, setSecondDotOpacity] = useState(0.6);

    //I wanted to utilize useScroll from React-spring to change the opacity of two blurry dots in the background, but kept running in issues.
    return (
        <Box sx={{ position: 'relative' }}>

            <animated.div
                className={styles.dot}
                style={{
                    top: '0',
                    right: '0',
                    opacity: firstDotOpacity
                }}
            />

            <animated.div
                className={styles.dot}
                style={{
                    left: '0',
                    bottom: '0',
                    opacity: secondDotOpacity
                }}
            />
        </Box>
    );
};

export default MovingBackground;
