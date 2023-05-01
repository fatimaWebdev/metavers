'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>

        <div className="w-[24px] h-[24px] object-contain">
          {showSidebar ? (
            <button className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50" onClick={() => setShowSidebar(!showSidebar)} > x </button>
          ) : (

            <img src="/menu.svg" alt="menu" onClick={() => setShowSidebar(!showSidebar)}
              className="w-[24px] h-[24ox] object-contain fixed  z-30 flex items-center cursor-pointer" />

          )}

          <div
            className={`top-0 right-0 w-[35vw] bg-gray-900  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"} max-lg:w-[50vw]`}
          >
            <a href='/' className='hover:cursor-pointer'>
            <h3 className="mt-20 text-xl font-semibold text-white">Home </h3>
            </a>

            <a href='/AboutUs' className='hover:cursor-pointer'>
            <h3 className="mt-20 text-xl font-semibold text-white">About Us </h3>
            </a>

            <a href='/Serves' className='hover:cursor-pointer'>
            <h3 className="mt-20 text-xl font-semibold text-white">Serves </h3>
            </a>
            <a href='/Blog' className='hover:cursor-pointer'>
            <h3 className="mt-20 text-xl font-semibold text-white">Blog </h3>
            </a>

            <a href='/ContactUa' className='hover:cursor-pointer'>
            <h3 className="mt-20 text-xl font-semibold text-white">Contact Us </h3>
            </a>

          </div>

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;

