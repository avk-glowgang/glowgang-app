import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Link from "next/link";

const Error: NextPage = () => {
    return (
        <>
            <Head>
                <title>Error | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex min-h-screen w-full items-center justify-center bg-orange-400">
                <div className="flex flex-col">
                    <span className="text-center text-4xl font-bold">Error 404</span>
                    <span>The page you are looking for does not exist or must have been moved</span>

                    <Link href="/" className="rounded-lg bg-blue-400 px-2 py-1 text-center">
                        Back to Home
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Error;
