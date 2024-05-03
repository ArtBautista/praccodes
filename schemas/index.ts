import * as z from "zod";
import mongoose from "mongoose";

const LoginSchema = z.object({
  email: z.string().email({ message: "Email is requried" }),
  password: z.string().min(10, { message: "Password is requried" }),
});
