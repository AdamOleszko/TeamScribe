import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import vercelPostgresAdapter from "./vercelPostgresAdapter";
export const authOptions = {
  adapter: vercelPostgresAdapter(),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      // authorization: {
      //     params: {
      //         prompt: "consent",
      //         access_type: "offline",
      //         response_type: "code"
      //     }
      // }
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   session: async ({ session, token }: any) => {
  //     console.log({ session, token });
  //     if (session?.user && token) {
  //       session.user.id = token.uid;
  //     }
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //     return session;
  //   },
  //   jwt: async ({ user, token }: any) => {
  //     if (user) {
  //       token.uid = user.id;
  //     }
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //     return token;
  //   },
  // },
  // session: {
  //   strategy: "jwt" as const,
  // },
};
export default NextAuth(authOptions);
