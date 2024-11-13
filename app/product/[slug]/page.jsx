"use client";
require("dotenv").config();
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "@/app/contexts/contextApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InfinitySpin } from "react-loader-spinner";
export default function Order({ params }) {
  const { slug } = params;
  const router = useRouter();
  let [data, setData] = useState({ img: "" });
  let [color, setColor] = useState("");
  let [related, setRelated] = useState([]);
  let [higlight, setHiglight] = useState(null);
  let [slectedSize, setSelectedSize] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isget, setIsget] = useState(false);
  const size = ["S", "M", "L", "XL", "XLL"];
  const sizeNum = ["39", "41", "42", "44", "45"];
  const condtion1 = size.some((size) => size === data.size);
  const condtion2 = sizeNum.some((size) => size === data.size);
  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/product/${slug}`, {
        cache: "no-store",
      });
      let repo = await res.json();
      if (repo.success) {
        setData(repo.Products[0]);
        setHiglight(repo.Products[0].slug);
        setIsLoading(false);

        const fatching = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/tittle/${slug}`,
          {
            cache: "no-store",
          }
        );
        const Products = await fatching.json();
        let colorOption = {};
        Products.forEach((item) => {
          if (!colorOption[item.color]) {
            colorOption[item.color] = {};
          }
          colorOption[item.color][item.size] = item.slug;
        });
        setRelated(Products);
        setColor(colorOption);
      } else {
        setIsLoading(false);
        setIsget(true);
      }
    };
    getItem();
  }, []);

  const { addToCart, setBar, BuyNow } = useAppContext();
  const [pin, setPin] = useState("");
  const [service, setservice] = useState(null);

  const handle = async (e) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/pincode`);
    let jsonData = await data.json();
    let checkPin = Object.keys(jsonData).filter((v) => v === pin);
    if (checkPin.length == 1) {
      setservice(true);
    } else if (checkPin.length == 0 && pin !== "") {
      setservice(false);
    }
  };

  const handleImg = (product) => {
    router.push(`/product/${product.slug}`);
    // console.log(product.img);
    setData(product);
    setHiglight(product.slug);
  };

  const handleImage = (index) => {
    let remove = related.filter((v, i) => i !== index);
    setRelated(remove);
  };

  // if (!data) return <div>Loading...</div>;
  return (
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
      ) : isget ? (
        <div className="dark:bg-[#1f2937] pb-1">
          <div className="pt-5 lg:pt-56 xl:pt-28  mb-64">
            <h2 className="font-sans dark:text-gray-100 font-bold break-words px-5 text-lg mt-10 space-x-2 text-center">
              <span className="tracking-wider"> No </span>
              <span className="text-pink-600 tracking-widest">Results </span>
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
      ) : (
        <div className=" lg:mt-44  xl:mt-14  dark:bg-[#1f2937]">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-12 sm:py-16 lg:py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                {data.img && (
                  <Image
                    alt={data.tittle}
                    // className="lg:w-1/2 w-full lg:h-[450px] h-64 object-fill rounded
                    className="object-fill mx-auto w-[70%] sm:[65%] lg:w-64 h-full block rounded cursor-crosshair"
                    src={`${data.img}`}
                    width={500}
                    height={30}
                    quality={100}
                    priority
                  />
                )}
                {!data.img && (
                  <div className="h-52 flex items-center justify-center rounded-md w-[70%] sm:[65%] lg:w-64 mx-auto  dark:shadow-2xl shadow-xl ">
                    <InfinitySpin
                      visible={true}
                      width="200"
                      color="#be185d"
                      ariaLabel="infinity-spin-loading"
                    />
                  </div>
                )}
                <div className="lg:w-1/2 w-full  pl-3 sm:pl-0 lg:pl-3 xl:pl-1 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font dark:text-gray-400 tracking-widest">
                    CODESWEAR.COM
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font dark:text-gray-100 font-bold font-sans mb-1">
                    {data.tittle}{" "}
                    {data.size && data.color ? (
                      <>
                        ({data.size}/{data.color})
                      </>
                    ) : (
                      ""
                    )}
                  </h1>
                  <div className="mt-5 md:block hidden">
                    <h2 className="font-bold font-sans text-gray-600 dark:text-gray-400">
                      {" "}
                      Product Description:
                    </h2>
                    <p className="leading-relaxed pt-[5px] font-sans  dark:text-gray-100 text-[15px] text-black">
                      {data.desc}
                    </p>
                  </div>
                  <div className="mt-5 ">
                    <span className=" font-bold font-sans dark:text-gray-400 text-gray-600">
                      Color: {data.color}
                    </span>
                  </div>
                  <div className="mt-5 items-center pb-5 border-b-2 border-gray-400 mb-5">
                    <div className="flex ml-2 items-center">
                      <div className="grid grid-cols-3 gap-4 ">
                        {related.map((product, index) => (
                          <div
                            key={product._id}
                            className={`border-gray-200 border-2 w-[50px] rounded-lg h-[72px]  ${
                              product?.slug == higlight
                                ? `border-pink-500 `
                                : ""
                            }`}
                          >
                            <Image
                              onClick={() => handleImg(product)}
                              src={product.img}
                              width={0}
                              height={0}
                              sizes="100vw"
                              alt={product.tittle}
                              priority
                              className="rounded-lg cursor-pointer object-fill w-full h-full mx-auto "
                              onError={() => {
                                handleImage(index);
                              }}
                            />
                          </div>
                        ))}
                        {/* <Image
                          src={`${data.img}`}
                          width={55}
                          height={55}
                          className="rounded-lg"
                        />
                        */}
                      </div>
                    </div>
                    {data.size && (
                      <div className="pt-10 font-semibold text-black grid grid-cols-6 w-72">
                        <h3 className="py-1 dark:text-gray-100">Size:</h3>

                        {condtion1 &&
                          size.map((size, i) =>
                            size === data.size ? (
                              <span
                                key={i}
                                className="text-sm font-light border-[1px] w-9 text-center py-1 h-7 rounded-lg border-pink-600 dark:text-gray-100 dark:font-medium bg-pink-100 dark:bg-[#ec4899] dark:border-gray-100"
                              >
                                {size}
                              </span>
                            ) : (
                              <span
                                key={i}
                                className="text-sm  dark:text-gray-100 dark:font-medium font-light border-[1px] w-9 text-center py-1 h-7 rounded-lg border-black dark:border-gray-100 "
                              >
                                {size}
                              </span>
                            )
                          )}

                        {condtion2 &&
                          sizeNum.map((size, i) =>
                            size === data.size ? (
                              <span
                                key={i}
                                className="text-sm font-light border-[1px] w-9 text-center py-1 h-7 rounded-lg border-pink-600 bg-pink-100 dark:text-gray-100 dark:font-medium dark:bg-[#ec4899] dark:border-gray-100"
                              >
                                {size}
                              </span>
                            ) : (
                              <span
                                key={i}
                                className="text-sm font-light border-[1px] w-9 text-center py-1 h-7 rounded-lg border-black dark:border-gray-100 dark:text-gray-100 "
                              >
                                {size}
                              </span>
                            )
                          )}
                        {data.size === "Standard" && (
                          <span className="text-sm font-medium border-[1px] w-20 text-center py-[3px] h-7 rounded-lg border-pink-600 bg-pink-100 font-sans dark:text-gray-100 dark:font-medium dark:bg-[#ec4899] dark:border-gray-50">
                            {data.size}
                          </span>
                        )}

                        {/* <span className="text-sm border-[1px] w-8 text-center h-7  py-1  rounded-lg border-black">
                        M
                      </span>
                    */}
                      </div>
                    )}
                  </div>

                  <div className=" -mt-1 mb-5 ">
                    <span className="title-font dark:text-gray-100 font-bold font-sans text-3xl text-gray-900">
                      ${data.price}
                    </span>
                  </div>
                  {data.availableQty <= 0 && (
                    <div>
                      <p className="text-[14px]  text-red-600 pb-4">
                        This product varaint/size is currently out of stock.Try
                        selecting some other variant
                      </p>
                    </div>
                  )}
                  <div className="mt-2 md:block hidden ">
                    <input
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Enter Your 6 digit pincode"
                      className="block w-[200px] h-11 rounded-[40px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 placeholder:text-[13px] focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 pl-3 outline-none dark:border-[#9ca3af] dark:border-2 dark:bg-black dark:placeholder:text-[#9ca3af] dark:text-gray-100 dark:ring-0 "
                    />
                    <button
                      onClick={handle}
                      className=" font-bold w-[85px] h-10 text-white pt-[7px] pl-4 bg-pink-500 border-0 py-2  px-6 focus:outline-none hover:bg-pink-600 rounded-[40px] ml-52  relative bottom-[40px] "
                    >
                      Check
                    </button>
                    {!service && service != null && (
                      <p className="text-[12px] font-semibold text-red-600 relative bottom-[35px] ">
                        Soory! we dont deliver to this pincode yet
                      </p>
                    )}
                    {service && service != null && (
                      <p className="text-[12px] font-semibold text-green-600 relative left-3 bottom-[35px]">
                        Yay! this pincode is serviceable
                      </p>
                    )}
                  </div>
                  <div className="md:flex -mt-4 pb-10 hidden">
                    <Link href="/checkOut">
                      <button
                        disabled={data.availableQty <= 0}
                        onClick={() =>
                          BuyNow(
                            data.slug,
                            1,
                            data.tittle,
                            data.price,
                            data.size,
                            data.color,
                            data.img
                          )
                        }
                        className=" disabled:bg-pink-300 flex text-white font-bold bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 rounded-[40px] h-11 w-24 text-[16px] py-[11px] pl-3 mr-3"
                      >
                        Buy Now
                      </button>
                    </Link>

                    <button
                      disabled={data.availableQty <= 0}
                      onClick={() => {
                        addToCart(
                          data.slug,
                          1,
                          data.tittle,
                          data.price,
                          data.size,
                          data.color,
                          data.img
                        );
                        setBar(true);
                      }}
                      className=" disabled:bg-pink-300 flex text-white font-bold bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 rounded-[40px] h-11 w-32 text-[16px] py-3 pl-4"
                    >
                      Add TO Cart
                    </button>
                  </div>
                  <div className="flex  mt-2  md:hidden">
                    <Link href="/checkOut">
                      <button
                        disabled={data.availableQty <= 0}
                        onClick={() =>
                          BuyNow(
                            data.slug,
                            1,
                            data.tittle,
                            data.price,
                            data.size,
                            data.color,
                            data.img
                          )
                        }
                        className=" disabled:bg-pink-300 flex text-white font-bold bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 rounded-[40px] h-11 w-24 text-[16px] py-[11px] pl-3 mr-3"
                      >
                        Buy Now
                      </button>
                    </Link>

                    <button
                      disabled={data.availableQty <= 0}
                      onClick={() => {
                        addToCart(
                          data.slug,
                          1,
                          data.tittle,
                          data.price,
                          data.size,
                          data.color,
                          data.img
                        );
                        setBar(true);
                      }}
                      className=" disabled:bg-pink-300 flex text-white font-bold bg-pink-500 border-0 focus:outline-none hover:bg-pink-600 rounded-[40px] h-11 w-32 text-[16px] py-3 pl-4"
                    >
                      Add TO Cart
                    </button>
                  </div>
                  <div className=" mt-5  md:hidden">
                    <input
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Enter Your 6 digit pincode"
                      className="block w-[200px] h-11 rounded-[40px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 placeholder:text-[13px] focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 pl-3 outline-none dark:border-[#9ca3af] dark:border-2 dark:bg-black dark:placeholder:text-[#9ca3af] dark:text-gray-100 dark:ring-0 "
                    />
                    <button
                      onClick={handle}
                      className=" font-bold w-[85px] h-10 text-white pt-[7px] pl-4 bg-pink-500 border-0 py-2  px-6 focus:outline-none hover:bg-pink-600 rounded-[40px] ml-52  relative bottom-[40px] "
                    >
                      Check
                    </button>
                    {!service && service != null && (
                      <p className="text-[12px] font-semibold text-red-600 relative bottom-[35px] ">
                        Soory! we dont deliver to this pincode yet
                      </p>
                    )}
                    {service && service != null && (
                      <p className="text-[12px] font-semibold text-green-600 relative left-3 bottom-[35px]">
                        Yay! this pincode is serviceable
                      </p>
                    )}
                  </div>
                  <div className="-mt-4 pb-10  md:hidden ">
                    <h2 className="font-bold font-sans text-gray-600 dark:text-gray-400">
                      {" "}
                      Product Description:
                    </h2>
                    <p className="leading-relaxed pt-[5px] font-sans  dark:text-gray-100 text-[15px] text-black">
                      {data.desc}
                    </p>
                  </div>
                </div>

                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
               strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button> */}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

// export const getItem = async () => {
//   // Fetch data from external API
//   const { value } = useAppContext();

//   const res = await fetch(`http://localhost:3000/api/product/${value}`, {
//     cache: "no-store",
//   });
//   const repo = await res.json();

//   // const fatching = await fetch(`http://localhost:3000/api/${repo.tittle}`, {
//   //   cache: "no-store",
//   // });
//   // const Products = await fatching.json();

//   //  const colorOption ={}

//   // Products.forEach((item)=>{
//   //   // if((item.availabelQty > 0){
//   //   if(!colorOption[item.color]){
//   //       colorOption[item.color] = []
//   //       colorOption[item.color].push(item.size)
//   //   }
//   //    if (!colorOption[item.color]) {
//   //      colorOption[item.color] = {};
//   //   }
//   //   colorOption[item.color][item.size] =item.slug;
//   // // }

//   // })
//   // console.log(colorOption)

//   //   // Pass data to the page via props
//   return "hello";
// };
