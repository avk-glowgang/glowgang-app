import { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";
import Footer from "@components/footer";
import { prisma } from "@server/db";
import Breadcrumbs from "@components/breadcrumbs";
import { useRouter } from "next/router";
import { api } from "@utils/api";
import { getServerSession } from "next-auth";
import { authOptions } from "@server/auth";

// Episode information
interface Episode {
    id: number;
    title: string;
    description?: string;
    image?: string;
    link?: string;
}

interface Props {
    session: any;
    episodes: Episode[];
}

const Recordings: NextPage<Props> = ({ session, episodes }) => {
    const router = useRouter();
    const { query } = router;
    const sessionID = query.session_id;
    const portalPro = api.stripe.portalPro.useQuery({ sessionID: sessionID as string });

    // Breadcumbs
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
                    {episodes.map((episode) => (
                        <article className="group" key={episode.id}>
                            <a href={episode.link}>
                                <img
                                    alt={episode.title}
                                    src={episode.image}
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

    const episodes = await prisma.episode.findMany({
        where: {
            podcastId: 1,
        },
    });

    return {
        props: {
            session,
            episodes,
        }
    };
}
