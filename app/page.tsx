"use client"
import React from 'react';
import "./global.css";
import Hero from './components/home/Hero';
import Welcome from './components/home/Welcome';
import Fishing from './components/home/Fishing';
import Features from './components/home/Features';
import Scroll from './components/home/Scroll';
import Testimonials from './components/home/Testimonials';
import News from './components/home/News';
import Photos from './components/home/Photos';
import Footer from "@/app/components/Footer";
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme';

const Page = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
    </>
  )
}

      {/* <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} >
          <One />
        </ParallaxLayer>
        <ParallaxLayer offset={350}  >
          <Two />
        </ParallaxLayer>
      </Parallax> */}
 
export default Page