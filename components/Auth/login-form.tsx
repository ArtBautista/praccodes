"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "@/components/Student/StudentForm/form-error";
import { FormSuccess } from "@/components/Student/StudentForm/form-success";
import Image from "next/image";
import { loginAction } from "@/actions/login";
import { startTransition, useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/models/login";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider !"
      : "";
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    console.log("LOGIN[CLIENT]: ", values);
    startTransition(() => {
      loginAction(values).then((data) => {
        setError(data?.error);
        // setSuccess(data?.success);
      });
    });
    // const res = await loginAction(values);
    // setError(res?.error);
    // console.log("Response : ", res);
  };
  return (
    <div className="card flex flex-col bg-odsGray m-6 v-y-8  shadow-2xl md:flex-row md:space-y-0">
      <div className="card-body ">
        <h1 className="flex justify-center text-2xl">Log in to Odyssey</h1>
        <div className="flex flex-col justify-center p-4 md:p-14">
          <form className="grid" onSubmit={handleSubmit(onSubmit)}>
            <label className="grid grid-rows-2 m-2 form-control w-full max-w-xs">
              Email
              <input
                disabled={isPending}
                type={"email"}
                className="grow"
                {...register("email")}
              />
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <label className="grid grid-rows-3  m-2 form-control w-full max-w-xs">
              Password
              <input
                disabled={isPending}
                type={"password"}
                className="grow"
                {...register("password")}
              />
              <div className="label underline text-odsBlue">
                <span className="label-text">I forgot my password</span>
              </div>
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <div className="grid grid-rows-1 form-control w-full max-w-xs">
              <button
                type="submit"
                className="flexCenter gap-3 rounded shadow hover:text-lBlue-300 transition btn_odsYellow "
                disabled={isPending}
              >
                Login
              </button>
            </div>
          </form>
          <br></br>

          <button
            className="flex justify-center h-full w-full border border-gray-300 text-md p-2 rounded-lg mb-6  hover:bg-black hover:text-white"
            onClick={() => {
              signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
            }}
          >
            <FcGoogle className="h-7 w-7 mr-4" />
            Log In with Google
          </button>

          <span className="ul text-odsBlue">
            Not yet a traveler?
            <Link href="/auth/register" className="underline text-red-400 m-1">
              Register
            </Link>
          </span>
        </div>
      </div>

      <div className="hidden relative card bg-odsPurple  md:block h-dvh w-[400px]">
        <div className="card-body">
          <Image
            className="rounded-r-2xl "
            src="/apollo11.png"
            fill={true}
            objectFit="cover"
            alt=""
          />

          <div className="absolute hidden  right-6 p-6 rounded drop-shadow-lg  md:block">
            <span className="text-odsGray text-xl">
              To the Infinity
              <br />
              and Beyond
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
