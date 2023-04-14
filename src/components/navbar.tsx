import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

function UserButton(): JSX.Element {
    return (
        <>
            <button
                onClick={() => void signOut()}
                className="flex cursor-pointer items-center rounded bg-gray-800 px-4 py-2 transition-all ease-in-out hover:bg-gray-700">
                <span className="text-sm text-white">Sign out</span>
            </button>
        </>
    );
}

function Navbar(): JSX.Element {
    const router = useRouter();
    const session = useSession();

    const isSignIn = router.pathname == "/sign-in";

    return (
        <div className="bg-black">
            <div className="container mx-auto max-w-5xl px-8">
                <nav className="flex flex-wrap items-center justify-between py-4">
                    <div className="flex items-center text-white">
                        <Link href="/">
                            <Image src="/logo.png" width={35} height={35} alt="Glow Gang Logo" />
                        </Link>
                    </div>

                    {/* display for unauthenticated users only when they are not in the sign in page */}
                    {session.status !== "authenticated" && !isSignIn && (
                        <div>
                            <Link href="/sign-in" className="rounded bg-gray-800 px-4 py-2 text-sm text-white transition-all ease-in-out hover:bg-gray-700">
                                Sign in
                            </Link>
                        </div>
                    )}

                    {/* display for authenticated users */}
                    {session.status == "authenticated" && <UserButton></UserButton>}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
