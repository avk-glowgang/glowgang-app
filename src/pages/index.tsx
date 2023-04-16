import { GetServerSidePropsContext, type NextPage } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Footer from "@components/footer";
import WhyJoin from "@components/whyjoin";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
            <WhyJoin />
            <Footer />
        </>
    );
};

export default Home;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false
            }
        };
    }

    return {
        props: {}
    };
}
