import React from 'react';
import { Link, Typography } from '@mui/material';
import styles from './LinkBtn.module.css';

interface LinkBtnProps {
    text: string;
}

const LinkBtnA: React.FC<LinkBtnProps> = ({ text }) => {
    return (
        <Link href="#" className={styles.LinkBtnA}>
            <Typography variant="body1">{text}</Typography>
        </Link>
    )
}

export default LinkBtnA;