"use client";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/constant/consant";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Nav = ({ openNav }) => {
    return (
        <nav className="flex items-center justify-between h-[13vh] z-[100] w-full mx-auto transition-all duration-200 bg-red-600 px-8 md:px-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mr-3">
                <img
                    src="/nabdmasr.ico"
                    alt="Nabd Masr Logo"
                    className="h-12 md:h-16 w-auto object-contain"
                />
            </Link>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex items-center justify-center space-x-10 ml-20">
                {Navlinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className="relative text-white text-base font-medium transition duration-300 hover:text-gray-300 group"
                    >
                        {link.label}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            {/* Buttons & Mobile Menu Icon */}
            <div className="flex items-center space-x-5 md:space-x-8">
                <Button className="text-white border border-white py-2 px-7 rounded-lg transition duration-300 hover:bg-white hover:text-red-600">
                    Login
                </Button>
                <Button className="bg-white text-red-600 border border-red-600 py-2 px-7 rounded-lg transition duration-300 hover:bg-transparent hover:text-white hover:border-white">
                    Signup
                </Button>

                {/* Menu Icon for Mobile */}
                <MenuIcon onClick={openNav} className="cursor-pointer size-6 text-white lg:hidden" />
            </div>
        </nav>
    );
};

export default Nav;
