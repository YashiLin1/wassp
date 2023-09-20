import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/LinearProgress';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    number: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ number }) => {

    return (
        <Box
            sx={{
                
            }}>
            <CircularProgress
                variant="determinate"
                value={number}
                className={styles.progressbar}
            />
        </Box>
    );
}

export default ProgressBar;