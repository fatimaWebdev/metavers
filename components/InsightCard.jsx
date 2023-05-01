'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, link, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex items-center justify-center w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-white p-2"
      >
        <a href={link} className='hover:cursor-pointer'> 
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[30px] h-[30px] object-contain"
          />
        </a>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
