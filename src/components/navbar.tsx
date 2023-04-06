import React from 'react';
import Image from 'next/image';

function Navbar(): JSX.Element {
    return (
        <div className="bg-black">
            <div className="container max-w-5xl mx-auto px-8">
                <nav className="flex items-center justify-center flex-wrap py-4">
                    <div className="flex items-center text-white">
                        <Image src="/logo-ICON-02.png" width={35} height={35} alt="Glow Gang Logo" />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;