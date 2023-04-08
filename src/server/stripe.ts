import { env } from "../env.mjs";
import Stripe from "stripe";

const globalForStripe = globalThis as unknown as {
    stripe: Stripe | undefined;
};

export const stripe =
    globalForStripe.stripe ??
    new Stripe(env.STRIPE_TEST_SECRET_KEY, {
        apiVersion: "2022-11-15"
    });

if (env.NODE_ENV !== "production") globalForStripe.stripe = stripe;
