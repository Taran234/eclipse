import React from "react";

// Sample data for reviews
const reviews = [
    {
        id: 1,
        name: "David M.",
        rating: 5,
        comment: "I couldn't be more impressed with the service I received from Eclipse Restoration and Construction after my home suffered water damage. Their team arrived quickly, assessed the damage, and immediately started working to prevent further issues. They were professional, thorough, and kept me updated every step of the way. My home looks as good as new, and I couldn't have asked for better service. Highly recommend them!",
        avatar: "/face1.jpg", // Replace with actual image paths or URLs
    },
    {
        id: 2,
        name: "Sarah J .",
        rating: 5,
        comment: "Eclipse Restoration and Construction went above and beyond after our home was affected by a fire. From the moment they arrived, they were extremely thorough in assessing the damage and provided a clear plan for restoration. Their team worked tirelessly to clean, repair, and restore our home. The result was even better than we expected. I’ll definitely trust them again if we ever need restoration services in the future.",
        avatar: "/face2.jpg",
    },
    {
        id: 3,
        name: "Michael P.",
        rating: 5,
        comment: "Eclipse Restoration and Construction helped us after our basement flooded. They responded quickly and immediately began the water extraction and drying process. The team was professional, efficient, and took extra care to prevent mold. Their work was top-notch, and I felt comfortable throughout the entire process. I highly recommend their services for anyone dealing with water or fire damage!",
        avatar: "/face5.jpg",
    },
];


// Component for individual review card
const ReviewCard = ({ name, rating, comment, avatar }: any) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center mb-4">
                <img
                    src={avatar}
                    alt={`${name}'s avatar`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                    <h3 className="text-xl text-gray-500 font-semibold">{name}</h3>
                    <div className="flex">
                        {Array.from({ length: 5 }, (_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.978a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.978c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.978a1 1 0 00-.364-1.118L2.55 9.405c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.978z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-neutral-700 flex-grow ">{comment}</p>
        </div >
    );
};

const Reviews = () => {
    return (
        <section className="flex flex-col items-center bg-slate-100 bg-opacity-50 px-5 py-16 bg-[url('/kitchen-review.webp')] bg-center bg-blend-screen brightness-90 bg-cover bg-no-repeat w-full">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="text-4xl font-bold text-center uppercase text-neutral-900 py-3 mb-4">
                    Reviews from our Previous Clients
                </div>
                <div className="text-lg font-bold text-center  text-neutral-800 pb-10">
                    See What Our Customers Are Saying
                </div>
                {/* Divider */}
                <div className="flex justify-center mb-10">
                    <div className="border-t-2 border-solid border-stone-950 w-64" />
                </div>
                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            name={review.name}
                            rating={review.rating}
                            comment={review.comment}
                            avatar={review.avatar}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
