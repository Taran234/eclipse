import React from "react";

function AreaServed() {
    const areas = ["Abcd, WV", "Xyz, VA", "Pqr, NC", "Mno, MD",];

    return (
        <div className="flex flex-col items-center px-10 py-16 bg-blue-50 max-md:px-5">

            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-5xl font-thin text-black">
                    Areas <span className="text-orange-400">We Serve</span>
                </h1>
                <p className="mt-5 text-base font-thin tracking-wide text-zinc-800">
                    We’re proud to serve Abcd, WV, and the surrounding areas with our quality services.
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row mt-10 w-full max-w-4xl gap-8">

                {/* Map Placeholder */}
                <div className="bg-stone-300 w-full md:w-2/3 h-80 rounded-md"></div>

                {/* Areas List */}
                <div className="flex flex-col w-full md:w-1/3 gap-4">
                    {areas.map((area, index) => (
                        <div key={index} className="flex items-center px-5 py-4 bg-white shadow-sm rounded-md">
                            <span className="text-orange-400 text-xl font-bold pr-4">📍</span>
                            <p className="text-base font-thin text-zinc-800">{area}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AreaServed;
