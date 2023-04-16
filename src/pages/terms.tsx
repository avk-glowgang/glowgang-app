import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const ProPortal: NextPage = () => {

    return (
        <>
            <Head>
                <title>Terms and Conditions | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />


            <div className="container mx-auto mb-10 mt-10 max-w-5xl px-8">

                <h1 className="mb-10 text-center text-2xl font-bold text-gray-700">Terms and Conditions</h1>
                <p>These Terms and Conditions ("Agreement") govern your use of our website. By using our website, you agree to be bound by this Agreement. If you do not agree with any of these terms, please do not use our website.</p>

                <h2>Purpose of the Website</h2>
                <p>Our website is designed to allow people to sign up and get access to exclusive content.</p>

                <h2>User Agreement</h2>
                <p>By using our website, you agree to abide by these terms and conditions. You must be at least 18 years old to use our website.</p>

                <h2>Use of Content</h2>
                <p>All content on our website is protected by copyright and other intellectual property laws. You may not use our content without our express written permission.</p>

                <h2>User Conduct</h2>
                <p>You agree to use our website only for lawful purposes. You may not use our website in a way that is harmful, offensive, or illegal.</p>

                <h2>Termination</h2>
                <p>We reserve the right to terminate your access to our website at any time if you violate these terms and conditions.</p>

                <h2>Limitation of Liability</h2>
                <p>We are not liable for any damages that arise from your use of our website. This includes direct, indirect, incidental, or consequential damages.</p>

                <h2>Indemnification</h2>
                <p>You agree to indemnify and hold us harmless from any claims or damages that arise from your use of our website.</p>

                <h2>Modifications to the Agreement</h2>
                <p>We may update this Agreement from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website.</p>

                <h2>Contact Information</h2>
                <p>If you have any questions or concerns about these terms and conditions, please contact us at glowgangemail@gmail.com.</p>

                <p>By using our website, you agree to the terms of this Agreement. We reserve the right to modify this Agreement at any time. If you continue to use our website after we have modified the Agreement, you are indicating that you agree to the modified terms.</p>


            </div>

            <Footer />
        </>
    );
};

export default ProPortal;


