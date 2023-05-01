import React from 'react'
import { Footer, Navbar, BackToTop } from '../components';
import { About,ContactForm } from '../sections';


const ContactUa = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      {/* <About /> */}
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <ContactForm />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
    <BackToTop />
  </div>
  )
}

export default ContactUa