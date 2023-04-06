import React from 'react';
import Image from 'next/image';
import {
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";



function Navbar(): JSX.Element {
    return (
        <div className="bg-black">
            <div className="container max-w-5xl mx-auto px-8">
                <nav className="flex items-center justify-between flex-wrap py-4">
                    <div className="flex items-center text-white">
                        <Link href="/">
                            <Image src="/logo-ICON-02.png" width={35} height={35} alt="Glow Gang Logo" />
                        </Link>
                    </div>
                    <div>
                        <SignedIn>
                            {/* Mount the UserButton component */}
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            {/* Signed out users get sign in button */}
                            <Link
                                href="/sign-in"
                                className="text-white text-sm  px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
                            >
                                Sign in
                            </Link>
                        </SignedOut>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Navbar;