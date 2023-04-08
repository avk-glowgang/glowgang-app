import React from 'react';

interface StatCardProps {
    label: string;
    value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
    <div className="flex flex-col rounded border border-gray-100 px-4 py-8 text-center">
        <dt className="order-last text-md font-medium text-gray-500">{label}</dt>
        <dd className="text-3xl font-extrabold text-blue-600 md:text-4xl">{value}</dd>
    </div>
);

const ECommerceStats: React.FC = () => (
    <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-bold sm:text-3xl text-black ">
                    We are gowing fast! 🚀
                </h2>

                <p className="mt-4 text-gray-400">
                    Now is the best join to join our community! We are growing fast and we want you to be a part of it. 
                </p>
            </div>

            <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <StatCard label="Members" value="1500+" />
                    <StatCard label="PRO members" value={24} />
                </dl>
            </div>
        </div>
    </section>
);

export default ECommerceStats;
