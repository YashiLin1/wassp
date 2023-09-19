import React from 'react';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import styles from './NavBtn.module.css';

interface NavBtnProps {
  text: string;
}

const NavBtn: React.FC<NavBtnProps> = ({ text }) => {
  return (
    <Button className={styles.navbtn}
      sx={{
        px: {
          xs: 3.8,
          md: 4.2,
          lg: 4.6,
          xl: 5,
        },
        py: {
          xs: 0.6,
          lg:1,
          xl:1.4
        }
      }}>
      <Typography variant="body1">{text}</Typography>
      <Image src="/ArrowRight.svg" height={35} width={35} className={styles.svg} alt="Arrow Right" />
    </Button>
  )
}

export default NavBtn;