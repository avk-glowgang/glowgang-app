import { createTRPCRouter, protectedProcedure } from "@server/api/trpc";
import Stripe from "stripe";
import { env } from "src/env.mjs";
import { z } from "zod";
const YOUR_DOMAIN = env.NODE_ENV == "development" ? "http://localhost:3000" : "https://glow.up.railway.app/";

export const stripeRouter = createTRPCRouter({
    checkoutPro: protectedProcedure.query(async ({ ctx }) => {
        const prices = await ctx.stripe.prices.list({
            lookup_keys: [env.NEXT_PUBLIC_TEST_MEMBERSHIP_LOOKUP_KEY],
            expand: ["data.product"]
        });
        const product = prices.data[0] as Stripe.Price;
        const session = await ctx.stripe.checkout.sessions.create({
            billing_address_collection: "auto",
            line_items: [
                {
                    price: product.id,
                    quantity: 1
                }
            ],
            mode: "subscription",
            success_url: `${YOUR_DOMAIN}/pro/success/?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/pro/canceled/?canceled=true`
        });

        return session.url as string;
    }),
    portalPro: protectedProcedure.input(z.object({ sessionID: z.string() })).query(async ({ input, ctx }) => {
        const { sessionID } = input;
        const checkoutSession = await ctx.stripe.checkout.sessions.retrieve(sessionID);
        const returnUrl = `${YOUR_DOMAIN}/pro/portal`;
        const portalSession = await ctx.stripe.billingPortal.sessions.create({
            customer: checkoutSession.customer as string,
            return_url: returnUrl
        });

        return portalSession.url as string;
    })
});
