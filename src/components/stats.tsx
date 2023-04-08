import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero(): JSX.Element {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="lg:py-20 py-10">
                        <h3 className="text-2xl font-bold sm:text-3xl">Why you should join Glow Gang</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
