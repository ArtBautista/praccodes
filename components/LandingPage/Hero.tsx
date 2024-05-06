import React from "react";
import { Button } from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex justify-center bg-odsGray"
      // style={{
      //   backgroundImage: "url('./blizzard.png')",
      //   backgroundRepeat: "repeat",
      //   backgroundSize: "100%",
      // }}
    >
      <section>
        <div className="flex-column justify-center ">
          <h1 className="flex justify-center items-center text-7xl pt-20">
            Odyssey {"[ADMIN]"}
          </h1>
          <p className="flex justify-center items-center text-2xl pt-5 ">
            Learning is a journey
          </p>
        </div>
        <p className="m-12 mb-15 pb-10 flex h-scren justify-center items-center text-center text-3xl">
          Get acccess to over 2,000 learning courses.
        </p>
        {/* <div className="flex justify-center pb-20">
          <Link href="/auth/register">
            <Button type="button" title="Start Now!" variant="btn_odsYellow" />
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
