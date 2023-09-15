import React from 'react';
import "./global.css";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import SectionHero from './components/homepage/SectionHero';
import SectionWelcome from './components/homepage/SectionWelcome';
import SectionFishing from './components/homepage/SectionFishing';
import SectionFeatures from './components/homepage/SectionFeatures';
import SectionScroll from './components/homepage/SectionScroll';
import SectionPhotos from './components/homepage/SectionPhotos';
import SectionTestimonials from './components/homepage/SectionTestimonials';
import SectionNews from './components/homepage/SectionNews';
import Footer from "@/app/components/Footer";

const Page = () => {
  return (
    <>
      
        <SectionHero />
        <SectionWelcome />
        <SectionFishing />
        <SectionFeatures />
        <SectionScroll />
        <SectionTestimonials />
        <SectionNews />
        <SectionPhotos />
        <Footer />
      {/* <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} >
          <SectionOne />
        </ParallaxLayer>
        <ParallaxLayer offset={350}  >
          <SectionTwo />
        </ParallaxLayer>
      </Parallax> */}
    </>

  )
}

export default Page