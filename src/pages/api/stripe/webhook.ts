/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { prisma } from "@server/db";
import type { NextApiRequest, NextApiResponse } from "next";
import getRawBody from "raw-body";
import { env } from "src/env.mjs";
import Stripe from "stripe";
import { API } from "@discordjs/core";
import { REST } from "@discordjs/rest";

const TOKEN = env.DISCORD_BOT_TOKEN;
const GUILD_ID = env.DISCORD_GUILD_ID;
const PRO_MEMBER_ID = env.DISCORD_PRO_MEMBER_ID;

const stripe = new Stripe(env.STRIPE_TEST_SECRET_KEY, {
    apiVersion: "2022-11-15"
});

export const config = {
    api: {
      bodyParser: false,
    },
};

// eslint-disable-next-line @typescript-eslint/require-await
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let event = req.body;
    // Replace this endpoint secret with your endpoint's unique secret
    // If you are testing with the CLI, find the secret by running 'stripe listen'
    // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
    // at https://dashboard.stripe.com/webhooks
    const endpointSecret = env.STRIPE_TEST_WEBHOOK_KEY;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
        const rawBody = await getRawBody(req, { encoding: true });
        // Get the signature sent by Stripe
        const signature = req.headers["stripe-signature"] as string | string[];
        try {
            event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
        } catch (err: any) {
            console.log(`⚠️  Webhook signature verification failed.`, err.message);
            return res.status(400).end();
        }
    }
    let subscription;
    let status;
    // Handle the event
    switch (event.type) {
        case "customer.subscription.trial_will_end":
            subscription = event.data.object;
            status = subscription.status;
            console.log(`Subscription ${subscription.id} status is ${status}.`);
            // Then define and call a method to handle the subscription trial ending.
            // handleSubscriptionTrialEnding(subscription);
            break;
        case "customer.subscription.deleted":
            subscription = event.data.object;
            status = subscription.status;
            console.log(`Subscription ${subscription.id} status is ${status}.`);
            // Then define and call a method to handle the subscription deleted.
            // handleSubscriptionDeleted(subscriptionDeleted);
        
            const subscriptionID = subscription.id;
            const checkout = await stripe.checkout.sessions.list({ subscription: subscriptionID });
      
            let userId;
            if (checkout.data[0]) userId = checkout.data[0].metadata?.user_id;
      
            if (userId) {
                await prisma.user.update({ where: { id: userId }, data: { isPro: false } })
                await prisma.proCheckout.deleteMany({ where: { userID: userId } });

                const account = await prisma.account.findFirst({ where: { userId: userId } });
                
                if (account) {
                    const rest = new REST({ version: '10' }).setToken(TOKEN);
                    const api = new API(rest);
                    await api.guilds.removeRoleFromMember(GUILD_ID, account.providerAccountId, PRO_MEMBER_ID);
                    console.log(`removed role pro from ${account.id}`)
                } else {
                    console.log(`account for userId ${userId} not found`);
                }
            }
            else console.log('user not found')
        
            break;
        case "customer.subscription.created":
            subscription = event.data.object;
            status = subscription.status;
            console.log(`Subscription ${subscription.id} status is ${status}.`);
            // Then define and call a method to handle the subscription created.
            // handleSubscriptionCreated(subscription);
            break;
        case "customer.subscription.updated":
            subscription = event.data.object;
            status = subscription.status;
            console.log(`Subscription ${subscription.id} status is ${status}.`);
            
            if (subscription.cancel_at) {
                const subscriptionID = subscription.id;
                await stripe.subscriptions.cancel(subscriptionID);
            }
            
            // Then define and call a method to handle the subscription update.
            // handleSubscriptionUpdated(subscription);
            break;
        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }
    // Return a 200 response to acknowledge receipt of the event
    res.status(200).end();
}
