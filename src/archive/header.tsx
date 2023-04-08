import React from 'react';

const Header: React.FC = () => {
    return (
        <header aria-label="Page Header" className="bg-gray-50">

            {/* // Should only be display if user's role is not PRO 

             <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-4 lg:px-4">
                <div className="container max-w-5xl mx-auto px-4 flex justify-between items-center">
                    <p className="text-center text-sm sm:text-left">
                        Connect your discord account to receive your PRO role!
                    </p>

                    <a
                        className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
                        href="#"
                    >
                        Connect Discord
                    </a>
                </div>
            </div> */}



            <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome inside!
                        </h1>
                        <p className="mt-1.5 text-sm text-gray-500">
                            Ready to level up? 🎉
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <button
                            className="block rounded-lg bg-dark-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-dark-blue focus:outline-none focus:ring"
                            type="button"
                        >
                            Upgrade to PRO
                        </button>

                        <button
                            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium"> Connect Discord </span>

                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;