import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Menu, Transition } from '@headlessui/react'

const MyMenu: React.FC<{ username?: string | null }> = ({ username }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="text-gray-200 text-sm inline-flex gap-2 items-center px-4 py-2 font-semibold rounded-md hover:bg-gray-800 hover:bg-opacity-50 transition ease-in-out duration-150">
                {username}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </Menu.Button>
            
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className="absolute text-sm right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                        <Menu.Item>
                            <Link href="/profile">
                                <button className={`text-gray-900 group inline-flex gap-1 w-full items-center hover:bg-gray-100 rounded-md px-2 py-2 transition ease-in-out duration-150`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    Profile
                                </button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <button onClick={() => void signOut()} 
                                className={`text-red-400 font-semibold group inline-flex gap-1 hover:bg-red-100 w-full items-center rounded-md px-2 py-2 transition ease-in-out duration-150`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>

                                Sign Out 
                            </button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
                
            </Transition>
        </Menu>
    )
}


// function UserButton(): JSX.Element {
//     return (
//         <>
//             <button
//                 onClick={() => void signOut()}
//                 className="flex cursor-pointer items-center rounded bg-gray-800 px-4 py-2 transition-all ease-in-out hover:bg-gray-700">
//                 <span className="text-sm text-white">Sign out</span>
//             </button>
//         </>
//     );
// }

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
                            <Image src="/logo-PNG-05.png" width={150} height={150} alt="Glow Gang Logo" />
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
                    {session.status == "authenticated" && <div className="flex gap-2 items-center">
                        <MyMenu username={session.data.user.name}/>
                        {/* <UserButton></UserButton> */}
                    </div>}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
