import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";
import Navbar from "@components/navbar";
import { type Session } from "next-auth/core/types";
import type { User } from "@prisma/client";
import Image from "next/image";

type LabelProps = {
    placeholder: string,
    value: string | null | React.ReactNode
}

const Label: React.FC<LabelProps> = ({ placeholder, value }) => {
    return <div className="flex items-center text-sm">
        <div className="w-[300px] text-gray-400">{placeholder}</div>
        <div className="text-semibold text-gray-800">{value}</div>
    </div>
}

const Badge: React.FC<{isPro: boolean}> = ({ isPro }) => {
    if (isPro)
        return <div className="text-xs font-semibold text-white bg-gray-900 rounded px-2 py-1">PRO</div>
    
    return <div className="text-xs font-semibold text-purple-700 bg-purple-100 rounded px-2 py-1">Member</div>
}


type Props = {
    sessions: Session,
    user: User
}

const Profile: NextPage<Props> = ({ user }) => {
    const billingPortalLogin = env.NEXT_PUBLIC_TEST_MEMBERSHIP_LOOKUP_KEY || "";
    return (
        <>
            <Head>
                <title>Profile | Glow Gang</title>
                <meta
                    name="description"
                    content="We are a community of like minded individuals striving for greatness and achieving success. Among us are multi-millionaires, content creators, aspiring entrepreneurs and people seeking guidance."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <main className="mx-auto max-w-7xl mt-8">
                <h1 className="font-semibold text-2xl mb-4 text-gray-800">Profile</h1>

                <div className="flex gap-[2rem] border-b-[1px] pb-4">
                    <div className="bg-gray-300 rounded-lg w-[150px] h-[150px]"></div>
                    <div className="flex flex-col gap-2">
                        <Label placeholder="Email" value={user.email}/>
                        <Label placeholder="Name" value={user.name}/>
                        <Label placeholder="Status" value={<Badge isPro={user.isPro}/>}/>

                        <div className="mt-4">
                        {user.isPro ? 
                            <a target="_blank" href={billingPortalLogin} className="text-sm font-semibold text-gray-800 inline-flex gap-1 items-center border rounded-lg border-gray-800 px-4 py-2 w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>
                                <span>Manage Billing</span>
                            </a>
                        : 
                            <button
                                className="block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-900 focus:outline-none focus:ring"
                                type="button">
                                <Link href="/pro">
                                    <p>Become a PRO member</p>
                                </Link>
                            </button>
                        }
                            
                        </div>
                    </div>
                    {/* {user.image 
                        ? <Image src={user.image} alt="profile-user" width={200} height={200}/>
                        : <>No Image</>
                    } */}
                </div>
            </main>
        </>
    );
};

export default Profile;

import { getServerSession } from "next-auth/next";
import { authOptions } from "@server/auth";
import { env } from "src/env.mjs";
import { prisma } from "@server/db";
import React from "react";
import Link from "next/link";

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

    const session = await getServerSession(context.req, context.res, authOptions);
    const user = await prisma.user.findFirst({ 
        where: { id: session?.user.id }
        // include: { 
        //     accounts: {
        //         select: {
        //             provider: true,
        //             type: true
        //         }
        //     } 
        // }
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
            session,
            user: { 
                ...user, 
                createdAt: user?.createdAt.toISOString(),
                updatedAt: user?.updatedAt.toISOString(),
            }
        }
    };
}
