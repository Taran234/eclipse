import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // You can use any icon library

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-stone-800 text-white p-3 rounded-full shadow-md hover:bg-stone-600 transition duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
