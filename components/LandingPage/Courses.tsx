import React from "react";
import Image from "next/image";
import { TOP_COURSES_LIST } from "@/constants";
const Courses = () => {
  return (
    <div className="flex flex-col bg-odsGray 2xl:max-container  py-10 lg:mb-10 lg:py-20 xl:mb-20 text-black">
      <p className="text-4xl flex justify-center ">Top Courses</p>
      <main className="container mx-auto py-36 px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {TOP_COURSES_LIST.map((card) => (
            <div className="shadow-lg rounded-lg">
              <img className="rounded-t-lg" src={card.img} alt="" />
              <div className="p-5">
                <h3 className="text-3xl font-bold text-slate-700 mb-3">
                  {card.title}
                </h3>
                <p className="text-lg font-normal text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="flex justify-center">
        <button className="border-dotted border-4 border-odsBlue py-3 px-6">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
