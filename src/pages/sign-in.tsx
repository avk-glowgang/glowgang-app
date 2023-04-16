import { type GetServerSidePropsContext, type InferGetServerSidePropsType, type NextPage } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { BsDiscord } from "react-icons/bs";
import { getCsrfToken, signIn } from "next-auth/react";
import Footer from "@components/footer";

const SignIn: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ csrfToken }) => {
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
                            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-lg text-center">
                                    <div className="flex w-full justify-center ">
                                        <button
                                            className="hover:color-red flex items-center gap-x-2 rounded  bg-discord px-6 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                            onClick={() => void signIn("discord", { callbackUrl: "/dashboard", redirect: true })}>
                                            <BsDiscord className="h-8 w-8"></BsDiscord>
                                            <span>Sign in with Discord</span>
                                        </button>
                                    </div>

                                    <p className="mt-10 text-gray-500">Or use your email address</p>
                                </div>

                                <form className="mx-auto mb-0 mt-1 max-w-md space-y-4" method="post" action="/api/auth/signin/email">
                                    <input name="csrfToken" type="hidden" value={csrfToken} />

                                    <div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                placeholder="Enter email"
                                            />

                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                            <span>Sign in</span>
                                        </button>
                                    </div>
                                </form>
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

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false
            }
        };
    }
    const csrfToken = await getCsrfToken(context);
    return {
        props: { csrfToken }
    };
}
