'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Drawer from './drawer';
import { BiPhone } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const Header: React.FC = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const navItems = [
        { label: 'About', link: '/#about' },
        { label: 'Projects', link: '/#projects' },
        { label: 'Testimonial', link: '/#testimonials' },
        { label: 'FAQ', link: '/#faq' },
    ];


    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollY(currentScrollY);

        if (currentScrollY > 50) { // Adjust this value based on when you want the background to appear
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [lastScrollY]);

    useEffect(() => {
        const onScroll = () => {
            requestAnimationFrame(handleScroll);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [handleScroll]);

    return (
        <header className={`w-full bg-[#f5f5f5]  flex justify-center transition-transform duration-500 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'bg-[#f5f5f5] border-b-2 border-neutral-500' : 'bg-transparent'}`}>
            <div className="flex flex-col items-center w-full ">


                <div className="flex justify-between items-center relative w-full bg-neutral-100/40 px-6 mt-9 pt-1 pb-2 border-b-[0.2px] max-md:flex-col">
                    <div className="text-xs text-black">Connect with Us</div>
                    <div className="flex gap-5 text-black">
                        <div className=" items-center text-xs">
                            <span className="font-bold flex flex-row gap-2"><BiPhone /> Office: (123) 456-7890</span>

                        </div>
                        <div className="flex items-center text-xs">
                            <span className="font-bold flex flex-row gap-2"><BiPhone /> Cell: (123) 456-7890</span>

                        </div>
                        <div className="flex items-center text-xs">
                            <span className="font-bold flex flex-row gap-2"><TfiEmail />info@gmail.com </span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col items-start pr-4 pb-2 min-h-[42px] w-[47px]">
                            <div className="flex justify-center items-center w-full border border-black border-solid max-w-[32px] min-h-[32px]">
                                <FaFacebookF color="black" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start pr-4 pb-2 min-h-[42px] w-[47px]">
                            <div className="flex justify-center items-center w-full border border-black border-solid max-w-[32px] min-h-[32px]">
                                <SiGooglemaps color="black" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full shadow-md px-4 max-md:flex-col">
                    <div className="flex items-center">
                        <div className="bg-white w-24 h-24"></div>
                    </div>
                    <nav className="flex gap-5 text-black uppercase max-md:flex-col">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#areas">Areas We Serve</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact Us</a>
                    </nav>
                    <button className="bg-red-500 text-black px-4 py-2 uppercase">
                        Book an Appointment
                    </button>
                </div>
            </div>

        </header>
    );
};

export default React.memo(Header);
