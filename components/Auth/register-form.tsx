"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { useState } from "react";
import { Button } from "../LandingPage/Button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState({
    name: "",
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
    console.log(admin);
    try {
      if (!admin.name || !admin.email || !admin.password) {
        setError("please fill all the fields");
        return;
      }

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(admin.email)) {
        setError("Invalid email id");
        return;
      }

      const res = await axios.post("/api/register", admin);
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        console.log("user added Successfully");
        setError("");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setError("");
    } finally {
      setLoading(false);

      setAdmin({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="card flex flex-col bg-odsGray v-y-8  shadow-2xl md:flex-row md:space-y-0">
      <div className="card-body ">
        <h1 className="flex justify-center text-2xl">Get started for free</h1>
        <div className="flex flex-col justify-center p-4 md:p-14">
          <form className="grid" onSubmit={handleSubmit}>
            <label className="grid grid-rows-2  form-control w-full max-w-xs">
              Username
              <input
                type={"text"}
                className="grow"
                placeholder="Username"
                name="name"
                value={admin.name}
                onChange={handleInputChange}
              />
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </label>

            <label className="grid grid-rows-2 form-control w-full max-w-xs">
              Email
              <input
                type={"email"}
                className="grow"
                name="email"
                value={admin.email}
                onChange={handleInputChange}
              />
              <div className="label">
                {error && (
                  <span className="text-red-500 text-sm">Missing Email</span>
                )}
              </div>
            </label>

            <label className="grid grid-rows-3 form-control w-full max-w-xs">
              Password
              <input
                type={"password"}
                className="grow"
                name="password"
                value={admin.password}
                onChange={handleInputChange}
              />
              <div className="label">
                {error && (
                  <span className="text-red-500 text-sm">Missing Password</span>
                )}
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
              <Button
                type="submit"
                variant="btn_odsYellow"
                title={loading ? "Processing..." : "Register"}
              />
            </div>
          </form>
          <br></br>

          <button
            className="flex justify-center h-full w-full border border-gray-300 text-md p-2 rounded-lg mb-6  hover:bg-black hover:text-white"
            onClick={() => signIn("google")}
          >
            <FcGoogle className="h-7 w-7 mr-4" />
            Register with Google
          </button>

          <span className="ul text-odsBlue">
            Not yet a traveler?
            <Link href="/auth/login" className="underline text-red-400 m-1">
              Log In
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

export default RegisterForm;
