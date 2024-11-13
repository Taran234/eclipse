import React from "react";

function Feature3() {
    return (
        <div className="flex flex-col items-center px-10 py-16 bg-white max-md:px-5">
            {/* Header Section */}
            <div className="text-center text-5xl font-light tracking-wide leading-tight text-black max-w-4xl">
                <span>Ready to Restore? </span>
                <span className="text-orange-400">Contact Us for Immediate Assistance</span>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row justify-center mt-10 w-full max-w-4xl gap-8">

                {/* Image Placeholder */}
                <div className="flex flex-col justify-center bg-zinc-300 h-96 w-full md:w-1/2"></div>

                {/* Text Content */}
                <div className="flex flex-col text-base font-light leading-7 text-black w-full md:w-1/2">
                    <p>
                        Experiencing water or fire damage in Asheboro, NC can be daunting. That’s why our restoration company is geared
                        to provide rapid, reliable services tailored to your unique situation. We understand the urgency and sensitivity
                        required to handle such disruptions, and our community roots empower us to tackle each challenge with empathy.
                    </p>
                    <p className="mt-5">
                        From initial damage assessment to final touches, we ensure a seamless restoration process designed to help you
                        recover swiftly. Don’t let damage dictate your life. Reach out to us today, and let’s start turning back the clock
                        on your property’s damage.
                    </p>
                    <div className="flex justify-center mt-10 uppercase">
                        <button className="flex items-center text-base font-light">
                            Get in Touch
                            <span className="ml-3 flex items-center justify-center w-6 h-6 bg-orange-400 text-white font-bold rounded-full">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature3;
