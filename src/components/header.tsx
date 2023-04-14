import Link from "next/link";
import React from "react";

type User = {
    isPro: boolean;
};
const Header: React.FC<{ user: User | undefined }> = ({ user }) => {
    return (
        <header aria-label="Header" className="bg-gray-50">
            <div className="mx-auto max-w-5xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome to Glow Gang!</h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Your current level is{" "}
                            {!user ||
                                (user && !user.isPro && (
                                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Member</span>
                                ))}
                            {user && user.isPro && (
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">Pro</span>
                            )}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        {/* // Show this button if the user is PRO. Hide the become pro button */}
                        {user && user.isPro && (
                            <button
                                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:bg-gray-50 focus:outline-none focus:ring"
                                type="button">
                                <Link href="/dashboard">
                                    <p className="text-sm font-medium">My Membership</p>
                                </Link>
                            </button>
                        )}
                        {!user ||
                            (user && !user.isPro && (
                                <button
                                    className="block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900 focus:outline-none focus:ring"
                                    type="button">
                                    <Link href="/pro">
                                        <p>Become a PRO member</p>
                                    </Link>
                                </button>
                            ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
