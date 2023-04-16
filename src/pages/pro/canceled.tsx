import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";

const ProCanceledPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pro Membership | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="flex h-full w-full items-center justify-center">
                <div>
                    <div className="">
                        <div className="">
                            <h3>Subscription to Membership plan unsuccessful!</h3>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/pro"
                            className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                            Return to Billing Page
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProCanceledPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import Link from "next/link";
import Footer from "@components/footer";
import { env } from "src/env.mjs";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // TODO: remove when page is launched
    if (env.NODE_ENV !== "development") {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false
            }
        };
    }
    const session = await getServerSession(context.req, context.res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false
            }
        };
    }

    return {
        props: {
            session
        }
    };
}
