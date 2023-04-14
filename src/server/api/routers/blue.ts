import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@server/api/trpc";
import { env } from "src/env.mjs";

const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = env.SIB_API_KEY;

export const blueRouter = createTRPCRouter({
    createContact: protectedProcedure.input(z.object({ email: z.string() })).mutation(({ input, ctx }) => {
        let apiInstance = new SibApiV3Sdk.ContactsApi();

        let createContact = new SibApiV3Sdk.CreateContact();

        createContact.email = input.email;

        apiInstance.createContact(createContact).then(
            function (data: any) {
                console.log(data);
                console.log("API called successfully. Returned data: " + JSON.stringify(data));
                return;
            },
            function (error: any) {
                console.error(error.message);
                return;
            }
        );
    })
});
