"use client";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = () => {
  return (
    <div className="flex z-10 relative">
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-content-center p-5">
          <label htmlFor="my-drawer" className="img img-primary drawer-button ">
            <RxHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="p-3 flex justify-between">
              <h1 className=" text-odsBlue font-extrabold text-xl">Odyssey</h1>
              <p className="p-3">Admin</p>
            </div>
            <hr className="p-3"></hr>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <Link href="/admin/datastudent">Students</Link>
            </li>
            <li>
              <button
                className="flexCenter gap-3 rounded shadow hover:text-lBlue-300 transition btn_odsYellow"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
