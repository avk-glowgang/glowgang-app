/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @next/next/no-img-element */
import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";
import Footer from "@components/footer";
import { prisma } from "@server/db";
import Breadcrumbs from "@components/breadcrumbs";
import { getServerSession } from "next-auth";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";
import { useSession } from "next-auth/react";

// Episode information
interface Episode {
    id: number;
    title: string;
    episodeNumber: number;
    description?: string;
    image?: string;
    link?: string;
}

interface Props {
    session: any;
    episodes: Episode[];
}

const Recordings: NextPage<Props> = ({ episodes }) => {
    const session = useSession();

    // Breadcumbs
    const breadcrumbs = [
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Podcast Recordings",
            href: "/pro/recordings"
        },
        {
            label: "Millionaire Mondays",
            href: "/pro/recordings/millionaire-mondays"
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
            <Header user={session.data?.user} />
            <Breadcrumbs items={breadcrumbs} />

            <div className="container mx-auto mb-10 mt-10 max-w-5xl px-8">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-2">
                    {episodes
                        .sort((a, b) => b.id - a.id)
                        .map((episode) => (
                            <article className="group" key={episode.id}>
                                <a href={episode.link}>
                                    <img
                                        alt={episode.title}
                                        src={`../../events/${episode.image}`}
                                        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                    />
                                </a>

                                <div className="p-4">
                                    <a href={episode.link}>
                                        <div className="flex items-center gap-2">
                                            <span className="whitespace-nowrap rounded bg-green-600 px-1.5 py-0.5 text-xs text-white">
                                                Episode #{episode.episodeNumber}
                                            </span>
                                            <h3 className="text-lg font-medium text-gray-900">{episode.title}</h3>
                                        </div>

                                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">{episode.description}</p>
                                    </a>
                                </div>
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

    const episodes = await prisma.episode.findMany({
        where: {
            podcastId: 1
        }
    });

    return {
        props: {
            session,
            episodes
        }
    };
}
