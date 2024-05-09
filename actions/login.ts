"use server";

import { connect } from "@/lib/dbConfig";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import * as z from "zod";
import { LoginSchema } from "@/models/login";
import { error } from "console";
import { useSearchParams } from "next/navigation";
export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  await connect();

  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = validatedFields.data;

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirectedTo: DEFAULT_LOGIN_REDIRECT,
    });
    console.log(res);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Someting went wrong" };
      }
    }
    throw error;
  }
};
