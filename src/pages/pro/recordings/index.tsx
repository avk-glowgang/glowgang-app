import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import Header from "@components/header";

const events = [
    {
        image: "../events/banners/MillionaireMondays.png",
        title: "Millionaire Mondays",
        url: "recordings/mm-recordings",
    },
    {
        image: "../events/banners/Q&AWednesdays.png",
        title: "Q&A Wednesdays",
    },
    {
        image: "../events/banners/CommunitySuccessStories.png",
        title: "Community Success Stories"
    },
];


const Recordings: NextPage = () => {
    const router = useRouter();
    const { query } = router;
    const sessionID = query.session_id;
    return (
        <>
            <Head>
                <title>Event Recordings | PRO | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Header />
            <nav aria-label="Breadcrumb" className="container mx-auto max-w-5xl px-8 my-5">
                <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">

                    <li>
                        <a href="/pro/portal" className="block transition text-blue-600 hover:text-gray-700"> Dashboard </a>
                    </li>

                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </li>
                    <li>
                        <p className="block transition hover:text-gray-700"> Podcast Recordings </p>
                    </li>
                </ol>
            </nav>



            <div className="container mx-auto max-w-5xl px-8 mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {events.map((event, index) => (
                        <article className="group" key={index}>
                            <a href={event.url}>
                            <img
                                alt={event.title}
                                src={event.image}
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:scale-105"
                                />
                            </a>
                        </article>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Recordings;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";
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