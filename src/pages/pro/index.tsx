import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Image from "next/image";
import Header from "@components/header";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

const ProInfoPage: NextPage = () => {
    const checkoutPro = api.stripe.checkoutPro.useQuery();
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
            {/* Info and Payment Information for Membership */}
            <section className="bg-white">
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
                            <p className="block transition hover:text-gray-700"> PRO Membership </p>
                        </li>
                    </ol>
                </nav>


                <div className="container mx-auto max-w-5xl px-8">


                    <section className="bg-white">
                        <div className="mx-auto max-w-5xl px-8 py-8 sm:py-12 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Become a <span className="whitespace-nowrap  rounded-full bg-red-100 px-5 py-0.5 text-red-700">
                                    PRO
                                </span> Member!</h2>
                                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Become a PRO member and get access to all of our exclusive features and perks.</p>
                            </div>

                            
                        </div>
                    </section>


                </div>



            </section>
            <Footer />
        </>
    );
};

export default ProInfoPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { api } from "@utils/api";
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
