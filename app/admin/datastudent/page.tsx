import React from "react";
import StudentData from "@/components/Admin/StudentData";
// export const getStaticProps = async () => {
//   const res = await fetch("");
//   const data = await res.json();
//   return {
//     props: { students: data },
//   };
// };
export default function DataStudent() {
  return (
    <div>
      <StudentData />
    </div>
  );
}
