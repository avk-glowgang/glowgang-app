import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

function UserButton({ session }: { session: Session }): JSX.Element {
    return (
        <>
            <button
                onClick={() => signOut()}
                className="flex cursor-pointer items-center space-x-2 whitespace-nowrap rounded-md bg-gray-800 px-3 py-2 text-white transition-all ease-in-out hover:bg-gray-700">
                <Image className="h-8 w-8 rounded-full" src={session.user.image as string} alt={session.user.name as string} width={100} height={100}></Image>
                <span className="font-sans font-bold">{session.user.name}</span>
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
                        </div>
                    )}
                    {session.status == "authenticated" && <UserButton session={session.data}></UserButton>}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
