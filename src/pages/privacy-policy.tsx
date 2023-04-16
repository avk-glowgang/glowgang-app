import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const ProPortal: NextPage = () => {

    return (
        <>
            <Head>
                <title>Privacy Policy | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />


            <div className="container mx-auto mb-10 mt-10 max-w-5xl px-8">

                <h1 className="mb-10 text-center text-2xl font-bold text-gray-700">Privacy Policy</h1>
                <p className="mb-10 text-center text-gray-700">This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.</p>

                <h2>Purpose of the Website</h2>
                <p>Our website is designed to allow people to sign up and get access to exclusive content.</p>

                <h2>Personal Information Collected</h2>
                <p>We collect your email address when you register on our website.</p>

                <h2>Information Collection Method</h2>
                <p>We collect your email address through our registration form.</p>

                <h2>Use of Personal Information</h2>
                <p>We use your email address to send you promotional emails and to improve your user experience.</p>

                <h2>Sharing of Personal Information</h2>
                <p>We do not share your personal information with any third parties.</p>

                <h2>Protection of Personal Information</h2>
                <p>We take reasonable measures to protect your personal information from unauthorized access or disclosure.</p>

                <h2>User Rights</h2>
                <p>You have the right to unsubscribe from our newsletters at any time.</p>

                <h2>Contact Information</h2>
                <p>If you have any questions or concerns about your personal information, please contact us at glowgangemail@gmail.com.</p>

                <p>By using our website, you agree to the terms of this Privacy Policy. We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website.</p>

            </div>

            <Footer />
        </>
    );
};

export default ProPortal;


