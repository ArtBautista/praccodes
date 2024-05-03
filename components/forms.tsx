// import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
// import * as z from "zod";
// import { LoginSchema } from "@/schemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { Button } from "./LandingPage/Button";
// import { FormError } from "./form-error";
// import { FormSuccess } from "./form-success";

// type FormsProps = {
//   type: "Login" | "Register";
//   checkAcc: boolean;
// };

// export const Forms = ({ type, checkAcc }: FormsProps) => {
//   const checkAccount = () => (
//     <Link
//       href={checkAcc ? "/auth/register" : "/auth/login"}
//       className="flex justify-center"
//     >
//       {checkAcc ? "Don't Have an account yet ?" : "Already have an account ?"}
//     </Link>
//   );

//   return (
//     <div className=" card max-w-xl rounded overflow-hidden shadow-xl ">
//       <div className="card-body">
//         <h1 className="card-title">{type}</h1>

//         <form className="grid" onSubmit={handleSubmit(onSubmit)}>
//           {type === "Register" && (
//             <label className="form-control w-full max-w-xs mb-5">
//               <input type="text" className="grow" placeholder="Username" />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">
//                   {errors.email.message}
//                 </span>
//               )}
//             </label>
//           )}

//           <label className="form-control w-full max-w-xs">
//             <input
//               type="email"
//               className="grow"
//               placeholder="Email"
//               {...register("email", { required: true })}
//             />
//           </label>
//           <div className="label">
//             {errors.email && (
//               <span className="text-red-500 text-sm">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>

//           <label className="form-control w-full max-w-xs">
//             <input
//               type="password"
//               className="grow"
//               placeholder="Password"
//               {...register("password", { required: true })}
//             />
//             <div className="label">
//               {errors.password && (
//                 <span className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>
//           </label>
//           <FormError message="" />
//           <FormSuccess message="" />
//           <Button type="submit" variant="btn_odsYellow" title={type} />
//         </form>

//         <div className="flex justify-center w-full p-5">
//           <button className=" lg">
//             <FcGoogle className="h-7 w-7" />
//           </button>
//         </div>
//         {checkAccount()}
//       </div>
//     </div>
//   );
// };

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <script src="https://cdn.tailwindcss.com"></script>
//     <title>Document</title>
//   </head>
//   <body>
//     <div class="flex items-center justify-center min-h-screen bg-gray-100">
//       <div
//         class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
//       >
//         <!-- left side -->
//         <div class="flex flex-col justify-center p-8 md:p-14">
//           <span class="mb-3 text-4xl font-bold">Welcome back</span>
//           <span class="font-light text-gray-400 mb-8">
//             Welcom back! Please enter your details
//           </span>
//           <div class="py-4">
//             <span class="mb-2 text-md">Email</span>
//             <input
//               type="text"
//               class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
//               name="email"
//               id="email"
//             />
//           </div>
//           <div class="py-4">
//             <span class="mb-2 text-md">Password</span>
//             <input
//               type="password"
//               name="pass"
//               id="pass"
//               class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
//             />
//           </div>
//           <div class="flex justify-between w-full py-4">
//             <div class="mr-24">
//               <input type="checkbox" name="ch" id="ch" class="mr-2" />
//               <span class="text-md">Remember for 30 days</span>
//             </div>
//             <span class="font-bold text-md">Forgot password</span>
//           </div>
//           <button
//             class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
//           >
//             Sign in
//           </button>
//           <button
//             class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
//           >
//             <img src="google.svg" alt="img" class="w-6 h-6 inline mr-2" />
//             Sign in with Google
//           </button>
//           <div class="text-center text-gray-400">
//             Dont'have an account?
//             <span class="font-bold text-black">Sign up for free</span>
//           </div>
//         </div>
//         <!-- {/* right side */} -->
//         <div class="relative">
//           <img
//             src="image.jpg"
//             alt="img"
//             class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
//           />
//           <!-- text on image  -->
//           <div
//             class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
//           >
//             <span class="text-white text-xl"
//               >We've been uesing Untitle to kick"<br />start every new project
//               and can't <br />imagine working without it."
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </body>
// </html>
