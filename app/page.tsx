import React from 'react'
import HeroSection from './components/HeroSection';
import WhoWeAre from './components/WhoWeAre';
import WhyChooseUs from './components/WhyChooseUs';
import OurMission from './components/OurMission';
import OurGallery from './components/OurGallery';

const page = () => {
  return (
    <div>
      <HeroSection/>
      <WhoWeAre/>
      <WhyChooseUs/>
      <OurMission/>
      <OurGallery/>
    </div>
  )
}

export default page
