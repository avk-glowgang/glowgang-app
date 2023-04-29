import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useSession } from "next-auth/react";

const Profile: NextPage = () => {
    const session = useSession();

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
            <article className="space-y-5 p-5">
                <section className="mx-auto block max-w-5xl rounded-xl border p-4 sm:p-6 lg:p-8">
                    <h3 className="mt-3 text-lg font-bold text-gray-800 sm:text-xl">Account Settings</h3>
                    <div className="grid grid-cols-2">
                        <span className="font-bold®">Name</span>
                        <span>{session.data?.user.name}</span>
                    </div>
                </section>
                <section className="mx-auto block max-w-5xl rounded-xl border p-4 sm:p-6 lg:p-8">
                    <h3 className="mt-3 text-lg font-bold text-gray-800 sm:text-xl">Discord Settings</h3>
                </section>
            </article>
        </>
    );
};

export default Profile;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";

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
