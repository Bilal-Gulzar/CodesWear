require("dotenv").config();
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Suspense } from "react";

export const getShoes = async (pageno) => {
  //   // Fetch data from external API

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts/Shoes?pageno=${pageno}`,
    {
      cache: "no-store",
    }
  );
  const repo = await res.json();

  //   // Pass data to the page via props
  return repo;
};

export default async function Shoes({ searchParams }) {
  let page = parseInt(searchParams.pageno, 10);
  page = !page || page < 1 ? 1 : page;
  const Allproducts = await getShoes(page);
  const Shoes = Allproducts.tshirts;
  const totalPages = Allproducts.totalPages;
  const prePage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const back = page - 1;
  const front = page + 1;
  const currentPageno = page;
  const condition = !(page > totalPages);

  return (
    <Suspense
      fallback={
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
      }
    >
      <div className="lg:mt-[12%]  xl:mt-20 pb-5 dark:bg-[#1f2937]">
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-3 pb-14 lg:py-24 mx-auto">
            {currentPageno <= totalPages ? (
              <div className="lg:flex lg:flex-wrap gap-7 grid md:grid-cols-3  sm:grid-cols-2 -m-4 mt-3 lg:ml-16">
                {Object.keys(Shoes).map((v) => (
                  <div
                    key={Shoes[v]._id}
                    className="md:w-64 p-4 md:p-8  lg:p-4 w-[70%] sm:w-auto  mx-auto sm:mx-3 md:mx-auto lg:mx-0 shadow-lg lg:mb-4 dark:shadow-2xl"
                  >
                    <Link
                      href={`product/${Shoes[v].slug}`}
                      className="block relative h-72 overflow-hidden transition ease-in-out delay-150 sm:bg-pink-500 bg-white  hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 sm:dark:bg-[#374151] dark:hover:bg-[#374151] dark:bg-[#1f2937]"
                    >
                      <Image
                        alt="ecommerce"
                        className="object-fill mx-auto w-auto sm:w-full h-full block"
                        src={`${Shoes[v].img}`}
                        width={140}
                        height={50}
                        priority
                      />
                    </Link>
                    <div className="dark:bg-[#374151] relative rounded-b-lg -left-4 h-[43%] w-[114.6%]">
                      <div className="relative dark:top-7  top-5 left-5">
                        <h3 className="text-gray-500 dark:text-gray-400  text-xs tracking-widest font-sans font-medium title-font mb-1">
                          {Shoes[v].category.toString().toUpperCase()}
                        </h3>
                        <h2 className="text-gray-900 dark:text-gray-100 title-font font-sans text-lg font-medium">
                          {Shoes[v].tittle.length > 21 ? (
                            <span>{Shoes[v].tittle.substr(0, 21)}...</span>
                          ) : (
                            Shoes[v].tittle
                          )}
                        </h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-100  font-medium font-sans">
                          ${Shoes[v].price}
                        </p>
                      </div>
                      <div className="relative top-9 dark:top-12 left-5">
                        {Shoes[v].size.map((size, i) => (
                          <span
                            key={i}
                            className="text-md border-2 py-1 font-sans text-black px-2 mx-[2px] dark:text-gray-100"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                      <div className="mt-12 dark:pt-[20px] ml-5 mb-2 flex space-x-[0.7px]">
                        {Shoes[v].color.map((x, i) => (
                          <div
                            key={i}
                            style={{
                              background: `${
                                x === "Pink" ||
                                x === "Orange" ||
                                x === "Yellow" ||
                                x === "White" ||
                                x === "Golden" ||
                                x === "Silver"
                                  ? `${
                                      (x == "Pink" && "#ff00aa") ||
                                      (x == "Orange" && "#ff3200") ||
                                      (x == "Yellow" && "#ffc92a") ||
                                      (x == "White" && "#edf1ff") ||
                                      (x == "Golden" && "#D4AF37") ||
                                      (x == "Silver" && "#d1d4d7")
                                    }`
                                  : `${x}`
                              }`,
                              width: "12px",
                              height: "12px",
                              borderRadius: "10px",
                              border: "1px solid #e2e6ea",
                              X: "2px",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="lg:ml-[31%] xl:ml-[32%] text-center lg:text-start sm:mt-[16%] mt-[20%] dark:bg-[#1f2937]">
                <div className="relative">
                  <h1 className=" -mt-14 tracking-widest text-9xl font-sans sm:text-[12rem] font-extrabold dark:text-gray-100 text-black">
                    404
                  </h1>
                  <div
                    className="text-white bg-[#f32775] px-1 text-sm sm:text-lg rounded rotate-12 absolute sm:bottom-14
               lg:left-[18%] sm:left-56 md:left-72 left-[34%] bottom-10 xl:left-[15%] 2xl:left-[12%] "
                  >
                    Page Not Found
                  </div>
                </div>
                <button className="sm:mt-4 mt-14  relative border-[1px] dark:bg-[#4b5563] border-[#f32775] w-36 h-14  font-medium text-lg  text-[#f32775] ring-[#f32775] focus:ring  outline-none lg:ml-[17%]  xl:ml-[14%] 2xl:ml-[12%]">
                  <Link href={`/`}>
                    <span
                      className=" transition-all duration-200  translate-x-[3px] translate-y-[3px] tran inset-0 border-[#f32775] absolute border-r-[3px] border-b-[3px] hover:translate-x-0 hover:translate-y-0 
               hover:border-r-0 hover:border-b-0"
                    ></span>
                    Go Home
                  </Link>
                </button>
              </div>
            )}
          </div>
          {condition && (
            <>
              <nav className="sm:w-[290px] w-[65vw] h-10  mx-auto dark:bg-gray-700 ">
                <ul className="grid grid-cols-7">
                  <li className="  border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] rounded-l-lg hover:bg-gray-100 ">
                    <Link href={`?pageno=${1}`}>
                      <button className="w-full h-full">
                        <RiArrowLeftDoubleFill className="size-6 ml-[8px] dark:text-gray-100  text-gray-500" />
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] border-l-0 hover:bg-gray-100 ">
                    <Link href={`?pageno=${prePage}`}>
                      <button
                        disabled={back === 0 ? true : false}
                        className="w-full h-full disabled:cursor-not-allowed  "
                      >
                        <MdChevronLeft className="size-6 ml-[8px]  text-gray-500 dark:text-gray-100" />
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 pl-4 text-md pt-[3px] font-sans border-l-0  border-[1px] h-[40px] hover:bg-gray-100">
                    <Link href={`?pageno=${back}`}>
                      <button
                        disabled={back === 0 ? true : false}
                        className=" w-[156%] h-[110%] -ml-4 -mt-1 dark:text-gray-100 outline-none disabled:cursor-not-allowed "
                      >
                        {back}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  pl-4 text-md pt-[3px] text-pink-500 font-semibold font-sans  border-l-0  dark:hover:bg-pink-500 border-[1px] h-[40px] hover:bg-pink-300 hover:text-pink-700 bg-pink-200">
                    <Link href={`?pageno=${currentPageno}`}>
                      <button
                        disabled={true}
                        className=" cursor-not-allowed w-[156%] h-[110%] -ml-4 -mt-1 outline-none "
                      >
                        {currentPageno}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 pl-4 text-md pt-[3px] font-sans border-l-0  border-[1px] h-[40px] hover:bg-gray-100">
                    <Link href={`?pageno=${front}`}>
                      <button
                        disabled={front > totalPages ? true : false}
                        className="w-[156%] h-[110%] -ml-4 dark:text-gray-100 -mt-1 outline-none disabled:cursor-not-allowed  "
                      >
                        {front}
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] border-l-0 hover:bg-gray-100 ">
                    <Link href={`?pageno=${nextPage}`}>
                      <button
                        className="w-full h-full disabled:cursor-not-allowed "
                        disabled={front > totalPages ? true : false}
                      >
                        <MdChevronRight className="size-6 ml-[7px] dark:text-gray-100  text-gray-500" />
                      </button>
                    </Link>
                  </li>
                  <li className="border-gray-300  dark:hover:bg-gray-800 border-[1px] h-[40px] rounded-r-lg border-l-0 hover:bg-gray-100">
                    <Link href={`?pageno=${totalPages}`}>
                      <button className="w-full h-full">
                        <RiArrowRightDoubleLine className="size-6 ml-[7px] dark:text-gray-100 text-gray-500" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="w-[140px] h-10m mt-3 relative left-[42%] sm:left-[48%]">
                <div>
                  <p className="font-sans dark:text-gray-100 font-medium text-lg text-black">
                    Page <span className="text-pink-400">{currentPageno}</span>{" "}
                    of {totalPages}
                  </p>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </Suspense>
  );
}
