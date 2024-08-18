"use client";
require("dotenv").config();
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdSync } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [spiner, setSpiner] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
    setTimeout(() => {
      setSpiner(false);
    }, 500);
  }, []);

  const setState = (evt) => {
    if (evt.target.name === "name") {
      setName(evt.target.value);
    } else if (evt.target.name === "email") {
      setEmail(evt.target.value);
    } else if (evt.target.name === "password") {
      setPassword(evt.target.value);
    } else if (evt.target.name === "phone") {
      setPhone(evt.target.value);
    } else if (evt.target.name === "pin") {
      setPin(evt.target.value);
    } else if (evt.target.name === "address") {
      setAddress(evt.target.value);
    }
  };

  const handleSub = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    if (phone.length != 11)
      return toast.error("Please Enter correct number"), setIsLoading(false);
    if (!(pin.length == 5))
      return (
        toast.error("Your Pincode must contain 5 numbers "), setIsLoading(false)
      );
    if (password.length < 8)
      return (
        toast.error("Your Password must contain at least 8 characters "),
        setIsLoading(false)
      );
    let data = { name, email, phone, pin, address, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let response = await res.json();
    setTimeout(() => {
      setIsLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");
      setPin("");
      // console.log(response.token)
      if (response.success) {
        localStorage.setItem("token", response.token);
        toast.success("Your account has been created successfully");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        toast.error(response.error);
      }
    }, 1000);
  };

  return (
    <>
      {spiner ? (
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
      ) : (
        <div className="lg:pt-[21.3%]  xl:pt-[12%] pb-14 dark:bg-[#1f2937]">
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
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto w-auto "
                src="/codes.jpg"
                alt="codeswear.com"
                width={100}
                height={30}
              />
              <h2 className="mt-2 text-center dark:text-gray-100 text-3xl font-sans  font-extrabold leading-9 tracking-tight text-gray-900">
                Sign up Account
              </h2>
            </div>

            <div className="text-sm  ">
              <Link href="/login" className="font-semibold mt-2 ">
                <p className="text-gray-400 text-center ml-20 mr-1 text-[13px]">
                  or{" "}
                  <span className=" text-pink-500 hover:text-pink-500 ">
                    Login
                  </span>
                </p>
              </Link>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSub}
                className="space-y-[0px]"
                method="POST"
              >
                <div>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={setState}
                      className="block w-full rounded-t border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={setState}
                    className="block w-full border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="number"
                    name="phone"
                    type="number"
                    autoComplete=""
                    required
                    placeholder="Enter your 11 digit number"
                    value={phone}
                    onChange={setState}
                    className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="pin"
                    name="pin"
                    type="number"
                    autoComplete="pin"
                    required
                    placeholder="Enter 5 digit postal/zip code"
                    value={pin}
                    onChange={setState}
                    className="block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete=""
                    required
                    placeholder="Write your address"
                    value={address}
                    onChange={setState}
                    className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={setState}
                    className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-3 outline-none  dark:border-[#9ca3af] dark:bg-[#121212] dark:placeholder:text-[#9ca3af] dark:text-gray-100
                  dark:focus:ring-1"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full relative justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 mt-8"
                  >
                    {!isLoading && (
                      <span className="absolute left-2 top-2">
                        <FaLock className="size-4 text-pink-400" />{" "}
                      </span>
                    )}
                    {isLoading && (
                      <span className="absolute left-2 top-2">
                        <IoMdSync className="size-4 text-white animate-spin" />{" "}
                      </span>
                    )}
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
