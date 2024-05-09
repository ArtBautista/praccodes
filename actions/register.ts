"use server";

import * as z from "zod";
import User from "@/models/user";

import bcrypt from "bcryptjs";
import { connect } from "@/lib/dbConfig";

export const registerAction = async (formData: any) => {
  await connect();
  // const validatedFields = RegisterSchema.safeParse(values);

  // if (!validatedFields.success) {
  //   return { error: "Invalid fields!" };
  // }
  const { email, password, name } = formData;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // await newUser.create();

  // return { success: "User created!" };

  await User.create(newUser);
  console.log(formData);
};
