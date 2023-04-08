import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";

const ProSuccessPage: NextPage<{ sessionId: string }> = ({ sessionId }) => {
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
            <section>
                <div className="product Box-root">
                    <div className="description Box-root">
                        <h3>Subscription to Membership plan successful!</h3>
                    </div>
                </div>
                <form action="/create-portal-session" method="POST">
                    <input type="hidden" id="session-id" name="session_id" value={sessionId} />
                    <button id="checkout-and-portal-button" type="submit">
                        Manage your billing information
                    </button>
                </form>
            </section>
        </>
    );
};

export default ProSuccessPage;

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
