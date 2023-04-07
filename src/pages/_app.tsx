import { type AppType } from "next/app";
import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "@utils/api";
import "@styles/globals.css";
import { env } from "@root/env.mjs";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <ClerkProvider
            {...pageProps}
            publishableKey={env.NEXT_PUBLIC_DEV_CLERK_PUBLISHABLE_KEY}
            appearance={{
                variables: {
                    colorPrimary: "#1A75BA"
                },
                layout: {
                    logoPlacement: "outside",
                    socialButtonsVariant: "iconButton"
                }
            }}>
            <Component {...pageProps} />
        </ClerkProvider>
    );
};

export default api.withTRPC(MyApp);
