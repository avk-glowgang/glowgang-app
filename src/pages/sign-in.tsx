import { GetServerSidePropsContext, InferGetServerSidePropsType, type NextPage } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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
                            <div className="flex w-full justify-center ">
                                <form className="flex flex-col" method="post" action="/api/auth/signin/email">
                                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                    <label className="flex flex-col">
                                        <span className="font-bold">Email Address:</span>
                                        <input type="email" id="email" name="email" />
                                    </label>
                                    <button
                                        className="hover:color-red ml-4 mt-3 flex items-center gap-x-2 rounded bg-slate-500 px-2 py-1 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                        type="submit">
                                        <MdEmail className="h-8 w-8"></MdEmail>
                                        <span>Sign in with Email</span>
                                    </button>
                                </form>
                            </div>
                            <div className="border-b-2 border-gray-600"></div>
                            <div className="flex w-full justify-center ">
                                <button
                                    className="hover:color-red flex items-center gap-x-2 rounded  bg-discord px-6 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
                                    onClick={() => void signIn("discord", { callbackUrl: "/dashboard", redirect: true })}>
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
