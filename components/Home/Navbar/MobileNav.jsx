import { Navlinks } from "@/constant/consant";
import { XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MobileNav = ({ showNav, closeNav }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (showNav) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [showNav]);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(closeNav, 300); // Delay closing to allow the animation to finish smoothly
    };

    return (
        <header className={`fixed top-0 left-0 w-full h-screen bg-red-600 text-white flex flex-col justify-center space-y-6 z-[1050] transition-transform duration-500 ${animate ? "translate-y-0" : "-translate-y-full"
            }`}>
            {/* Close button */}
            <XIcon onClick={handleClose} className="absolute top-6 right-6 sm:w-8 sm:h-8 w-6 h-6 font-extrabold cursor-pointer text-white" />

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 pl-12">
                {Navlinks.map((link) => (
                    <Link key={link.id} href={link.url} className="text-white w-fit text-xl border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default MobileNav;

/*                <header className={`text-white fixed justify-center flex flex-col h-screen transition-all duration-500 w-full bg-red-600 space-y-6 z-[1050] ${
            animate ? "translate-y-0" : "-translate-y-[full]"
        } top-0`}>
            <XIcon onClick={handleClose} className="absolute top-6 right-6 sm:w-8 sm:h-8 w-6 h-6 font-extrabold cursor-pointer text-white" />
            */