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

  // const buffer = 1;
  // I don't know how to use buffer yet but it's a smarter way

  // computed values of parallax section starting point, so it's convenient to adjust later
  const start = 0;
  const heroStart = start + 0;
  const welcomeStart = heroStart + 0.95;
  const fishingStart = welcomeStart + 0.05;
  const featuresStart = fishingStart + 0.999;
  const scrollStart = featuresStart + 0.251;
  const footerStart = scrollStart + 1.25;

  return (
    <>
    {/* //ThemeProvider is from Material UI, Parallax is from React-spring */}
      <ThemeProvider theme={theme}>
        <Navbar />
        <Parallax pages={4.3}>
          <ParallaxLayer offset={heroStart} speed={0.04}  >
            <div className={styles.overlayHero}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={heroStart} speed={0.5} >
            <Hero />
          </ParallaxLayer>
          <ParallaxLayer offset={welcomeStart} speed={1} >
            <Welcome />
          </ParallaxLayer>
          <ParallaxLayer offset={fishingStart} speed={1} >
            <div className={styles.fishingBackground}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={fishingStart} speed={1.2} >
            <Fishing />
          </ParallaxLayer>
          <ParallaxLayer offset={featuresStart} speed={1} factor={0.5}>
            <Features />
          </ParallaxLayer>
          <ParallaxLayer offset={scrollStart} speed={1} >
            <Scroll />
            <Testimonials />
            <News />
            <Photos />
          </ParallaxLayer>
          <ParallaxLayer offset={footerStart} speed={0.7} >
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