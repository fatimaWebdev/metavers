import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        // You can add your logic here to handle the form submission
    };

    return (
        <section className={`${styles.paddings} relative z-10`}>
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| Contact Us" textStyles="text-center" />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                >
                    <span className="font-extrabold text-white"> Get In Toch </span>
                </motion.p>
                <motion.img
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    src="/arrow-down.svg"
                    alt="arrow down"
                    className="w-[18px] h-[28px] object-contain mt-[28px]"
                />
            </motion.div>
            
            {/* Form  */}
            <motion.form  onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 justify-center ">
                <motion.div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-bold text-white">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-bold text-white">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </motion.div>
                <motion.div className="mb-8">
                    <label htmlFor="message" className="block mb-2 font-bold text-white">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full h-32 px-4 py-2 text-gray-700 bg-gray-200 rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </motion.div>
                <button type="submit" className="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700">
                    Submit
                </button>
            </motion.form>
        </section>

    );
};

export default ContactForm;
