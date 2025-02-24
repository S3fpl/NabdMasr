import React from 'react';
import { features } from '@/constant/Feaure';

const Feature = () => {
    return (
        <section className="w-[90%] mx-auto flex flex-col gap-16">
            {/* Top Section */}
            <div className="w-full text-center flex flex-col items-center justify-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-600 pb-2">Our Features</h2>
                <p className="text-md sm:text-lg text-gray-700 mt-2">
                    Providing the best services for blood donation and organ transplantation.
                </p>
            </div>


            {/* Centered Cards Grid */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-all hover:shadow-lg flex flex-col items-center text-center w-[270px] h-[270px] aspect-square">
                            <img className="w-1/2 h-1/2 object-contain" src={feature.img} alt={feature.title} />
                            <div className="p-2 flex flex-col flex-grow justify-between">
                                <h5 className="text-lg font-bold text-red-700">{feature.title}</h5>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                            <div className="w-full text-left">
                                <a href={feature.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all">
                                    Read more
                                    <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;