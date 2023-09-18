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
        <Parallax pages={4.3}>
          <ParallaxLayer offset={0} speed={0.05}  >
            <div className={styles.overlayHero}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.8} >
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
          <ParallaxLayer offset={1.99} speed={1}>
            <Features />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} factor={2.5}>
            <Scroll />
            <Testimonials />
            <News />
            <Photos />
          </ParallaxLayer>
          <ParallaxLayer offset={3.55} factor={1} speed={0.5}>
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