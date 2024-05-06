"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { Button } from "../LandingPage/Button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    return setAdmin((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!admin.email || !admin.password) {
        setError("please fill all the fields");
        return;
      }

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(admin.email)) {
        setError("Invalid email id");
        return;
      }
      const res = await signIn("credentials", {
        email: admin.email,
        password: admin.password,
        redirect: false,
      });
      if (res?.error) {
        console.log(res);
        setError("Error");
      }
      setError("");
      router.push("/admin");
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);
      setAdmin({
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="card flex flex-col bg-odsGray m-6 v-y-8  shadow-2xl md:flex-row md:space-y-0">
      <div className="card-body ">
        <h1 className="flex justify-center text-2xl">
          Log in to Odyssey{"[ADMIN]"}
        </h1>
        <div className="flex flex-col justify-center p-4 md:p-14">
          <form className="grid" onSubmit={handleSubmit}>
            <label className="grid grid-rows-2 m-2 form-control w-full max-w-xs">
              Email
              <input
                type={"email"}
                className="grow"
                name="email"
                value={admin.email}
                onChange={handleInputChange}
              />
            </label>

            <label className="grid grid-rows-3  m-2 form-control w-full max-w-xs">
              Password
              <input
                type={"password"}
                className="grow"
                name="password"
                value={admin.password}
                onChange={handleInputChange}
              />
              <div className="label underline text-odsBlue">
                <span className="label-text">I forgot my password</span>
              </div>
              {/* <div className="label">
            {error && (
              <span className="text-red-500 text-sm">Missing Password</span>
            )}
          </div> */}
            </label>
            <FormError message="" />
            <FormSuccess message="" />
            <div className="grid grid-rows-1 form-control w-full max-w-xs">
              <Button type="submit" variant="btn_odsYellow" title="Login" />
            </div>
          </form>
          <br></br>

          {/* <button
            className="flex justify-center h-full w-full border border-gray-300 text-md p-2 rounded-lg mb-6  hover:bg-black hover:text-white"
            onClick={() => signIn("google")}
          >
            <FcGoogle className="h-7 w-7 mr-4" />
            Log In with Google
          </button>

          <span className="ul text-odsBlue">
            Not yet a traveler?
            <Link href="/auth/register" className="underline text-red-400 m-1">
              Register
            </Link>
          </span> */}
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
