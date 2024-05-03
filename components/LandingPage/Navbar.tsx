"use client";
import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import { NAV_CATLINKS } from "@/constants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [header, setHeader] = useState<boolean>(false);

  const scrollHeader = (): void => {
    if (window.scrollY > 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <nav
      className={
        header
          ? "fixed w-[100%] pb-3 border-odsBlue border-b-2 pt-2 bg-lWhite"
          : " bg-odsGray"
      }
    >
      <div className="max-w-7xl mx-auto pt-3">
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <div className="flex reverse ">
              <Image src={"./globle.svg"} alt={"Logo"} width={24} height={24} />
              <div className="">
                <a className="btn btn-ghost text-xl">Odyssey</a>
              </div>
            </div>
            <div className=" items-center md:flex hidden ">
              <div className="">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>Categories</summary>
                      <ul className="">
                        {NAV_CATLINKS.map((link) => (
                          <Link href={link.href} key={link.key}>
                            {link.label}
                          </Link>
                        ))}
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>

              <div className=" ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              {/* <div className="content-center pl-3 ">
              <Link href={"/"}>About Us</Link>
            </div> */}
            </div>
          </div>
          <div className="flex">
            <div className="pr-5 md:flex hidden ">
              <Link href="/auth/login">
                <Button type="button" title="Login" variant="btn_odsYellow" />
              </Link>
            </div>

            <div className="md:hidden flex items-center pl-2 pr-10">
              <Image
                src={"./hamburger.svg"}
                alt={"Hamburger dropdown"}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
