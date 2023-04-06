import { useAuth } from "@clerk/nextjs";
import Navbar from "utils,components/components/navbar";
import Header from "utils,components/components/header";
import Head from "next/head";


export default function Example() {
    const { isLoaded, userId } = useAuth();

    // In case the user signs out while on the page.
    if (!isLoaded || !userId) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Dashboard | Glow Gang</title>
            </Head>


            <Navbar />
            <Header />

            <div className="container max-w-5xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                asd
            </div>
        </>
    );
}