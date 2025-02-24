import React from 'react';

const About = () => {
    return (
        <section className="w-[90%] mx-auto flex flex-col gap-16 py-12">
            <h2 className="text-3xl font-bold text-center text-red-600">About Us</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="sm:w-[40%]">
                    <img
                        src="/About.svg"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    /> 
                </div>
                <div className="sm:w-[50%] text-center sm:text-left">
                    <p className="text-lg text-gray-700 mb-4">
                        We are a dedicated team focused on providing the best services in the field of blood donation and organ transplantation.
                        Our mission is to save lives and make a positive impact on society.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        We aim to build a community where people come together to donate blood and organs, helping those in need and ensuring a healthier future.
                    </p>
                    <button className="mt-4 px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
