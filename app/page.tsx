"use client"
import React from 'react';
import "./global.css";
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

const Page = () => {
  return (
    <>
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