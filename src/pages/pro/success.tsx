import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";

const ProSuccessPage: NextPage<{ portal: Stripe.Response<Stripe.BillingPortal.Session> }> = ({ portal }) => {
    const session = useSession();
    const createContact = api.blue.createContact.useMutation();
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
            <Header user={session.data?.user} />
            <nav aria-label="Breadcrumb" className="container mx-auto my-5 max-w-5xl px-8">
                <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <a href="/dashboard" className="block text-blue-600 transition hover:text-gray-700">
                            {" "}
                            Dashboard{" "}
                        </a>
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
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
                            <Link
                                href="/dashboard"
                                className="mt-10 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                                ← Go back to dashboard
                            </Link>
                            {portal.url && (
                                <div className="mt-4">
                                    <Link
                                        href={portal.url}
                                        className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                                        Manage your billing information →
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

export default ProSuccessPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";
import Link from "next/link";
import Footer from "@components/footer";
import { stripe } from "@server/stripe";
import Stripe from "stripe";
import { prisma } from "@server/db";
import { Session, User } from "next-auth";
import { useSession } from "next-auth/react";
import { api } from "@utils/api";
const YOUR_DOMAIN = env.NODE_ENV == "development" ? "http://localhost:3000" : "https://glow.up.railway.app/";

const SibApiV3Sdk = require("sib-api-v3-sdk");

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

    const checkoutID = context.query.session_id;
    if (checkoutID) {
        // fetch portal link in stripe
        const returnUrl = `${YOUR_DOMAIN}/dashboard/?session_id=${checkoutID}`;
        const checkout = await stripe.checkout.sessions.retrieve(checkoutID as string);
        const portal = await stripe.billingPortal.sessions.create({ customer: checkout.customer as string, return_url: returnUrl });

        // update user status in db
        await prisma.user.update({ where: { id: session.user.id }, data: { isPro: true } });

        // add contact to pro list
        let apiInstance = new SibApiV3Sdk.ContactsApi();
        let apiKey = apiInstance.authentications["apiKey"];
        apiKey.apiKey = env.SIB_API_KEY;
        let identifier = session.user.email;
        let updateContact = new SibApiV3Sdk.UpdateContact();
        updateContact.listIds = ["8", "10"]; // add to subscribed + all pros
        updateContact.unlinkListIds = ["9", "11"]; // remove from newsletter + unsubscribed
        await apiInstance.updateContact(identifier, updateContact).catch(console.error);

        return {
            props: {
                checkout,
                portal
            }
        };
    }

    return {
        props: {}
    };
}
