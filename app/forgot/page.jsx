"use client"
require("dotenv").config();
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { IoMdSync } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { useSearchParams,useRouter } from "next/navigation";
import { set } from 'mongoose';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";



export default function Forgot() {
  
const router = useRouter();
const  param = useSearchParams()
const [isLoading, setIsLoading] = useState(false);
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [cpass, setCpass] = useState('');
const [isTrue, setIsTrue] = useState(false)
const [valid, setValid] = useState(false)
const [done, setDone] = useState(false)
const [resetPass, setResetPass] = useState(false)
const [spiner, setSpiner] = useState(true);


  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
     setTimeout(() => {
       setSpiner(false)
     }, 500);
  }, []);

let handleChange = (evt)=>{
  if (evt.target.name === "email") {
    setEmail(evt.target.value);
  } else if (evt.target.name === "pass") {
    setPass(evt.target.value);
  } else if (evt.target.name === "cpass") {
    setCpass(evt.target.value);

  }
}

const sendResetEmail= async ()=>{
  setIsLoading(true)
  const data = {email}
 let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sendResetEmail`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(data),
 });
    
let response = await res.json();
setTimeout(() => {
  setIsLoading(false)
  if (response.success) {
    setDone(true);
    setTimeout(() => {
      setEmail("");
      setDone(false);
    }, 4000);
  } else {
    setValid(true);
    setTimeout(() => {
      setValid(false);
      setEmail("");
    }, 3000);
  }
}, 1500);
}

const ResetPass = async () => {
  if ((pass.length < 8) || (cpass.length < 8) )
    return (
      toast.error("Your Password must contain at least 8 characters ")
    );
  if( cpass === pass ){
    setIsLoading(true)
     const data = {token:param.get('token'),pass,cpass}  
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resetPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let response = await res.json();
  setTimeout(() => {
    setIsLoading(false)
    if(response.success){
     setResetPass(true) 
 setTimeout(() => {
  setResetPass(false)
  setCpass('')
  setPass('')
  router.push('/login')
 }, 3000);
   }
  else{
   toast.error(response.error)
   setCpass('')
   setPass('')
    }
  }, 1500);
}else{
  setIsTrue(true)
  setTimeout(()=>{
    setCpass('')
    setPass('')
    setIsTrue(false)
  },3000)

}
};

  return (
    <Suspense>

      <>
    {spiner?
      <div className="dark:bg-[#1f2937] mt-0 lg:mt-[14%] xl:mt-[2%] pb-[40%]">
        <div className=" sm:block hidden sm:ml-[35%] md:ml-[39%]  pt-36 lg:pt-32  xl:pt-40">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <h3 className="text-center sm:hidden block pt-28">
          <div className="lds-ellipsis ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </h3>
        <h3 className="text-6xl font-sans relative bottom-28 mb-60 sm:text-start text-center sm:ml-[35%] md:ml-[39%] font-medium text-pink-600">
          Loading...
        </h3>
      </div>
      :
    <div className="lg:pt-[21.3%]  xl:pt-[12%] pb-14  dark:bg-[#1f2937]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto w-auto "
            src="/codes.jpg"
            alt="codeswear.com"
            width={100}
            height={30}
          />
          <h2 className="mt-4 text-center  dark:text-gray-100 text-3xl font-extrabold leading-9 tracking-tight font-sans text-gray-900">
            Forgot Password
          </h2>
        </div>
        <div className="text-sm mt-1 ">
          <Link href="/login" className=" font-semibold ">
            <p className="text-gray-400 mr-1 text-[13px] text-center ml-8 ">
              or{" "}
              <span className="text-pink-500 hover:text-pink-500 ">Login</span>
            </p>
          </Link>
        </div>
        {!param.get("token") && (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <form className="space-y-[0px]" action="#" method="POST"> */}
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={handleChange}
                  className="block w-full rounded-t-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100 dark:focus:ring-1"
                />
              </div>
            </div>

            <div>
              <button
                onClick={sendResetEmail}
                disabled={email.length < 1}
                type="submit"
                className="flex relative w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 mt-7 mb-20"
              >
                {!isLoading && (
                  <span className="absolute left-2 top-2">
                    <FaLock className="size-4 text-pink-400" />
                  </span>
                )}
                {isLoading && (
                  <span className="absolute left-2 top-2">
                    <IoMdSync className="size-4 text-white animate-spin" />
                  </span>
                )}
                Continue
              </button>
              <div
                className={` lg:hidden  sm:w-[300px]  sm:ml-10 -mt-5 bg-pink-100 sm:h-12  rounded-xl ${
                  valid ? `  transition duration-300 ` : "hidden"
                }  font-sans font-bold `}
              >
                <p className=" py-3 text-center text-sm text-pink-600">
                  No account associated with this email.
                </p>
              </div>
            </div>

            <div
              className={` hidden w-[300px] -mt-5 bg-pink-100 h-12  rounded-xl ${
                valid
                  ? `absolute top-96 xl:top-40 left-16 transition duration-300 lg:block `
                  : "hidden"
              }  font-sans font-bold `}
            >
              <p className=" py-3 text-center text-sm text-pink-600">
                No account associated with this email.
              </p>
            </div>
            {done && (
              <div className=" transition-all -mt-5 bg-green-100 rounded  font-sans font-bold sm:mx-auto sm:w-full sm:max-w-sm  ">
                <p className=" py-3 px-1 text-center text-sm text-green-600">
                  we have sent you an email with a link to reset your
                  password,Please check your email.
                </p>
              </div>
            )}
          </div>
        )}

        {param.get("token") && (
          <div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <input
                id="pass"
                name="pass"
                type="password"
                required
                placeholder="password"
                autoComplete="password"
                value={pass}
                onChange={handleChange}
                className="block w-full rounded-t-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none px-3 dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100 dark:focus:ring-1  "
              />
            </div>
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
              <input
                id="cpass"
                name="cpass"
                type="password"
                required
                placeholder="confirm password"
                autoComplete="confirm-password"
                value={cpass}
                onChange={handleChange}
                className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none px-3  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100 dark:focus:ring-1 "
              />
            </div>
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                onClick={ResetPass}
                type="submit"
                className="flex w-full relative justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 mt-7 sm:mb-20"
              >
                {!isLoading && (
                  <span className="absolute left-2 top-2">
                    <FaLock className="size-4 text-pink-400" />
                  </span>
                )}
                {isLoading && (
                  <span className="absolute left-2 top-2">
                    <IoMdSync className="size-4 text-white animate-spin" />
                  </span>
                )}
                Continue
              </button>
            </div>
            {isTrue && (
              <div className=" transition-all mt-10 sm:-mt-5 bg-pink-100   sm:h-12  rounded  font-sans font-bold sm:mx-auto sm:w-full sm:max-w-sm ">
                <p className=" py-3 px-1 text-center text-sm text-pink-600">
                  password and current password doesn't match
                </p>
              </div>
            )}
            {resetPass && (
              <div className=" px-4 border transition-all mt-10 sm:-mt-9 bg-green-100 sm:h-16  rounded  font-sans font-bold sm:mx-auto sm:w-full sm:max-w-sm  ">
                <p className=" break-words px-4 py-3 text-center text-sm text-green-700 ">
                  Your password has been reset successfully. You can now log in
                  with your new password.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
}</>
    </Suspense>

  );
}
