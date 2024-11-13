'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Footer from '../_components/footer';
import Header from '../_components/header';
import Head from 'next/head';

type Props = {
    params: {
        services: string;
    };
};

const ServiceGallery = ({ params }: Props) => {
    const { services } = params;

    // Sample data: In a real scenario, fetch images from an API or a CMS
    const images: Record<string, { src: string; alt: string }[]> = {

    };

    const normalizedType = services.toLowerCase();

    let galleryImages = images[normalizedType as keyof typeof images] || [];
    let heading = " ";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    const buttonClasses = (type: string) =>
        normalizedType === type
            ? "bg-black text-white px-6 py-2 border border-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            : "shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400";


    // Switch statement with normalized type
    switch (normalizedType) {
        case 'fire-damage-restoration':
            galleryImages = images.classic;
            heading = "Fire Damage Restoration Servics";
            break;

        default:
            galleryImages = []; // Default empty array if no match is found
    }

    return (
        <>
            <Head>
                <title>Custom {heading} | Eclipse Construction</title>
                <meta name="description" content={`Explore our ${heading} gallery and see the craftsmanship of Eclipse Construction.`} />
                <meta name="keywords" content={`${heading}, custom cabinets, kitchen cabinets, bathroom vanities`} />
            </Head>
            <main className="flex min-h-screen scroll-smooth overflow-x-hidden flex-col bg-[#fcfbff] bg-[url('/pattern.svg')] bg-cover bg-repeat">

                <div id="header" className="z-50  w-full relative">
                    <Header />

                    <div className="flex flex-col w-full text-center py-8">
                        {/* Header Section */}
                        <h1 className="text-4xl uppercase text-neutral-800 font-black px-5 pb-5 max-md:max-w-full">
                            Eclipse Construction - {heading}
                        </h1>
                        <p className="text-xl text-neutral-800 px-5 max-md:max-w-full">

                        </p>
                    </div>


                    {galleryImages.length === 0 ? (
                        <>
                            <p>Sorry, we don't have a gallery for this service type.</p>

                        </>

                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-5/6 self-center mx-auto my-6">
                            {galleryImages.map((image, index) => (
                                <div key={index} className="relative w-full h-64">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg shadow-md  hover:cursor-pointer"
                                        onClick={() => handleImageClick(index)}
                                    />
                                </div>
                            ))}

                        </div>
                    )}
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={galleryImages.map(image => ({ src: image.src, alt: image.alt }))}
                        index={currentIndex}
                    />
                </div >

                <Footer />
            </main>
        </>
    );
};

export default ServiceGallery;