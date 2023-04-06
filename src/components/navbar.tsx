import React from 'react';
import Image from 'next/image';
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";



function Navbar(): JSX.Element {
    return (
        <div className="bg-black">
            <div className="container max-w-5xl mx-auto px-8">
                <nav className="flex items-center justify-between flex-wrap py-4">
                    <div className="flex items-center text-white">
                        <a href="/">
                            <Image src="/logo-ICON-02.png" width={35} height={35} alt="Glow Gang Logo" />
                        </a>
                    </div>
                    <div>
                        <SignedIn>
                            {/* Mount the UserButton component */}
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            {/* Signed out users get sign in button */}
                            <a
                                href="/sign-in"
                                className="text-white text-sm  px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
                            >
                                Sign in
                            </a>
                        </SignedOut>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Navbar;