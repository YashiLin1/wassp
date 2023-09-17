import React from 'react';
import { Link, Typography } from '@mui/material';
import styles from './LinkBtn.module.css';

interface LinkBtnProps {
    text: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({ text }) => {
    return (
        <Link href="#"  className={styles.LinkBtn}>
            <Typography variant="body2">{text}</Typography>
        </Link>
    )
}

export default LinkBtn;