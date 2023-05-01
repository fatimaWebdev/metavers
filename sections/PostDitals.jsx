'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';


const PostDitals = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/planet-06.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* <TypingText title="| PostDitals" /> */}
        <TitleText className="text-[30px]" title={<>The launch of the Metaverse makes Elon musk ketar-ketir</>} />
        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[22px] text-[20px] text-secondary-white"
      > While it's true that Elon Musk has expressed interest in the concept of the Metaverse and has even mentioned it during some of his interviews and on social media, I cannot confirm whether he is personally "ketar-ketir" (Indonesian for nervous or anxious) about its launch.
        <br></br>
      However, it's clear that many individuals and companies are eagerly anticipating the arrival of the Metaverse and the potential opportunities and challenges it may bring. The development of the Metaverse is still in its early stages, and it remains to be seen how it will be shaped by technology, society, and culture
      </motion.p>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default PostDitals