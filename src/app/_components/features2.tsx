import React from "react";

function Feature2() {
    return (
        <div className="flex flex-col items-center px-10 py-16 bg-slate-500 max-md:px-5">
            <div className="max-w-4xl w-full text-center">

                {/* Header Section */}
                <div className="flex flex-col items-center gap-4 text-black">
                    <div className="flex items-center gap-4 text-lg">
                        <div className="w-5 border border-orange-400" />
                        <div>Trusted by Families & Businesses</div>
                    </div>
                    <h2 className="text-5xl font-light text-orange-400 mt-2">
                        Restoration <span className="text-black">Reinvented</span>
                    </h2>
                    <p className="mt-8 text-base leading-7">
                        Why choose us for your restoration needs? Our commitment to immediate, high-quality service sets us apart.
                        Each call is answered with urgency, and each project is approached with the precision of seasoned professionals.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">

                    {/* Left Column */}
                    <div className="md:w-1/2 text-base font-light leading-7 text-black text-right">
                        <p>
                            Our family-owned nature infuses every interaction with personal attention and genuine care. We’re not just restoring
                            buildings; we’re rebuilding lives. Whether it’s the middle of the night or a busy weekday, our team is ready to mobilize
                            and address your emergency with all the tools and skills necessary.
                        </p>
                        <p className="mt-5">
                            By managing all aspects of the restoration process, including direct interactions with insurance, we streamline the path
                            to normalcy. Our clients appreciate that we’re locally owned, embedding a level of trust and community commitment in everything we do.
                        </p>
                        <p className="mt-3">
                            Choose us because when disaster strikes, we’re the quick, caring, and effective response you need. From
                            <span className="text-orange-400 underline"> water damage restoration</span> and
                            <span className="text-orange-400 underline"> fire damage repair</span> to
                            <span className="text-orange-400 underline"> remodeling</span>,
                            <span className="text-orange-400 underline"> general contracting</span>, and
                            <span className="text-orange-400 underline"> roofing services</span>, we provide a full suite of solutions to bring your property back to its best.
                        </p>
                        <div className="flex justify-center items-center mt-10 uppercase text-center">
                            <button className="text-black font-thin underline">Discover Areas We Serve</button>
                        </div>
                    </div>

                    {/* Right Column (Image Placeholder) */}
                    <div className="md:w-1/2 bg-neutral-300 h-80"></div>
                </div>
            </div>
        </div>
    );
}

export default Feature2;
