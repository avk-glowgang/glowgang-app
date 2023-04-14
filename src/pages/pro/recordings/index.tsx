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
import { env } from "src/env.mjs";

// Podcast information
interface Podcast {
    id: string;
    title: string;
    description?: string;
    image?: string;
    link?: string;
}

const Recordings: NextPage<{ podcasts: Podcast[] }> = ({ podcasts }) => {
    const router = useRouter();
    const { query } = router;
    const sessionID = query.session_id;
    const portalPro = api.stripe.portalPro.useQuery({ sessionID: sessionID as string });

    // Breadcumbs
    const breadcrumbs = [
        {
            label: "Dashboard",
            href: "/pro/portal"
        },
        {
            label: "Podcast Recordings",
            href: "/pro/recordings"
        }
    ];

    return (
        <>
            <Head>
                <title>Podcast Recordings | Glow Gang</title>
            </Head>
            <Navbar />
            <Header />
            <Breadcrumbs items={breadcrumbs} />
            <div className="container mx-auto mb-10 mt-10 max-w-5xl px-8">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-2">
                    {podcasts.map((podcast) => (
                        <article className="group" key={podcast.id}>
                            <a href={`/pro/recordings/${podcast.link}`}>
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
    // TODO: remove when page is launched
    if (env.NODE_ENV !== "development") {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    const sessionID = context.query.session_id;
    const id = isNaN(Number(sessionID)) ? null : Number(sessionID);
    const session = await getServerSession(context.req, context.res, authOptions);

    const podcasts = await prisma.podcast.findMany({
        where: {
            id: id !== null ? { equals: id } : undefined
        }
    });

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
            podcasts
        }
    };
}
