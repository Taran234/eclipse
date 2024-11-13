import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { RiMenu4Line } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";



interface PathProps {
    d: string;
    className?: string;
    variants?: {
        closed: { d: string };
        open: { d: string };
    };
    opacity?: string;
}

const Path: React.FC<PathProps> = (props) => (
    <path
        fill="transparent"
        strokeWidth="3"
        stroke="var(--background)"
        strokeLinecap="round"
        {...props}
    />
);

type Segment = [string, any, any];

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations: Segment[] = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}

const Drawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const handleClose = () => setIsOpen(false);
    return (
        <div
            ref={scope}
            className="relative bg-transparent z-50 overflow-hidden pb-24"
        >
            <nav className="fixed top-0 -left-10 h-screen w-11/12 bg-[#f5f5f5] transform -translate-x-full will-change-transform">
                <div className="flex flex-col relative z-40 pt-4 pl-10 font-oswald text-center  text-stone-800 ">



                    <div className="w-[287px] flex justify-center">
                        <img
                            loading="lazy"
                            src="/logo.png"
                            alt="Company logo"
                            className="object-contain max-w-[283px] min-w-[240px] w-full"
                        />
                    </div>


                </div>
                <ul className="flex flex-col gap-5 pt-10 pl-10 text-stone-800 font-bold text-2xl border-l-[0.5px] m-5 ">
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <a href="tel:+16475618868" onClick={handleClose} className="text-stone-800 hover:underline">+1 234 567 8910</a>
                    </li>

                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <a href="/#about" onClick={handleClose}>About</a>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <a href="/#about" onClick={handleClose}>Projects</a>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <a href="/#about" onClick={handleClose}>Testimonials</a>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <a href="/#about" onClick={handleClose}>FAQ</a>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <div className="w-[150px] flex text-center">
                            <button onClick={handleClose} className="px-8 py-3 border bg-stone-800 border-stone-300 text-white font-mono uppercase font-semibold rounded-full hover:bg-stone-400 transition-colors">
                                <a href="/#footer">Get a<br /> Quote</a>
                            </button>
                        </div>
                    </li>

                </ul>

            </nav>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className=" w-12 h-12 rounded-full bg-transparent text-black font-bold p-2.5"
            >
                <RiMenu4Line size={50} />
            </button>
        </div>
    );
}

export default Drawer;
