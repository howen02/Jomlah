"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
    const handleScroll = () => {};

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Lease a vehicle Swiftly & Effortlessly.
                </h1>

                <p className="hero__subtitle">
                    Hassle-free rentals with our seamless reservation system
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
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

                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;
