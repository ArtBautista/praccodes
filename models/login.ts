import * as z from "zod";
import mongoose from "mongoose";
import { zodSchema } from "@zodyac/zod-mongoose";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is requried" }),
  password: z.string().min(1, { message: "Password is requried" }),
});

const schema = zodSchema(LoginSchema);
const User = mongoose.models?.users || mongoose.model("users", schema);
export default User;
