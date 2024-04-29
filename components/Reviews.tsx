import { USER_REVIEWS } from "@/constants";
import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-col bg-odsPurple 2xl:max-container  py-10 lg:mb-10 lg:py-20 xl:mb-20 text-odsGray">
      <p className="text-4xl flex justify-center pb-2">Why This Site</p>
      <main className="container mx-auto py-36 px-8 ">
        <div className="grid lg:grid-cols-3 gap-6  bg-odsPurple">
          {USER_REVIEWS.map((card) => (
            <div>
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reviews;
