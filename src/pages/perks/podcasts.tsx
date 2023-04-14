import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import { api } from "@utils/api";
import Header from "@components/header";
import Perk from "@components/perk";
import Breadcrumbs from "@components/breadcrumbs";

const ProPortal: NextPage = () => {
    const session = useSession();

    // Breadcumbs
    const breadcrumbs = [
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Podcasts",
            href: "/perks/podcasts"
        }
    ];

    return (
        <>
            <Head>
                <title>Podcasts | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Header user={session.data?.user} />
            <Breadcrumbs items={breadcrumbs} />
            <div className="container mx-auto mb-10 mt-10 max-w-5xl px-8">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                        <img alt="Home" src="../../events/banners/mm.png" className="h-56 w-full rounded-md object-cover" />

                        <div className="mt-2 p-3">
                            <div>
                                <h2 className="mb-1 text-xs text-gray-500">MONDAYS 5PM EST</h2>
                            </div>

                            <div>
                                <h1 className="text-lg font-medium">Millionaire Mondays</h1>
                            </div>

                            <div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Millionaire Mondays is a weekly podcast featuring successful entrepreneurs who share their wealth-building experiences and
                                    insights to inspire and motivate individuals seeking financial independence. Each Monday, a different self-made millionaire
                                    from diverse backgrounds offers unique tips and strategies on how to achieve financial success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                        <img alt="Home" src="../../events/banners/qa.png" className="h-56 w-full rounded-md object-cover" />

                        <div className="mt-2 p-3">
                            <div>
                                <h2 className="mb-1 text-xs text-gray-500">WEDNESDAYS 5PM EST</h2>
                            </div>

                            <div>
                                <h1 className="text-lg font-medium">Q&A Wednesdays</h1>
                            </div>
                        </div>
                    </div>

                    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                        <img alt="Home" src="../../events/banners/css.png" className="h-56 w-full rounded-md object-cover" />

                        <div className="mt-2 p-3">
                            <div>
                                <h2 className="mb-1 text-xs text-gray-500">WEEKENDS</h2>
                            </div>

                            <div>
                                <h1 className="text-lg font-medium">Community Success Stories</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProPortal;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import Footer from "@components/footer";
import { env } from "src/env.mjs";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // TODO: remove when page is launched
    if (env.NODE_ENV !== "development") {
        return {
            redirect: {
                destination: "/",
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
