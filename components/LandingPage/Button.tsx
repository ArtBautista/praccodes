"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_odsBlue" | "btn_odsYellow";
};
export const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded shadow hover:text-lBlue-300 transition ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};
