import React from 'react'
import { Footer, Navbar, BackToTop } from '../components';
import { About, GetStarted, Seveses, Insights } from '../sections';


const AboutUs = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Seveses />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <Insights />
    </div>
    <Footer />
    <BackToTop />
  </div>
  )
}

export default AboutUs