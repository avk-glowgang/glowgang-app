import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import Header from "@components/header";
import Breadcrumbs from "@components/breadcrumbs";


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
        image: "../../events/dre.JPG",
        description: "Dre Medici, a 22-year-old multimillionaire who started a successful SMMA business instead of going to college.",
        URL: "#"
    },
];


const Recordings: NextPage = () => {
    const breadcrumbs = [
        {
            label: "Dashboard",
            href: "/pro/portal",
        },
        {
            label: "Podcast Recordings",
            href: "/pro/recordings",
        },
        {
            label: "Millionaire Mondays",
            href: "/pro/recordings/millionaire-mondays",
        }
    ];



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
            <Breadcrumbs items={breadcrumbs} />

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
