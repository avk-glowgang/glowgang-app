import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import { api } from "@utils/api";
import Header from "@components/header";
import Perk from "@components/perk";

const ProPortal: NextPage = () => {
    const router = useRouter();
    const { query } = router;
    const sessionID = query.session_id;
    const portalPro = api.stripe.portalPro.useQuery({ sessionID: sessionID as string });

    return (
        <>
            <Head>
                <title>Dashboard | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            
            <Navbar />
            <Header />

            
        

            <div className="container mx-auto max-w-5xl px-8 mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Perk
                        href="#"
                        icon="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
                        title="Discord Community"
                        description="Join our free Discord server and meet other community members."
                        level="Member"
                    />
                    <Perk
                        href="#"
                        icon="https://www.svgrepo.com/show/408453/event-calender-date-note.svg"
                        title="Weekly Podcasts"
                        description="Watch our weekly live podcasts with successful people in Discord server."
                        level="Member"
                    />
                    <Perk
                        href="/pro/recordings"
                        icon="https://www.svgrepo.com/show/324411/video-collection.svg"
                        title="Podcast Recordings"
                        description="All of our podcast recordings are available to watch on-demand."
                        level="PRO"
                    />
                    <Perk
                        href="#"
                        icon="https://www.svgrepo.com/show/219422/discount.svg"
                        title="Discounts & Deals"
                        description="Exclusive discounts and deals for our PRO members."
                        level="PRO"
                        disabled={true}
                    />
                    <Perk
                        href="#"
                        icon="https://www.svgrepo.com/show/452175/camera.svg"
                        title="Interviews"
                        description="Interviews and behind-the-scenes with millionaires."
                        level="PRO"
                        disabled={true}
                    />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProPortal;

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
