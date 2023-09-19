"use client"
import React from 'react';
import "./global.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from "@/app/components/Navbar";
import Hero from '@/app/components/home/Hero';
import Welcome from '@/app/components/home/Welcome';
import Fishing from '@/app/components/home/Fishing';
import Features from '@/app/components/home/Features';
import Scroll from '@/app/components/home/Scroll';
import Testimonials from '@/app/components/home/Testimonials';
import News from '@/app/components/home/News';
import Photos from '@/app/components/home/Photos';
import Footer from "@/app/components/Footer";
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/app/components/theme';
import styles from '@/app/components/home/home.module.css';

const Page = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Parallax pages={4.2}>
          <ParallaxLayer offset={0} speed={0.04}  >
            <div className={styles.overlayHero}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.6} >
            <Hero />
          </ParallaxLayer>
          <ParallaxLayer offset={0.95} speed={1} >
            <Welcome />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} >
            <div className={styles.overlayFishing}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} >
            <Fishing />
          </ParallaxLayer>
          <ParallaxLayer offset={1.999} speed={1} factor={0.5}>
            <Features />
          </ParallaxLayer>
          <ParallaxLayer offset={2.25} speed={1} >
            <Scroll />
            <Testimonials />
            <News />
            <Photos />
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.8} >
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </ThemeProvider>
      {/* <>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Hero />
          <Welcome />
          <Fishing />
          <Features />
          <Scroll />
          <Testimonials />
          <News />
          <Photos />
          <Footer />
        </ThemeProvider>
      </> */}
    </>
  )
}



export default Page