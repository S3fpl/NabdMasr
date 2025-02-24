"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/blood-donation.json"; 

const Hero = () => {
    return (
        <section className="w-[90%] min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
            {/* Text Section */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-red-600">
                    Nabd Masr
                </h1>
                <h2 className="text-4xl md:text-5xl leading-tight font-semibold">
                    <span className="text-red-600 font-bold">Blood</span> donation has a 
                    noble purpose—saving <span className="text-red-600 font-bold">lives</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-700">
                    A platform for blood donation and organ transplantation.
                </p>
            </div>

            {/* Animation Section */}
            <aside className="md:w-1/2 flex justify-center">
                <Lottie animationData={animationData} className="w-[75%] md:w-[90%] max-w-lg drop-shadow-lg" />
            </aside>
        </section>
    );
};

export default Hero;
