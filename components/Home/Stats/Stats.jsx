import React from 'react';
import { stats } from "@/constant/statsdata";

const Stats = () => (
    <section className="flex flex-wrap justify-start md:justify-around sm:mb-20 mb-6">
        {stats.map((stat) => (
            <div key={stat.id} className="flex items-center m-3 text-left">
                <h4 className="font-semibold text-4xl text-red-600">
                    {stat.value}
                </h4>
                <p className="text-lg font-medium uppercase ml-3 text-black">
                    {stat.title}
                </p>
            </div>
        ))}
    </section>
);

export default Stats;
