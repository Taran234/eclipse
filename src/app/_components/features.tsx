import React from "react";

function Feature() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col ">
                <div className="mt-10 ml-10 border-l-4 border-orange-400 h-1 max-md:ml-2" />

                <div className="flex flex-col items-center px-5 py-16 bg-slate-100">
                    <div className="w-full max-w-5xl bg-white p-8">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">

                            {/* Left Section */}
                            <div className="flex flex-col w-full md:w-1/2">
                                <h2 className="text-lg ml-2 mb-2">Restore with Us</h2>
                                <h1 className="text-5xl md:text-4xl font-thin leading-tight tracking-tight mb-4">
                                    Your Local <span className="text-orange-400">Restoration</span> Company in <br /> abcd, WV
                                </h1>
                                <p className="text-base leading-7">
                                    Our founder brings over 20 years of experience to our family-owned restoration company in abcd, WV. We’re always ready to respond, turning calamity into comfort and managing the stress of disaster recovery to restore your space to its former glory or better.
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div className="flex flex-col w-full md:w-1/2 gap-6">
                                {[
                                    { icon: "📍", label: "Abcd, WV" },
                                    { icon: "📞", label: "Office: (123) 456-7890" },
                                    { icon: "📞", label: "Cell: (123) 456-7890" },
                                    { icon: "✉️", label: "info@gmail.com" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center p-4 border rounded border-stone-300 gap-3">
                                        <span className="text-orange-400 font-bold">{item.icon}</span>
                                        <span className="text-base font-thin">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
