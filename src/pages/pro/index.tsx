import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Image from "next/image";
import Header from "@components/header";


const ProInfoPage: NextPage = () => {
    const checkoutPro = api.stripe.checkoutPro.useQuery();
    return (
        <>
            <Head>
                <title>Dashboard | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Header />
            {/* Info and Payment Information for Membership */}
            <section className="bg-white">
                <nav aria-label="Breadcrumb" className="container mx-auto max-w-5xl px-8 my-5">
                    <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">

                        <li>
                            <a href="#" className="block transition text-blue-600 hover:text-gray-700"> Dashboard </a>
                        </li>

                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <p className="block transition hover:text-gray-700"> PRO Membership </p>
                        </li>
                    </ol>
                </nav>
                <div className="container mx-auto max-w-5xl px-8 grid grid-cols-3 gap-20 my-20">
                    <nav aria-label="Breadcrumb" className="flex">
                        <ol role="list" className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                            <li className="flex items-center">
                                <a href="#" className="flex h-10 items-center bg-gray-100 px-4 transition hover:text-gray-900">
                                    <span> Dashboard </span>
                                </a>
                            </li>
                            <li className="relative flex items-center">
                                <span className="absolute inset-y-0 -left-px h-10 w-4 bg-gray-100 clip-path:polygon(0 0, 0 100%, 100% 50%)"></span>
                                <a href="#" className="flex h-10 items-center bg-white pl-8 pr-4 text-xs font-medium transition hover:text-gray-900">
                                    Shirts
                                </a>
                            </li>
                        </ol>
                    </nav>
                    <div className="col-span-2">
                        <h2 className="text-1xl font-bold text-gray-900 sm:text-2xl mb-5">Membership Details</h2>
                        <p className="mt-1 text-sm text-gray-500 border-t border-b py-5">
                            Your current level is{" "}
                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                                Member
                            </span>
                        </p>
                    </div>
                    <div className="col-span-1">
                        <nav aria-label="Main Nav" className="flex flex-col gap-1 gap-space-y-1">
                            <a
                                href=""
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                General
                            </a>

                            <a
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Order History
                            </a>

                            <a
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Payment Methods
                            </a>

                        </nav>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProInfoPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { api } from "@utils/api";
import Link from "next/link";
import Footer from "@components/footer";

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

    return {
        props: {
            session
        }
    };
}
