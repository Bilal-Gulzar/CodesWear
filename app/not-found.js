import React from "react";
import Link from "next/link";

export default function notfound() {
  return (
    <section className="dark:bg-[#1f2937] mt-0">
      <div className="lg:ml-[31%] xl:ml-[32%] 2xl:flex 2xl:flex-col 2xl:items-center text-center lg:text-start sm:py-[16%]  lg:pt-[30%] xl:pt-[20%] lg:pb-[20%] py-[23%] 2xl:ml-0 ">
        <div className="relative">
          <h1 className=" -mt-14 tracking-widest text-9xl font-sans sm:text-[12rem] font-extrabold dark:text-gray-100 text-black">
            404
          </h1>
          <div
            className="text-white bg-[#f32775] px-1 text-sm sm:text-lg rounded rotate-12 absolute sm:bottom-14
               lg:left-[14%]  sm:left-[41%] left-[37%] bottom-10  2xl:left-[32%] "
          >
            Page Not Found
          </div>
        </div>
        <button className="sm:mt-4 mt-14  relative border-[1px] dark:bg-[#4b5563] border-[#f32775] w-36 h-14  font-medium text-lg  text-[#f32775] ring-[#f32775] focus:ring  outline-none lg:ml-[17%]  xl:ml-[14%] 2xl:ml-0">
          <Link href={`/`}>
            <span
              className=" transition-all duration-200  translate-x-[3px] translate-y-[3px] tran inset-0 border-[#f32775] absolute border-r-[3px] border-b-[3px] hover:translate-x-0 hover:translate-y-0 
               hover:border-r-0 hover:border-b-0"
            ></span>
            Go Home
          </Link>
        </button>
      </div>
    </section>
  );
}
