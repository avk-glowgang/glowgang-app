import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";
import Footer from "@components/footer";

const SignIn: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sign In | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="bg-gray">
                <div className="mx-auto max-w-5xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="lg:py-24">
                        <div className="mt-8 flex flex-col justify-center gap-y-3">
                            <div className="flex w-full justify-center">
                                <button
                                    className="hover:color-red flex items-center gap-x-2 rounded bg-discord px-6 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                    onClick={() => signIn("discord", { callbackUrl: "/", redirect: true })}>
                                    <BsDiscord className="h-8 w-8"></BsDiscord>
                                    <span>Sign in with Discord</span>
                                </button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignIn;
