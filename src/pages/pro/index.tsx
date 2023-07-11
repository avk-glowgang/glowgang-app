import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";
import Breadcrumbs from "@components/breadcrumbs";

const ProInfoPage: NextPage<{ checkout: Stripe.Response<Stripe.Checkout.Session> }> = ({ checkout }) => {
    // Breadcumbs
    const breadcrumbs = [
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Become a PRO Member",
            href: "/pro"
        }
    ];

    const session = useSession();

    return (
        <>
            <Head>
                <title>PRO Membership | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Header user={session.data?.user} />
            <Breadcrumbs items={breadcrumbs} />

            <section className="bg-white">
                <div className="container mx-auto mb-20 max-w-5xl px-8 pb-10 pt-10">
                    <div className="text-center lg:mb-12">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
                            Become a <span className="whitespace-nowrap  rounded-full bg-black px-5 py-0.5 text-white">PRO</span> Member!
                        </h2>
                        <p className=" text-gray-500 sm:text-lg">Become a PRO member and get access to all of our exclusive features and perks.</p>
                    </div>

                    <div className=" md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12">
                                🌟
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Discord PRO Role</h3>
                            <p className="text-gray-500">
                                As a PRO member, you will receive a special <span className="rounded-full bg-black px-2 py-0.5 font-bold text-white">PRO</span> role in our Discord server. This role will make you stand out and be more trustworthy within our community.
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12">
                                📹
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Marketplace Posting Privileges</h3>
                            <p className="text-gray-500">
                                As a PRO member, you will gain the ability to post in our Marketplace channel, where you can sell your services/products, find business partners, self-promote, hire employees, and more. Regular members can still see the Marketplace, but only PRO members have the privilege to post.
                            </p>
                        </div>


                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12">
                                🎥
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Exclusive Pro Channels in Discord</h3>
                            <p className="text-gray-500">
                                As a PRO member, you will unlock hidden PRO channels in our Discord server, exclusively reserved for PRO members. These special channels provide a space where you can interact with other like-minded PRO members and engage in valuable discussions, share insights, and collaborate. In addition, you&apos;ll have the opportunity to connect directly with Aaron, gaining exclusive access to his expertise and guidance.
                            </p>
                        </div>


                    </div>
                </div>

                <div className="container mx-auto mb-20 max-w-5xl px-8 pb-10 pt-10">
                    <div className="text-center lg:mb-12">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">More coming soon...</h2>
                        <p className=" text-gray-500 sm:text-lg">New perks and features will be released gradually, so stay tuned!</p>
                    </div>

                    <div className=" opacity-50 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Courses & Tutorials</h3>
                            <p className="text-gray-500 ">
                                Learn from the best in the industry with our courses and tutorials. From beginner to advanced, in various topics.
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Discounted Merchandise</h3>
                            <p className="text-gray-500 ">Exclusive discounts on merchandise, from clothing to accessories, and more...</p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Deals & discounts</h3>
                            <p className="text-gray-500 ">
                                Exclusive deals and discounts on tools, services, and products that will help you grow your business and improve your life.
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Referral program</h3>
                            <p className="text-gray-500 ">
                                Access to our referral program and earn money by referring your friends and family to our community.
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Consultations with experts</h3>
                            <p className="text-gray-500 ">
                                Book free consultations with industry experts, including lawyers, accountants, business consultants.{" "}
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Resources</h3>
                            <p className="text-gray-500 ">Library of resources, tools, and templates to help you start, grow, and scale your business.</p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">AI Assistant</h3>
                            <p className="text-gray-500 ">Generate unlimited business/content ideas, business name suggestions, business plans, and more.</p>
                        </div>
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-white lg:h-6 lg:w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Documentaries</h3>
                            <p className="text-gray-500 ">Long form documentaries on business, entrepreneurship, and more.</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mb-20 max-w-5xl px-8">
                    <div className="mt-10 text-center lg:mb-12">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Congratulations!</h2>
                        <p className="text-gray-500 sm:text-lg">You&apos;re one of the first 50 members to join our PRO membership. Here&apos;s a discount code for a 50% off lifetime discount: <span className="font-bold">50GG</span>.</p>
                    </div>


                    <div className="mt-10 flex flex-col items-center justify-center">
                        <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
                            <div className="mb-5 flex items-center justify-center">
                                <span className="text-4xl font-bold">$</span>
                                <span className="text-6xl font-bold">19.97</span>
                                <span className="text-xl font-bold">/month</span>
                            </div>
                            <Link href={checkout.url as string}>
                                <p className="rounded-lg bg-black px-8 py-3 font-bold text-white transition duration-300 hover:bg-gray-900">
                                    Become a PRO member
                                </p>
                            </Link>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">Cancel anytime. No hidden fees. No commitment. Secure payment.</p>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
};

export default ProInfoPage;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import Link from "next/link";
import Footer from "@components/footer";
import { env } from "src/env.mjs";
import { stripe } from "@server/stripe";
import type Stripe from "stripe";
import { prisma } from "@server/db";
import { useSession } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const YOUR_DOMAIN = env.NODE_ENV == "development" ? "http://localhost:3000" : env.NEXTAUTH_URL;

    // TODO: remove when page is launched
    // if (env.NODE_ENV !== "development") {
    //     return {
    //         redirect: {
    //             destination: "/dashboard",
    //             permanent: false
    //         }
    //     };
    // }
    // check if user is logged in
    const session = await getServerSession(context.req, context.res, authOptions);
    if (!session) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false
            }
        };
    }

    // check if a user is already a pro subscriber
    if (session.user.isPro) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false
            }
        };
    }

    // check if a user already has a checkout session previously, then retrieve that instead
    const user = await prisma.user.findUnique({ where: { id: session.user.id }, include: { proCheckouts: { orderBy: { createdAt: "desc" } } } });
    if (user && user.proCheckouts.length >= 1) {
        const proCheckout = user.proCheckouts[0];
        const checkout = await stripe.checkout.sessions.retrieve(proCheckout?.checkoutID as string);
        if (checkout.url) {
            return {
                props: {
                    session,
                    checkout
                }
            };
        } else {
            throw Error("invalid previous checkout");
        }
    }

    // create new checkout session
    const prices = await stripe.prices.list({
        lookup_keys: [env.NEXT_PUBLIC_TEST_MEMBERSHIP_LOOKUP_KEY],
        expand: ["data.product"]
    });
    const product = prices.data[0] as Stripe.Price;
    const checkout = await stripe.checkout.sessions.create({
        billing_address_collection: "auto",
        line_items: [
            {
                price: product.id,
                quantity: 1
            }
        ],
        metadata: {
            user_id: session.user.id
        },
        mode: "subscription",
        success_url: `${YOUR_DOMAIN}/pro/success/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${YOUR_DOMAIN}/pro/canceled/?canceled=true`
    });

    if (checkout.url) {
        // upload checkout session to db
        await prisma.proCheckout.create({ data: { userID: session.user.id, checkoutID: checkout.id, checkoutURL: checkout.url } });
        return {
            props: {
                session,
                checkout
            }
        };
    } else {
        throw Error("invalid new checkout");
    }
}
