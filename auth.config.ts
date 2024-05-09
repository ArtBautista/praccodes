import google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/user";
import { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { connect } from "@/lib/dbConfig";
import { LoginSchema } from "./models/login";

export default {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        await connect();
        // const { email, password } = credentials as {
        //   email: string;
        //   password: string;
        // };

        // console.log(email, password);

        // try {
        //   const user = await User.findOne({ email });
        //   if (!user || !user.password) {
        //     return null;
        //   }
        //   const passwordMatch = await bcrypt.compare(password, user.password);
        //   if (!passwordMatch) {
        //     return null;
        //   }
        //   return user;
        // } catch (error) {
        //   console.log("Error:", error);
        // }
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await User.findOne({
            email: email,
          });
          if (!user || !user.password) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          }
          if (passwordMatch) {
            return user;
          }
        }
      },
    }),
    google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  // callbacks: {
  //   async signIn({ user, account }: { user: any; account: any }) {
  //     if (account.provider === "google") {
  //       try {
  //         const { name, email } = user;
  //         await connect();
  //         const ifUserExist = await User.findOne({ email });
  //         if (ifUserExist) {
  //           return user;
  //         }
  //         const newUser = new User({
  //           name: name,
  //           email: email,
  //         });
  //         const res = await newUser.save();

  //         if (res.status === 200 || res.status === 201) {
  //           return user;
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     return user;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.email = user.email;
  //       token.name = user.name;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }: { session: any; token: any }) {
  //     if (session.user) {
  //       session.user.email = token.email;
  //       session.user.name = token.name;
  //     }
  //     console.log(session);
  //     return session;
  //   },
  // },
} satisfies NextAuthConfig;
