import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";
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
            label: "ADMIN",
            href: "/admin"
        },
        {
            label: "STATS",
            href: "/admin/stats"
        }
    ];
    return (
        <>
            <Head>
                <title>ADMIN | Glow Gang</title>
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">246</h3>

                            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                                <p className="text-sm font-medium uppercase text-gray-500">Total Members</p>
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">124</h3>

                            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                                <p className="text-sm font-medium uppercase text-gray-500">Joined discord</p>
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">24</h3>

                            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                                <p className="text-sm font-medium uppercase text-gray-500">Have not Joined discord</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <h3 className="text-black-600 text-3xl font-bold sm:text-5xl">23</h3>

                            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                                <p className="text-sm font-medium uppercase text-gray-500">PRO Members</p>
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <h3 className="text-pro-600 text-3xl font-bold sm:text-5xl">12</h3>

                            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                                <p className="text-sm font-medium uppercase text-gray-500">Canceled PRO</p>
                            </div>
                        </div>
                    </div>

                    <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <h3 className="text-pro-600 text-3xl font-bold sm:text-5xl">2</h3>

                            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                                <p className="text-sm font-medium uppercase text-gray-500">Re-JOINED PRO</p>
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
import { useSession } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false
            }
        };
    }

    if (!session.user.isAdmin) {
        return {
            redirect: {
                destination: "/dashboard",
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
