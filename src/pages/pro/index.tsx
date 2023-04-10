import { type NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Header from "@components/header";

const ProInfoPage: NextPage = () => {
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


                <div className="container mx-auto max-w-5xl px-8 pt-10 pb-10 mb-20">
                    <div className="text-center lg:mb-12">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">Become a <span className="whitespace-nowrap  rounded-full bg-black px-5 py-0.5 text-white">
                            PRO
                        </span> Member!</h2>
                        <p className=" text-gray-500 sm:text-lg">Become a PRO member and get access to all of our exclusive features and perks.</p>
                    </div>

                    <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                🌟
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Discord perks and privileges</h3>
                            <p className="text-gray-500 ">Get a special <span className="rounded-full font-bold bg-black px-2 py-0.5 text-white">
                                PRO
                            </span> role, that will grant you permissions to post in <span className="rounded bg-blue-50 px-0.5 py-0.5 ">
                                    Marketplace
                                </span> channels where you can find employees, clients, business partners, mentors, anything you need!</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                📹
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">All live event recordings</h3>
                            <p className="text-gray-500 ">Get access to all of our live event recordings, including our weekly <span className="rounded bg-green-50 px-0.5 py-0.5 ">Millionaire Mondays</span>, <span className="rounded bg-green-50 px-0.5 py-0.5 ">Q&A Wednesdays</span>, and <span className="rounded bg-green-50 px-0.5 py-0.5 ">Community Success Stories</span> events,
                                and any future events.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                🎥
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Interviews with Millionaires</h3>
                            <p className="text-gray-500 ">Get an hour long interview and behind the scenes footage with millionaires every week! Learn how they got started, and what they did to become successful.</p>
                        </div>


                    </div>
                </div>


                <div className="container mx-auto max-w-5xl pb-10 mb-20">
                    <div className="text-center lg:mb-12">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">More coming soon...</h2>
                        <p className=" text-gray-500 sm:text-lg">New perks and features will be released gradually, so stay tuned!</p>

                    </div>

                    <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 opacity-50">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Courses & Tutorials</h3>
                            <p className="text-gray-500 ">Learn from the best in the industry with our courses and tutorials. From beginner to advanced, in various topics.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Discounted Merchandise</h3>
                            <p className="text-gray-500 ">Exclusive discounts on merchandise, from clothing to accessories, and more...</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path fillRule="evenodd" d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Deals & discounts</h3>
                            <p className="text-gray-500 ">Exclusive deals and discounts on tools, services, and products that will help you grow your business and improve your life.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Referral program</h3>
                            <p className="text-gray-500 ">Access to our referral program and earn money by referring your friends and family to our community.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Consultations with experts</h3>
                            <p className="text-gray-500 ">Book free consultations with industry experts, including lawyers, accountants, business consultants. </p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">Resources</h3>
                            <p className="text-gray-500 ">Library of resources, tools, and templates to help you start, grow, and scale your business.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-black lg:h-12 lg:w-12 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white lg:w-6 lg:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold ">AI Assistant</h3>
                            <p className="text-gray-500 ">Generate unlimited business ideas, business name suggestions, business plans, and more.</p>
                        </div>
                    </div>
                </div>



                <div className="container mx-auto max-w-5xl px-8 mb-20">
                    <div className="text-center mt-10  lg:mb-12">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Are your ready? 🚀</h2>
                        <p className=" text-gray-500 sm:text-lg">Get an instant access to everything you've seen above.</p>

                    </div>

                    
                    <div className="flex flex-col items-center justify-center mt-10">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 text-center">
                            <div className="flex items-center justify-center mb-5">
                                <span className="text-4xl font-bold">$</span>
                                <span className="text-6xl font-bold">97</span>
                                <span className="text-xl font-bold">/month</span>
                            </div>
                            <Link href="/sign-up">
                                <p className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition duration-300">Become a PRO member</p>
                            </Link>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">Cancel anytime. No hidden fees. No commitment. Secure payment.</p>
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
