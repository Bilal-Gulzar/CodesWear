"use client";
require("dotenv").config();
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "../contexts/contextApi";
import { get } from "mongoose";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function Search() {
  let params = useSearchParams()
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  let query = params.get('Query');
  let page = parseInt(params.get('pageno'), 10);
  page = !page || page < 1 ? 1 : page;
  const prePage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const back = page - 1;
  const front = page + 1;
  const currentPageno = page;

  // console.log(query,page)

  //  console.log(back)
  
  useEffect(() => {
    setIsLoading(true);
    const dataFetch = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/search?query=${query}&pageno=${page}`
      );
      const data = await res.json();
      setValue(query);
      setIsLoading(false);
      if (data.success) {
        setResults(data.results);
        setTotalPages(data.totalPages);
      } else {
        setResults([]);
        setTotalPages(0);
        // console.log(data.Message);
      }
    };

    dataFetch();
  }, [page, query]);

 const handleImage = (index) => {
   let remove = results.filter((v, i) => i !== index);
   setResults(remove);
 };

  return (
    <Suspense>
      <>
        {isLoading ? (
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
          <>
            {results.length > 0 ? (
              <div className="dark:bg-[#1f2937]">
                <div className=" pt-5  lg:pt-56  xl:pt-28 pb-5 ">
                  <h2 className="font-sans  text-2xl text-center sm:text-start xl:ml-[42%] sm:ml-[38%] lg:ml-[40%] dark:text-gray-100">
                    Search results for:{" "}
                    <span className="font-semibold text-pink-600">
                      "{value}"
                    </span>
                  </h2>
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-3 pb-14 py-24 mx-auto">
                      <div
                        className={`lg:flex lg:flex-wrap gap-10 sm:gap-7 grid md:grid-cols-3  sm:grid-cols-2 -m-4 mt-3 lg:ml-16 ${
                          results.length == 1 ? "sm:flex sm:flex-wrap" : ""
                        }`}
                      >
                        {results.map((v,index) => (
                          <div
                            key={v._id}
                            // className={`"md:w-64 p-4 md:p-8  lg:p-4 w-[70%] sm:w-auto  mx-auto sm:mx-3 md:mx-auto lg:mx-0 shadow-lg lg:mb-4 dark:shadow-2xl
                            //   `}
                            className={`md:w-64 p-4 md:p-8  lg:p-4 w-[74vw] sm:w-auto  mx-auto sm:mx-3 md:mx-auto lg:mx-0 shadow-lg lg:mb-4 dark:shadow-2xl ${
                              results.length == 1
                                ? " lg:ml-[32%] xl:ml-[37%] sm:ml-[30%] md:ml-[35%] "
                                : ""
                            }`}
                          >
                            {" "}
                            <Link
                              href={`product/${v.slug}`}
                              className="block relative h-72 overflow-hidden transition ease-in-out delay-150 sm:bg-pink-500 bg-white  hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 sm:dark:bg-[#374151] dark:hover:bg-[#374151] dark:bg-[#1f2937]"
                            >
                              <Image
                                alt={v.tittle}
                                className="object-fill mx-auto w-auto sm:w-full h-full block"
                                src={`${v.img}`}
                                width={140}
                                height={50}
                                priority
                                onError={() => {
                                handleImage(index);
                                }}
                              />
                            </Link>
                            <div className="dark:bg-[#374151] relative rounded-b-lg -top-4 -left-4 h-[41%] w-[114.6%]">
                              <div className="relative top-8 left-5">
                                <h3 className="text-gray-500 dark:text-gray-400  text-xs tracking-widest font-sans font-medium title-font mb-1">
                                  {v.category.toString().toUpperCase()}
                                </h3>
                                <h2 className="text-gray-900 title-font  dark:text-gray-100 font-sans text-lg font-medium">
                                  {v.tittle.length > 21 ? (
                                    <span>{v.tittle.substr(0, 21)}...</span>
                                  ) : (
                                    v.tittle
                                  )}
                                </h2>
                                <p className="mt-3 mb-7 dark:text-gray-100 ">
                                  ${v.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <div className="dark:bg-[#1f2937] pb-1">
                <div className="pt-5 lg:pt-56 xl:pt-28  mb-64">
                  <h2 className="font-sans  dark:text-gray-100 text-2xl break-words px-10 sm:px-0 text-center ">
                    Search results for:{" "}
                    <span className="font-semibold text-pink-600">
                      "{value}"
                    </span>
                  </h2>
                  <h2 className="font-sans dark:text-gray-100 font-bold text-lg mt-12 space-x-2 text-center">
                    <span className="tracking-wider"> No </span>
                    <span className="text-pink-600 tracking-widest">
                      Results{" "}
                    </span>
                    <span className="tracking-wider">
                      Found <span className="relative top-1">• • •</span>
                    </span>
                  </h2>
                  <div className="mt-8 max-w-[190px] mx-auto h-[260px]  ">
                    <Image
                      src="/404.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="404 "
                      priority
                      className="w-full h-full object-fill"
                    />
                  </div>
                </div>
              </div>
            )}
            <section className="dark:bg-[#1f2937] pb-3">
              <nav className="sm:w-[320px] h-10  w-[75vw] mx-auto dark:bg-gray-700 ">
                <ul className="grid grid-cols-8">
                  <li className="  border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] rounded-l-lg hover:bg-gray-100 ">
                    <Link href={`?Query=${query}&pageno=${1}`}>
                      <button className="w-full h-full flex justify-center items-center">
                        <RiArrowLeftDoubleFill className="size-6 dark:text-gray-100  text-gray-500" />
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] border-l-0 hover:bg-gray-100 ">
                    <Link href={`?Query=${query}&pageno=${prePage}`}>
                      <button
                        disabled={back === 0 ? true : false}
                        className="w-full h-full flex justify-center items-center disabled:cursor-not-allowed  "
                      >
                        <MdChevronLeft className="size-6  text-gray-500 dark:text-gray-100" />
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  relative dark:hover:bg-gray-800 text-md font-sans border-l-0  border-[1px] h-[40px] hover:bg-gray-100">
                    <Link href={`?Query=${query}&pageno=${back}`}>
                      <button
                        disabled={back === 0 ? true : false}
                        className=" absolute w-full h-full flex justify-center items-center   dark:text-gray-100 outline-none disabled:cursor-not-allowed "
                      >
                        {back}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  relative text-md  text-pink-500 font-semibold font-sans  border-l-0  dark:hover:bg-pink-500 border-[1px]  hover:bg-pink-300 hover:text-pink-700 bg-pink-200">
                    <Link href={`?Query=${query}&pageno=${currentPageno}`}>
                      <button
                        disabled={false}
                        className=" w-full h-full flex justify-center items-center absolute outline-none "
                      >
                        {currentPageno}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  relative dark:hover:bg-gray-800  text-md font-sans border-l-0  border-[1px]  hover:bg-gray-100">
                    <Link href={`?Query=${query}&pageno=${front}`}>
                      <button
                        disabled={front > totalPages ? true : false}
                        className="w-full h-full absolute flex justify-center items-center dark:text-gray-100 outline-none disabled:cursor-not-allowed  "
                      >
                        {front}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300 relative  dark:hover:bg-gray-800 text-md font-sans border-l-0  border-[1px]  hover:bg-gray-100">
                    <Link href={`?Query=${query}&pageno=${front + 1}`}>
                      <button
                        disabled={front + 1 > totalPages ? true : false}
                        className="w-full h-full  absolute flex justify-center items-center dark:text-gray-100  outline-none disabled:cursor-not-allowed  "
                      >
                        {front + 1}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] border-l-0 hover:bg-gray-100 ">
                    <Link href={`?Query=${query}&pageno=${nextPage}`}>
                      <button
                        className="w-full h-full flex justify-center items-center disabled:cursor-not-allowed "
                        disabled={front > totalPages ? true : false}
                      >
                        <MdChevronRight className="size-6  dark:text-gray-100  text-gray-500" />
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] rounded-r-lg border-l-0 hover:bg-gray-100">
                    <Link href={`?Query=${query}&pageno=${totalPages}`}>
                      <button className="w-full h-full flex justify-center items-center">
                        <RiArrowRightDoubleLine className="size-6  dark:text-gray-100 text-gray-500" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="w-[140px] h-10m mt-3 relative left-[42%] sm:left-[45%] lg:left-[46.5%] 2xl:left-[48%]">
                <div>
                  <p className="font-sans dark:text-gray-100 font-medium text-lg text-black">
                    Page <span className="text-pink-400">{currentPageno}</span>{" "}
                    of {totalPages}
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </>
    </Suspense>
  );
}
