import React from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header aria-label="Header" className="bg-gray-50">
            <div className="mx-auto max-w-5xl px-8 py-8 sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome, Ernest!
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Your current level is{' '}
                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                                Member
                            </span>
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        {/* 
                        // Show this button if the user is PRO. Hide the other button.
                        <button
                            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition focus:outline-none focus:ring hover:bg-gray-50"
                            type="button"
                        >
                            <Link href="/pro/portal">
                                <p className="text-sm font-medium">My Membership</p>
                            </Link>
                        </button> */}

                        <button
                            className="block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <Link href="/pro">
                                <p>Upgrade to PRO</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
