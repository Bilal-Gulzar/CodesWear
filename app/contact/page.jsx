"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Contact() {

  const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 500);
   }, []);

  return (
    <>
      {isLoading ? (
        <div className="dark:bg-[#1f2937] mt-0 lg:mt-[14%] xl:mt-[2%] pb-[40%]">
          <div className=" sm:block hidden sm:ml-[35%] md:ml-[39%]  pt-36 lg:pt-32  xl:pt-40 2xl:ml-0 2xl:flex justify-center">
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
          <h3 className="text-6xl font-sans relative bottom-28 mb-60 sm:text-start text-center sm:ml-[35%] md:ml-[39%] font-medium text-pink-600 2xl:ml-0 2xl:flex justify-center">
            Loading...
          </h3>
        </div>
      ) : (
        <div className="lg:mt-[15%] -mt-9  xl:mt-14  pb-52 xl:pb-96 dark:bg-[#1f2937]">
          <div className="bg-gray-100 shadow-lg mx-0.5 xl:w-[1100px] xl:mx-auto dark:bg-[#374151]">
            <div className=" pt-24">
              <h1 className="font-sans font-bold text-center text-3xl dark:text-gray-100">
                Lets talk about everything!
              </h1>
            </div>
            <div className=" mt-2">
              <img
                src="/codes.jpg"
                width={190}
                height={190}
                alt="codeswear.com"
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="font-sans text-center font-semibold text-2xl dark:text-gray-100">
                Feel free to ask us anything!{" "}
              </h2>
            </div>
            <div className="mt-5">
              <p className="font-sans text-center break-words px-10 font-sm dark:text-gray-100">
                If you have any questions regarding your order, feel free to
                send email, call or Whatsapp us on our support number
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-4 mt-11 pb-28 ">
              <div className="break-words">
                <h3 className="font-sans px-4 font-bold text-center dark:text-gray-100">
                  Corporate Address
                </h3>
                <p className="font-sans text-md px-4  text-center dark:text-gray-100">
                  CWH Solutions
                </p>
                <p className="font-sans text-md px-4  text-center dark:text-gray-100">
                  {" "}
                  225, Korangi No.5/1/2 Near DHA
                </p>
                <p className="font-sans text-md px-4  text-center dark:text-gray-100">
                  Sindh, karachi
                </p>
              </div>
              <div className="break-words">
                <h3 className="font-sans font-bold px-4  text-center dark:text-gray-100">
                  Customer Support
                </h3>
                <p className="font-sans text-md px-3  text-center dark:text-gray-100">
                  Call/Whatsapp:{" "}
                  <Link href="https://api.whatsapp.com/send/?phone=7078073838&text=Hi%2C+I+need+to+enquire+about+products+on+CodesWear&type=phone_number&app_absent=0">
                    <span className="underline text-blue-600 cursor-pointer dark:text-[#59a3fa]">
                      +92 349 025 0746{" "}
                    </span>
                  </Link>
                </p>
                <p className="font-sans text-md px-3   text-center dark:text-gray-100">
                  Email: Codeswearr@gmail.com
                </p>
                <p className="font-sans text-md px-3  text-center dark:text-gray-100">
                  Morning: 10AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
