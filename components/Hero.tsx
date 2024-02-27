"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    const handleScroll = () => {};

    return (
        <div className="hero border bg-primary-blue-100 p-4 rounded-xl mt-24 mb-24">
            <div className="flex-1 py-5 padding-x">
                <h1 className="hero__title">
                    Lease a vehicle Swiftly & Effortlessly.
                </h1>

                <p className="hero__subtitle">
                    Hassle-free rentals with our seamless reservation system
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-blue-600 text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* <div className="hero__image-overlay" /> */}
            </div>
        </div>
    );
};

export default Hero;
