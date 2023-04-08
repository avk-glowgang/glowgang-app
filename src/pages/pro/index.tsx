import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";

const ProInfoPage: NextPage = () => {
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
            <section></section>
            <section>
                <form action="/create-checkout-session" method="POST">
                    {/* Add a hidden field with the lookup_key of your Price */}
                    <input type="hidden" name="lookup_key" value={env.TEST_MEMBERSHIP_LOOKUP_KEY} />
                    <button id="checkout-and-portal-button" type="submit">
                        Checkout
                    </button>
                </form>
            </section>
        </>
    );
};

export default ProInfoPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";

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
