import NextAuth from "next-auth";
import { authOptions } from "utils,components/server/auth";

export default NextAuth(authOptions);
