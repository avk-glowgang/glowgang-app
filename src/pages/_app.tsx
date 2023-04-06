import { type AppType } from "next/app";
import { type Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";


import { api } from "utils,components/utils/api";

import "utils,components/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
  
}) => {
  return (
    <ClerkProvider {...pageProps} publishableKey="pk_test_d2lsbGluZy1vcmlvbGUtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA" appearance={ 
      {
        variables: {
          colorPrimary: "#1A75BA"
        }
      }
     }> 
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
