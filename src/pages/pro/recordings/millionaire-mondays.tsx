import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import Header from "@components/header";


const events = [
    {
        id: 1,
        title: "Alex G x Aaron (Millionaire Mondays Ep. 1)",
        image: "../../events/301995610_1236995393762761_5127352412176830480_n.png",
        description: "Alex G is a 22-year-old self-made millionaire. Starting from working at Dunkin' Donuts to making seven figures within six months by trading on the forex exchanges.",
        URL: "https://vimeo.com/816270415"
    },
    {
        id: 2,
        title: "Daniel Snow x Aaron (Millionaire Mondays Ep. 2)",
        image: "../../events/Daniel-Snow-work.jpg",
        description: "Daniel Snow is the founder of The Snow Agency and RapTV. He started with a simple idea and a credit card, eventually scaling his e-commerce business to over 8 million dollars in revenue.",
        URL: "#"
    },
    {
        id: 3,
        title: "Dre Medici x Aaron (Millionaire Mondays Ep. 4)",
        image: "../../events/IMG_20210913_180000_1.jpg",
        description: "Dre Medici, a 22-year-old multimillionaire who started a successful SMMA business instead of going to college.",
        URL: "#"
    },
];


const Recordings: NextPage = () => {
    const router = useRouter();
    const { query } = router;
    const sessionID = query.session_id;
    return (
        <>
            <Head>
                <title>Millionaire Mondays | Glow Gang</title>
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
                        <a href="/pro/recordings" className="block transition text-blue-600 hover:text-gray-700"> Podcast Recordings </a>
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
                        <p className="block transition hover:text-gray-700"> Millionaire Mondays </p>
                    </li>
                </ol>
            </nav>



            <div className="container mx-auto max-w-5xl px-8 mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">


                    {events.sort((a, b) => b.id - a.id).map((event, index) => (
                        <article className="group" key={index}>
                            <a href={event.URL} target="_blank">
                                <img
                                    alt={event.title}
                                    src={event.image}
                                    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                />

                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {event.title}
                                    </h3>


                                    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                        {event.description}
                                    </p>
                                </div>
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
