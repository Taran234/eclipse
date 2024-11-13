import * as React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Section = ({ title, children }: any) => (
    <div className="flex flex-col grow shrink justify-center py-px font-thin text-black border-solid border-y-[0.667px] border-y-stone-300 min-w-[240px]">
        <div className="flex flex-col pt-12 pr-6 pb-14 pl-9 w-full max-md:px-5">
            <div className="flex relative flex-col w-full text-lg tracking-wide leading-7">
                <div className="z-0">{title}</div>
                <div className="flex absolute left-0 z-0 w-5 h-px bg-orange-400 bottom-[-5px] min-h-[1px]" />
            </div>
            <div className="flex flex-col pl-5 mt-8 w-full text-base tracking-wide leading-7">
                {children}
            </div>
        </div>
    </div>
);

const ContactInfo = ({ icon, text }: any) => (
    <div className="flex items-center mt-5 w-full max-md:max-w-full">
        <div className="flex flex-col items-start self-stretch pr-3.5 my-auto w-7 text-xs font-black leading-3 min-h-[12px] min-w-[28px]">
            <div className="flex justify-center items-center px-px w-3.5 min-h-[12px] min-w-[14px]">
                <div className="flex-1 shrink self-stretch my-auto w-full">{icon}</div>
            </div>
        </div>
        <div className="self-stretch my-auto text-base font-thin leading-7">{text}</div>
    </div>
);

const Footer = () => (
    <div className="flex relative flex-col pt-11 bg-blue-50">
        <div className="flex absolute inset-0 z-0 bg-white opacity-60 min-h-[611px] w-full max-md:max-w-full" />
        <div className="flex z-0 flex-col justify-center items-center px-80 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col px-12 w-full max-w-[1256px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
                    <div className="flex flex-col grow shrink justify-center py-px border-solid border-r-[0.667px] border-r-stone-300 border-y-[0.667px] border-y-stone-300 min-w-[240px] w-[264px]">
                        <div className="flex flex-col py-12 pr-5 w-full">
                            <div className="flex shrink-0 bg-white h-[200px]" />
                            <div className="mt-6 text-base font-thin tracking-wide leading-7 text-black">
                                Licensed & Insured
                            </div>
                            <div className="flex justify-center items-center self-start p-4 mt-6 tracking-wide text-center text-black uppercase bg-orange-400 min-h-[50px] min-w-[156px]">
                                <div className="flex flex-col items-start self-stretch pr-3.5 my-auto text-xs font-black leading-3 whitespace-nowrap min-h-[12px] w-[26px]">
                                    <div className="flex justify-center items-center px-px w-3 min-h-[12px]">
                                        <div className="flex-1 shrink self-stretch my-auto w-full"><MdReviews size={25} /> </div>
                                    </div>
                                </div>
                                <div className="self-stretch my-auto text-base font-thin leading-5">
                                    Leave a Review!
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start mt-8">
                                <div className="flex flex-col items-start pr-4 pb-2.5 min-h-[42px] w-[47px]">
                                    <div className="flex justify-center items-center w-full border border-black border-solid max-w-[32px] min-h-[32px]">
                                        <FaFacebookF color="black" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start pr-4 pb-2.5 min-h-[42px] w-[47px]">
                                    <div className="flex justify-center items-center w-full border border-black border-solid max-w-[32px] min-h-[32px]">
                                        <SiGooglemaps color="black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Section title="Quick Links">
                        <div>Home</div>
                        <div>About</div>
                        <div>Areas We Serve</div>
                        <div>Gallery</div>
                        <div>Contact Us</div>
                    </Section>
                    <Section title="Find Us">
                        <ContactInfo icon="" text="abcd, WV" />
                        <ContactInfo icon="" text="Office: (123) 456-7890" />

                        <ContactInfo icon="" text="info@gmail.com" />
                    </Section>
                </div>
            </div>
        </div>
        <div className="flex justify-center py-5 bg-white text-sm text-black">
            <span>©2024 All Rights Reserved. Design by Harbourfront Web Designs</span>
        </div>
    </div>
);

export default Footer;
