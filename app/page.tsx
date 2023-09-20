"use client"
import React from 'react';
import "./global.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from "@/app/components/Navbar";
import Hero from '@/app/components/home/Hero';
import Welcome from '@/app/components/home/Welcome';
import Fishing from '@/app/components/home/Fishing';
import Features from '@/app/components/home/Features';
import MarqueeLogo from '@/app/components/home/MarqueeLogo';
import Testimonials from '@/app/components/home/Testimonials';
import News from '@/app/components/home/News';
import Photos from '@/app/components/home/Photos';
import Footer from "@/app/components/Footer";
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/app/components/theme';
import styles from '@/app/components/home/home.module.css';
import MovingBackground from '@/app/components/background/MovingBackground';
import {
  heroStart,
  welcomeStart,
  fishingStart,
  featuresStart,
  marqueeStart,
  testimonialsStart,
  footerStart,
  total,
} from '@/app/components/animation/parallax';

const Page = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Parallax pages={total}>
          <ParallaxLayer offset={heroStart} speed={0.04}  >
            <div className={styles.heroBackground}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={heroStart} speed={0.5} >
            <Hero />
          </ParallaxLayer>
          <ParallaxLayer offset={welcomeStart} speed={1} style={{ zIndex: '3' }}>
            <Welcome />
          </ParallaxLayer>
          <ParallaxLayer offset={fishingStart} speed={0.8} >
            <div className={styles.fishingBackground}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={fishingStart} speed={1.2} >
            <Fishing />
          </ParallaxLayer>
          <ParallaxLayer offset={featuresStart} speed={1} factor={0.8}>
            <Features />
          </ParallaxLayer>
          <ParallaxLayer offset={marqueeStart} sticky={{ start: marqueeStart, end: footerStart }}>
            <MovingBackground />
          </ParallaxLayer>
          <ParallaxLayer offset={marqueeStart} speed={1} factor={0.2}>
            <MarqueeLogo />
          </ParallaxLayer>
          <ParallaxLayer offset={testimonialsStart} speed={1} >
            <Testimonials />
            <News />
            <Photos />
          </ParallaxLayer>
          <ParallaxLayer offset={footerStart} speed={0.6} >
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </ThemeProvider>

    </>
  )
}



export default Page