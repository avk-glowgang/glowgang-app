import { type GetServerSidePropsContext, type NextPage } from "next";
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

// Prefixing with an underscore to indicate it's intentionally unused
export function getServerSideProps(_context: GetServerSidePropsContext) {
    // Always redirect to Aaron's Discord page
    return {
        redirect: {
            destination: "https://aaronvankampen.com/pages/discord",
            permanent: false
        }
    };
}
