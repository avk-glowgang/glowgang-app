import { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";
import Footer from "@components/footer";
import { prisma } from "@server/db";
import Breadcrumbs from "@components/breadcrumbs";

// Podcast information
interface Podcast {
    id: string;
    title: string;
    description?: string;
    image?: string;
    link?: string;
}


const Recordings: NextPage<{ podcasts: Podcast[] }> = ({ podcasts }) => {

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
    ];

    return (
        <>
            <Head>
                <title>Podcast | Glow Gang</title>
            </Head>
            <Navbar />
            <Header />
            <Breadcrumbs items={breadcrumbs} />
            <div className="container mx-auto max-w-5xl px-8 mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
                    {podcasts.map((podcast) => (
                        <article className="group" key={podcast.id}>
                            <a href={podcast.link}>
                                <img
                                    alt={podcast.title}
                                    src={`../../events/banners/${podcast.image}`}
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
    const sessionID = context.query.session_id;

    const podcasts = await prisma.podcast.findMany({
        where: {
            sessionID,
        },
    });

    return {
        props: {
            podcasts,
        },
    };
}
