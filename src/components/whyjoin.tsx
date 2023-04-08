import React from 'react';

interface Service {
    id: number;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Community',
        description:
            'A community of like-minded people who are all on the same journey. Your network is your net worth.',
    },
    {
        id: 2,
        title: 'Weekly LIVE Streams',
        description:
            'Weekly live streams with millionaires and other successful people.',
    },
    {   
        id: 3,
        title: 'Resources',
        description:
            "Access to the best resources to help you grow your business and your mindset.",
    },
    {   
        id: 4,
        title: 'Weekly Live Streams',
        description:
            'Weekly live streams with millionaires and other successful people.',
    },
    {
        id: 5,
        title: 'Weekly Live Streams',
        description:
            'Weekly live streams with millionaires and other successful people.',
    },
    {
        id: 6,
        title: 'Weekly Live Streams',
        description:
            'Weekly live streams with millionaires and other successful people.',
    },
    
];

const WhyJoin: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-5xl px-8 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-2xl font-bold sm:text-3xl">Why you should join the Glow Gang</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                    {services.map((service) => (
                        <a
                            key={service.id}
                            className="block rounded-xl border p-4 sm:p-6 lg:p-8"
                            href="#"
                        >
                            <h2 className="text-lg font-bold">{service.title}</h2>
                            <p className="mt-1 text-sm text-gray-400">{service.description}</p>
                        </a>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Join now for FREE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
