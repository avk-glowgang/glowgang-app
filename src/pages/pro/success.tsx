/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";

const ProSuccessPage: NextPage<{ portal: Stripe.Response<Stripe.BillingPortal.Session> }> = ({ portal }) => {
    const session = useSession();
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
                        <Link href="/dashboard" className="block text-blue-600 transition hover:text-gray-700">
                            {" "}
                            Dashboard{" "}
                        </Link>
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
                            
                            <div className="flex gap-4 mt-10">
                                <Link
                                    href="/dashboard"
                                    className="inline-block rounded-lg bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400">
                                    ← Go back to dashboard
                                </Link>

                                {portal.url && <ManageBillingButton href={portal.url}/>}
                            </div>
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
import type Stripe from "stripe";
import { prisma } from "@server/db";
import { useSession } from "next-auth/react";
import { API } from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { ManageBillingButton } from "../profile";
const YOUR_DOMAIN = env.NODE_ENV == "development" ? "http://localhost:3000" : "https://glow.up.railway.app/";
const TOKEN = env.DISCORD_BOT_TOKEN;
const GUILD_ID = env.DISCORD_GUILD_ID;
const PRO_MEMBER_ID = env.DISCORD_PRO_MEMBER_ID;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SibApiV3Sdk = require("sib-api-v3-sdk");

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

    const checkoutID = context.query.session_id;
    if (checkoutID) {
        // fetch portal link in stripe
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const returnUrl = `${YOUR_DOMAIN}/dashboard/?session_id=${checkoutID}`;
        const checkout = await stripe.checkout.sessions.retrieve(checkoutID as string);
        const portal = await stripe.billingPortal.sessions.create({ customer: checkout.customer as string, return_url: returnUrl });

        // update user status in db
        await prisma.user.update({ where: { id: session.user.id }, data: { isPro: true } });
        
        // add role pro to member
        const account = await prisma.account.findFirst({ where: { userId: session.user.id } });

        try {
            if (account) {
                const rest = new REST({ version: '10' }).setToken(TOKEN);
                const api = new API(rest);
                await api.guilds.addRoleToMember(GUILD_ID, account.providerAccountId, PRO_MEMBER_ID);
            } else {
                console.log('account not found');
            }
        } catch (error) {
            console.log('error: ', error);
        }

        // add contact to pro list
        const defaultClient = SibApiV3Sdk.ApiClient.instance;
        const apiKey = defaultClient.authentications["api-key"];
        apiKey.apiKey = env.SIB_API_KEY;
        const apiInstance = new SibApiV3Sdk.ContactsApi();
        const identifier = session.user.email;
        const updateContact = new SibApiV3Sdk.UpdateContact();
        updateContact.listIds = [8, 10]; // add to subscribed + all pros
        updateContact.unlinkListIds = [9, 11]; // remove from newsletter + unsubscribed
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
