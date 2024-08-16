"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdSync } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const[spiner,setSpiner] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
      // window.location.href = "/";
    }
    setTimeout(()=>{
       setSpiner(false);
    },500)
   
  }, []);

  const setState = (evt) => {
    if (evt.target.name === "email") {
      setEmail(evt.target.value);
    } else if (evt.target.name === "password") {
      setPassword(evt.target.value);
    }
  };

  const handleSub = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    let data = { email, password };
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let response = await res.json();
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      setPassword("");
      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success("You are successfully logged in");
        setTimeout(() => {
          router.push("http://localhost:3000", { redirect: true });
        }, 1000);
      } else {
        toast.error(response.error);
      }
    }, 1000);
  };
  return (
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
      <div className="lg:pt-[21.3%]  xl:pt-[12%] pb-14 dark:bg-[#1f2937]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto w-auto "
              src="/codes.jpg"
              alt="codeswear.com"
              width={100}
              height={30}
            />
            <h2 className="mt-4 text-center dark:text-gray-100 text-3xl font-sans font-extrabold leading-9 tracking-tight text-gray-900">
              Sign in to Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSub} className="space-y-6" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 dark:text-gray-100 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={setState}
                    value={email}
                    className="block w-full rounded-t-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-2 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block dark:text-gray-100 text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      href="/forgot"
                      className="font-semibold text-pink-500 hover:text-pink-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={setState}
                    value={password}
                    className="block w-full rounded-t-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-2 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100 dark:focus:ring-1"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center relative rounded-md bg-pink-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  {!isLoading && (
                    <span className="absolute left-2 top-2">
                      <FaLock className="size-4 text-pink-400" />{" "}
                    </span>
                  )}{" "}
                  {isLoading && (
                    <span className="absolute left-2 top-2">
                      <IoMdSync className="size-4 text-white animate-spin" />{" "}
                    </span>
                  )}
                  Log in
                </button>
              </div>
              <div className="text-sm  -mt-2 ">
                <Link href="/sign-up" className="font-semibold ">
                  <p className="text-gray-400 mr-1 text-[13px] text-center ">
                    or{" "}
                    <span className="underline  text-pink-500 hover:text-pink-500 ">
                      {" "}
                      Sign Up{" "}
                    </span>
                  </p>
                </Link>
              </div>
            </form>
          </div>
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
}
    </>
  );
}
