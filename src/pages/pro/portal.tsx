import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { useRouter } from "next/router";
import { api } from "@utils/api";
import Header from "@components/header";
import Perk from "@components/perk";

interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label }) => {
    return (
        <a
            href={href}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
};


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

            
            

            <div className="container mx-auto max-w-5xl px-8 mt-20 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Perk
                        href="#"
                        icon="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
                        title="Discord community"
                        description="Join our free discord server and meet other community members."
                        level="Member"
                    />
                    <Perk
                        href="#"
                        icon="https://www.svgrepo.com/show/408453/event-calender-date-note.svg"
                        title="Weekly Live Events"
                        description="Watch our weekly live events with successful entrepreneurs."
                        level="Member"
                    />
                    <Perk
                        href="#"
                        icon="https://www.svgrepo.com/show/324411/video-collection.svg"
                        title="Event Recordings"
                        description="Access all recordings of our weekly live events."
                        level="PRO"
                        disabled={true}
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
                        title="Video Library"
                        description="Interviews and behind-the-scenes with millionaires."
                        level="PRO"
                        disabled={true}
                    />
                </div>
            </div>



            <section className="flex h-full w-full items-center justify-center">
                <div>

                    {portalPro.isSuccess && (
                        <div className="mt-8">
                            <Link
                                href={portalPro.data}
                                className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400">
                                Manage your membership
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ProPortal;

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
