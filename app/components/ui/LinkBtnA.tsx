// The only difference between LinkBtnA and LinkBtnB is the hover animation
// LinkBtnA has an underline, when hover on the underline animate out 
// LinkBtnB has no underline, when hover on the underline animate in

import React from 'react';
import { Link, Typography } from '@mui/material';
import styles from './LinkBtn.module.css';

interface LinkBtnProps {
    text: string;
    url: string;
}

const LinkBtnA: React.FC<LinkBtnProps> = ({ text, url  }) => {
    return (
        <Link href={url} className={styles.LinkBtnA}>
            <Typography variant="body1">{text}</Typography>
        </Link>
    )
}

export default LinkBtnA;