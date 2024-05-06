"use client";
import React from "react";

interface DeleteBtnProps {
  id: string;
}
export default function BtnDelete({ id }: DeleteBtnProps) {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this?");
    if (confirmed) {
      await fetch(`http://localhost:3000/api/datastudent?id=${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <button
      className="flexCenter gap-3 rounded shadow hover:text-lBlue-300 transition btn_odsYellow"
      onClick={removeTopic}
    >
      DELETE
    </button>
  );
}
