import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import { api } from "@utils/api";
import Header from "@components/header";

const ProSuccessPage: NextPage = () => {
    const router = useRouter();
    const { query } = router;
    const sessionID = query.session_id;
    const portalPro = api.stripe.portalPro.useQuery({ sessionID: sessionID as string });
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
            <Header />
            <nav aria-label="Breadcrumb" className="container mx-auto my-5 max-w-5xl px-8">
                <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <a href="/pro/portal" className="block text-blue-600 transition hover:text-gray-700">
                            {" "}
                            Dashboard{" "}
                        </a>
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
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
            <section className="flex h-full w-full items-center justify-center">
                <div>
                    <div className="container mx-auto mb-20 max-w-5xl px-8 pb-10 pt-10">
                        <div className="text-center lg:mb-12">
                            <h1 className="mb-5 text-4xl font-extrabold text-gray-900">🥳</h1>
                            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">Congratulations! </h2>
                            <p className=" text-gray-500 sm:text-lg">
                                You are a{" "}
                                <span className="font-bold">
                                    <span className="whitespace-nowrap  rounded-full bg-black px-2.5 py-0.5 text-white">PRO</span> Member
                                </span>{" "}
                                now!
                            </p>
                            <button
                                onClick={() => router.push("/pro/portal")}
                                className="mt-10 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                                ← Go back to dashboard
                            </button>
                        </div>
                    </div>

                    {portalPro.isSuccess && (
                        <div className="mt-8">
                            <Link
                                href={portalPro.data}
                                className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                                Manage your billing information
                            </Link>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProSuccessPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";
import Link from "next/link";
import Footer from "@components/footer";

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
