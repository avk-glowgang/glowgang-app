import React from "react";

interface Service {
    id: number;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "🌎 Global Community",
        description: "Become a part of like-minded community of people who are all on the same journey. Your network is your net worth."
    },
    {
        id: 2,
        title: "🎙️ Weekly Podcasts",
        description: "We host free weekly podcasts with millionaires, entrepreneurs, and other successful people in our Discord server."
    },
    {
        id: 3,
        title: "🛒 Marketplace",
        description: "Our marketplace offers a platform for buying and selling products and services, as well as finding employees and freelancers."
    }
];

const WhyJoin: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-5xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto text-center">
                    <h2 className="text-2xl font-bold sm:text-3xl">Why you should join us</h2>
                    <p className="mt-2 text-sm text-gray-400">This is just a glimpse of what you can expect when you join the Glow Gang.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                    {services.map((service) => (
                        <div className="block rounded-xl border p-4 sm:p-6 lg:p-8">
                            <h2 className="text-lg font-bold">{service.title}</h2>
                            <p className="mt-1 text-sm text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                        Join now for FREE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
