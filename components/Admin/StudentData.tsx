import React from "react";
import { Button } from "../LandingPage/Button";
import BtnDelete from "./BtnDelete";
const getStudents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/datastudent", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Students Data");
    }
    return res.json();
  } catch (error) {
    console.log("error loading students", error);
  }
};
export default async function StudentData() {
  const { students } = await getStudents();
  return (
    <div className="overflow-x-auto z-99">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        {students.map((studs: any) => (
          <tbody>
            {/* row 1 */}
            <tr key={studs._id}>
              <th></th>
              <td>{studs.name}</td>
              <td>{studs.email}</td>
              <td>
                <BtnDelete id={studs._id} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
