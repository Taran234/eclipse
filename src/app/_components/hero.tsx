import * as React from "react";
import { BiPhoneCall } from "react-icons/bi";

function Hero() {
    return (
        <div className="relative flex justify-center items-center h-screen bg-white overflow-hidden">
            <img
                loading="lazy"
                src="/restoration-services.png"
                className="absolute inset-0 w-full h-full object-cover z-10"
                alt="Background"
            />
            <img
                loading="lazy"
                src="/restoration.jpg"
                className="absolute inset-0 w-full h-fit object-contain z-0"
                alt="Background"
            />

            <div className="relative z-10 text-center text-white px-4 justify-center mx-auto">
                <div className="border-l-4 border-orange-400 pl-2 text-sm mb-2">Quality Care</div>
                <h1 className="text-6xl md:text-4xl font-bold leading-tight">Restore, Renew,<br />Rebuild</h1>
                <p className="text-lg mt-3 leading-7">
                    Damage from water or fire? Partner with us for high-quality restoration services you can trust.
                </p>
                <button className="flex items-center mx-auto justify-center bg-slate-500 text-orange-400 text-lg uppercase mt-8 px-6 py-3">
                    <span className="material-icons pr-2"><BiPhoneCall /></span> Get Started
                </button>
            </div>
        </div>
    );
}

export default Hero;
