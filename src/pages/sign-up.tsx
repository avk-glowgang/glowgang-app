import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

const SignUp: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="bg-gray">
                <div className="mx-auto max-w-5xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                            <Image
                                alt="Glow Gang"
                                src="/16661250666139507.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                                width={500}
                                height={500}
                                priority
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="color-black text-3xl font-bold sm:text-4xl">Success Starts with the Glow Gang Community!</h2>

                            <div className="mt-8 flex flex-col justify-center gap-y-3">
                                <div className="flex w-full justify-center">
                                    <button
                                        className="hover:color-red flex items-center gap-x-2 rounded bg-discord px-6 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                        onClick={() => signIn("discord", { callbackUrl: "/", redirect: true })}>
                                        <BsDiscord className="h-8 w-8"></BsDiscord>
                                        <span>Sign up with Discord</span>
                                    </button>
                                </div>

                                <div className="flex w-full justify-center">
                                    <button
                                        disabled
                                        className="hover:color-red flex cursor-not-allowed items-center gap-x-2 rounded bg-slate-500 px-6 py-3 text-sm  font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                        onClick={() => signIn("google", { callbackUrl: "/", redirect: true })}>
                                        <FcGoogle className="h-8 w-8"></FcGoogle>
                                        <span>Sign up with Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
