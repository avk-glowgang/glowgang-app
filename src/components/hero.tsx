import React from 'react';
import Image from 'next/image';
import Link from "next/link";

function Hero(): JSX.Element {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-5xl px-8 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt="Glow Gang"
                            src="/16661250666139507.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl text-black ">Success Starts with the Glow Gang Community!</h2>

                        <p className="mt-4 text-gray-400">
                            We are a dynamic community empowering the leaders of tomorrow through connection, inspiration, and a shared passion for achievement.
                        </p>

                        <div className="mt-8">
                            <Link
                                href="/sign-up"
                                className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Join the Glow Gang community!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;