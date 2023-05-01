import React from 'react'
import { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleOnClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <button
                className={`fixed bottom-12 right-8 bg-gray-700 text-white opacity-75 px-4 py-4 rounded-full shadow ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } transition-opacity duration-300 ease-in-out`}
                onClick={handleOnClick}
            >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L12 19M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </>
    );
};

export default BackToTop