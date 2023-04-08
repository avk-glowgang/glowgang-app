import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Footer from "@components/footer";
import Stats from "@components/stats";

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
            <Stats />
            <Footer />
        </>
    );
};

export default Home;
