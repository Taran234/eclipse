import React from "react";

function Project() {
    return (
        <div className="flex flex-col items-center px-10 pt-16 pb-8 bg-blue-50 max-md:px-5">

            {/* Header Section */}
            <div className="text-center">
                <div className="flex items-center gap-3 justify-center text-lg font-thin text-black">
                    <div className="w-5 h-0.5 bg-orange-400"></div>
                    <div>Our Services</div>
                </div>
                <h1 className="text-4xl font-thin mt-3.5 text-black">
                    This Is <span className="text-orange-400">What We Do</span>
                </h1>
            </div>

            {/* Services Section */}
            <div className="flex flex-col md:flex-row justify-center mt-10 w-full max-w-4xl gap-8">

                {/* Service Card 1 */}
                <div className="relative left-5 top-10 flex flex-col bg-sky-200 p-10 w-full md:w-1/2 h-[350px] text-black text-center rounded-md shadow">
                    <div className="text-lg text-orange-400 mb-2">01</div>
                    <h2 className="text-2xl font-semibold">Water Damage Restoration</h2>
                    <p className="mt-5 text-base">
                        Choose us for top-notch water damage restoration service. We manage storm and mold damage, ensuring your home is safely restored.
                    </p>
                    <button className="mt-8 py-2 px-4 bg-orange-400 text-white uppercase">Read More</button>
                </div>

                {/* Service Card 2 - Placeholder Image */}
                <div className="flex relative right-10 z-10 flex-col bg-stone-300 w-full md:w-1/2 h-[500px] rounded-md shadow"></div>
            </div>

            {/* Navigation Section */}
            <div className="flex text-black justify-center gap-4 mt-10">
                <span className="text-orange-400">01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>

            </div>
        </div>
    );
}

export default Project;

