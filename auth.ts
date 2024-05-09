import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { connect } from "./lib/dbConfig";
import User from "./models/user";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    // async signIn({ user, account }: { user: any; account: any }) {
    //   if (account.provider === "google") {
    //     try {
    //       const { name, email } = user;
    //       await connect();
    //       const ifUserExist = await User.findOne({ email });
    //       if (ifUserExist) {
    //         return user;
    //       }
    //       const newUser = new User({
    //         name: name,
    //         email: email,
    //       });
    //       const res = await newUser.save();

    //       if (res.status === 200 || res.status === 201) {
    //         return user;
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    //   return user;
    // },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      console.log(session);
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
