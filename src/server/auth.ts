/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type GetServerSidePropsContext } from "next";
import { getServerSession, type NextAuthOptions, type DefaultSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../env.mjs";
import { prisma } from "@server/db";
import { type User as PrismaUser } from "@prisma/client";
const SibApiV3Sdk = require("sib-api-v3-sdk");
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            isPro: boolean;
            isAdmin: boolean;
        } & DefaultSession["user"];
    }

    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends PrismaUser {}
    /**
     * Usually contains information about the provider being used
     * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
     */
    // interface Account {}
    /** The OAuth profile returned from your provider */
    // interface Profile {}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
                session.user.isPro = user.isPro;
                session.user.isAdmin = user.isAdmin;
            }
            return session;
        },
        async signIn({ user }) {
            if (user.email) {
                const count = await prisma.blueContact.count({ where: { email: user.email } });
                if (count == 0) {
                    // add contact to sib
                    const defaultClient = SibApiV3Sdk.ApiClient.instance;
                    const apiKey = defaultClient.authentications["api-key"];
                    apiKey.apiKey = env.SIB_API_KEY;
                    const apiInstance = new SibApiV3Sdk.ContactsApi();
                    const createContact = new SibApiV3Sdk.CreateContact();
                    createContact.email = user.email;
                    createContact.updateEnabled = true;
                    createContact.listIds = [7, 11]; // 7 = registered, 11 = subscribed
                    console.log(`[sign-in]: adding ${user.email} into SIB contacts list...`);
                    await apiInstance.createContact(createContact).catch((err: any) => {
                        console.error(`[sign-in]: adding to contact error! ${err.status}: ${err.message}`);
                    });

                    // send sib welcome email
                    const welcomeApiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
                    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
                    sendSmtpEmail.templateId = 5;
                    sendSmtpEmail.to = [{ name: user.name, email: user.email }];
                    console.log(`[sign-in]: sending welcome email to ${user.email}...`);
                    await welcomeApiInstance.sendTransacEmail(sendSmtpEmail).catch((err: any) => {
                        console.error(`[sign-in]: sending welcome email error! ${err.status}: ${err.message}`);
                        console.log(err);
                    });

                    // add contact to db
                    console.log(`[sign-in]: uploading ${user.email} into database...`);
                    await prisma.blueContact.create({ data: { email: user.email } }).catch(console.error);
                }
            }
            return true;
        }
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        })
    ],
    secret: env.NEXTAUTH_SECRET
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: { req: GetServerSidePropsContext["req"]; res: GetServerSidePropsContext["res"] }) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
