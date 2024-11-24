"use client"
import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Order() {
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
 setTimeout(() => {
   setIsLoading(false);
 }, 500);
},[])

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
        <div className="lg:mt-44  xl:mt-14 dark:bg-[#1f2937]">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-12 sm:py-16 lg:py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap pb-5 lg:pb-20">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-sm font-semibold text-gray-500 font-sans dark:text-gray-400 tracking-widest">
                    CODESWEAR.COM
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-bold font-sans mb-4 dark:text-gray-100 ">
                    Order Id: #88997
                  </h1>
                  <h2 className="text-sm font-semibold text-gray-500 font-sans dark:text-gray-100 tracking-widest lg:-mb-1 mb-4">
                    Your Order has been Placed Succesfully.
                  </h2>
                  <div className="mt-5 lg:block hidden mb-5">
                    <h2 className="font-bold font-sans text-gray-600 dark:text-gray-400">
                      Product Description:
                    </h2>
                    <p className="leading-relaxed pt-[5px] font-sans  dark:text-gray-100 text-[15px] text-black">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam inxigo juiceramps cornhole raw denim forage brooklyn.
                      Everyday carry +1 seitan poutine tumeric. Gastropub blue
                      bottle austin listicle pour-over, neutra jean.
                    </p>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="font-sans  font-medium text-gray-500  dark:text-gray-100 text-md">
                      Color
                    </span>
                    <span className="ml-auto font-sans  text-gray-900 dark:text-gray-100">
                      Black
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="font-sans text-gray-500 font-medium  dark:text-gray-100 text-md">
                      Size
                    </span>
                    <span className="ml-auto font-sans  text-gray-900 dark:text-gray-100">
                      Medium
                    </span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="font-sans text-gray-500 font-medium  dark:text-gray-100 text-md">
                      Quantity
                    </span>{" "}
                    <span className="ml-auto font-sans  text-gray-900 dark:text-gray-100">
                      1
                    </span>
                  </div>
                  <div className="">
                    <span className="title-font font-bold font-sans  text-2xl text-gray-900 dark:text-gray-100">
                      SubTotal: $58.00
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      toast.warning("This Button is not Servicable Yet!");
                    }}
                    className="ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded relative top-4"
                  >
                    Track
                  </button>
                </div>
                <Image
                  alt="ecommerce"
                  className="lg:w-1/2 lg:h-auto object-fill mx-auto w-[70%] sm:[65%] lg:mt-0 mt-4  h-full block rounded"
                  src="/Hoodies.jpg"
                  width={100}
                  height={40}
                  priority
                />
              </div>
              <div className="-mt-4 pb-10  lg:hidden ">
                <h2 className="font-bold font-sans text-gray-600 dark:text-gray-400">
                  {" "}
                  Product Description:
                </h2>
                <p className="leading-relaxed pt-[5px] font-sans pb-20  dark:text-gray-100 text-[15px] text-black">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean.
                </p>
              </div>
            </div>
          </section>
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
      )}
    </>
  );
  }
    
