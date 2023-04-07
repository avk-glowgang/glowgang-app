import { useAuth } from "@clerk/nextjs";
import Navbar from "@components/navbar";
import Header from "@components/header";
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

            <div className="container mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 px-8 sm:grid-cols-2 md:grid-cols-3">asd</div>
        </>
    );
}
