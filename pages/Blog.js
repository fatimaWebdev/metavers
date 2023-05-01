import React from 'react'
import { Footer, Navbar, BackToTop} from '../components';
import {  Posts  } from '../sections';


const Blog = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Posts />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
    <BackToTop />
  </div>
  )
}

export default Blog