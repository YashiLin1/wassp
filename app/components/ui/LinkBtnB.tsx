// The only difference between LinkBtnA and LinkBtnB is the hover animation

import React from 'react';
import { Link, Typography } from '@mui/material';
import styles from './LinkBtn.module.css';

interface LinkBtnProps {
    text: string;
}

const LinkBtnB: React.FC<LinkBtnProps> = ({ text }) => {
    return (
        <Link href="#" className={styles.LinkBtnB}>
            <Typography variant="body1">{text}</Typography>
        </Link>
    )
}

export default LinkBtnB;