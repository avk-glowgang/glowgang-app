import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Image from "next/image";

const ProInfoPage: NextPage = () => {
    const checkoutPro = api.stripe.checkoutPro.useQuery();
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
            {/* Info and Payment Information for Membership */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-5xl px-8 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                alt="Glow Gang Pro Membership"
                                src="/products/membership.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                                width={500}
                                height={500}
                                priority
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Pro Membership Plan</h2>

                            <p className="mt-4 text-gray-400">only $99/month</p>

                            {checkoutPro.isSuccess && (
                                <div className="mt-8">
                                    <Link
                                        href={checkoutPro.data}
                                        className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                                        Checkout
                                    </Link>
                                </div>
                            )}
                        </div>
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
