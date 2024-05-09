import React from "react";
import Image from "next/image";
import { Button } from "../LandingPage/Button";
import { logout } from "@/actions/logout";
const Sidebar = () => {
  const onClick = () => {
    logout();
  };
  return (
    <div className="flex ">
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-content-center p-5">
          <label htmlFor="my-drawer" className="img img-primary drawer-button ">
            <Image
              src={"./hamburger.svg"}
              alt={"Hamburger dropdown"}
              width={30}
              height={30}
            />
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
              <p className="p-3">Student</p>
            </div>
            <hr className="p-3"></hr>
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
              <button
                className="flexCenter gap-3 rounded shadow hover:text-lBlue-300 transition btn_odsYellow"
                onClick={onClick}
              >
                Logout
              </button>
              {/* <Button
                type="submit"
                variant="btn_odsYellow"
                title="Sign Out"
                action="return signOut()"
              /> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
