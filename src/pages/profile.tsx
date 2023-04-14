import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";

const Profile: NextPage = () => {
    return (
        <>
            <Head>
                <title>Profile | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </>
    );
};

export default Profile;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";

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
