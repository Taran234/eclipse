import * as React from "react";

function Feature1() {
    return (
        <div className="flex flex-col justify-center items-center px-5 py-16 bg-slate-400">
            <div className="max-w-4xl w-full text-center px-5">
                <div className="text-lg font-thin text-black mb-4">
                    <div className="flex justify-center items-center gap-4">
                        <div className="h-px w-5 border border-orange-400" />
                        <div>Immediate Help Available</div>
                    </div>
                </div>
                <h2 className="text-4xl font-thin leading-tight text-black mb-4">
                    Impeccable Repairs, <span className="text-orange-400">Guaranteed Satisfaction</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-8 mt-9">
                    <div className="flex-1 min-w-[240px] max-w-[664px] bg-stone-300 h-[509px]"></div>
                    <div className="flex-1 min-w-[240px] max-w-[497px] text-black">
                        <p className="text-base font-thin leading-7 mb-4">
                            It’s not just about the physical damage; the emotional toll it takes can be just as devastating. That’s where we step in. Based inabcd, WV, we specialize in turning crisis into calm. We’re always ready to answer your call, ensuring immediate response to emergencies.
                        </p>
                        <p className="text-base font-thin leading-7 mb-4">
                            We work quickly and efficiently, managing everything from insurance claims to restorations, making sure you are covered every step of the way. When you choose us, you’re not just hiring a service; you’re partnering with a team that cares deeply about restoring your residential or commercial property.
                        </p>

                        <div className="flex justify-center items-center py-3.5 w-full mt-6">
                            <div className="text-base font-thin leading-5 underline cursor-pointer">
                                <span>Learn More About Us</span>
                            </div>
                            <div className="flex justify-center items-center ml-3 w-6 text-xs font-black">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature1;
