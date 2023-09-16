import React from 'react';
import Image from 'next/image';
import styles from './button.module.css';

interface NavBtnProps {
  text: string;
}

const NavBtn: React.FC<NavBtnProps> = ({ text }) => {
  return (
    <button className={styles.navbtn}>
        {text}
        <Image src="/ArrowRight.svg" height={50} width={50} alt="Arrow Right"/>
    </button>
  )
}

export default NavBtn;