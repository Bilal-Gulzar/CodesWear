"use client"
require("dotenv").config();
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { use, useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { BiDollarCircle } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { TbHanger } from "react-icons/tb";


export default function Home() {
  const images = ["/dynamic1.webp", "/dynamic2.webp", "/dynamic3.webp","/dynamic4.webp","/dynamic5.webp","/dynamic6.webp"]
  const images2 = ["/dynamic7.webp", "/dynamic10.webp", "/dynamic12.webp","/dynamic9.webp","/dynamic8.webp","/dynamic11.webp"]
  const home = [{img:"/home8.jpg",navigate:"/shoes"},{ img:"/home6.jpg",navigate:"/hoodies"},{img:"/home7.jpg",navigate:"phones"},{img:"/home1.jpg",navigate:"/mugs"}, {img:"/home2.jpg",navigate:"/tshirts"},{img:"/home3.jpg",navigate:"/tshirts"}];
  const home2 = [{img:'/home5.jpg',navigate:"/hoodies"},{img:'/home4.jpg',navigate:"/tshirts"}];
  const[image,setImage] = useState(images[0])
  const[update,setUpdate] = useState([images[0]])
  const[update2,setUpdate2] = useState([images2[0]])
  const[result1,setResult1] = useState([])
  const[result2,setResult2] = useState([])
  const[result3,setResult3] = useState([])
  let [num,setNum ]=useState(0);
  let [num2,setNum2 ]=useState(0);
useEffect(()=>{
  DataFetching();
  AOS.init({ duration: 400});  
},[])

  const ForwardImg=(index)=>{
  let check = images.findIndex((v, i) => v === index);
  if (check == 5) {
    let img = images[0];
    setUpdate([img]);
    return;
  }
  let minus = check + 1;
  let img = images[minus];
  //  console.log(img)
  setUpdate([img]);

}
 const ForwardImgforMiniDevice = (index) => {
   let check = images2.findIndex((v, i) => v === index);
   if (check == 5) {
     let img = images2[0];
     setUpdate2([img]);
     return;
   }
   let minus = check + 1;
   let img = images2[minus];
   //  console.log(img)
   setUpdate2([img]);
 };
  const BackImg=(index)=>{
  let check = images.findIndex((v,i)=> v === index) 
  if(check == 0){
    let img = images[5]
    setUpdate([img])
    return
  }
   let minus = check-1
   let img = images[minus]
  //  console.log(img)
  setUpdate([img])

  }
   const BackImgForMiniDevice = (index) => {
     let check = images2.findIndex((v, i) => v === index);
     if (check == 0) {
       let img = images2[5];
       setUpdate2([img]);
       return;
     }
     let minus = check - 1;
     let img = images2[minus];
     //  console.log(img)
     setUpdate2([img]);
   };

useEffect(() => {
  const interval = setInterval(() => {
        // changeImage()
        UpdateImg()
        UpdateImgForMobile();
      },4500); 

      return () => clearInterval(interval);
    }, []);

const UpdateImg=()=>{
  if(num == 6){
    num = 0;
    let newImg = images[num];
     setUpdate([newImg])
     num = num +1
  }else{
    let newImg = images[num];
    setUpdate([newImg])
    num = num + 1;
  }
}
const UpdateImgForMobile = () => {
  if (num2 == 6) {
    num2 = 0;
    let newImg = images2[num2];
    setUpdate2([newImg]);
    num2 = num2 + 1;
  } else {
    let newImg = images2[num2];
    setUpdate2([newImg]);
    num2 = num2 + 1;
  }
};
 const DataFetching = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/home`);
   const data = await res.json();
   setResult1(data.product1);
   setResult2(data.product2);
   setResult3(data.product3)
    
 };
  return (
    <>
      <main className="dark:bg-[#1f2937] -mb-20">
        <div className="lg:pt-56 xl:pt-24 pt-2">
          <Link href="/tshirts">
            <div className="w-[90vw] mt-1 lg:mt-0 gap-3 mx-[5vw] rounded-full bg-indigo-800 flex sm:h-11 h-auto  items-center lg:w-[50vw] lg:mx-[25vw] lg:relative">
              <div className=" w-[60px] lg:ml-3 ml-2 text-md h-8 rounded-full bg-indigo-500 font-semibold font-sans  sm:pl-3 pl-2 pt-1  text-white  animate-pulse">
                <p className=" sm:px-0 pr-2">NEW</p>
              </div>
              <div className="text-sm font-sans font-medium text-white">
                <p className="pr-4 sm:py-4 py-1 ">
                  Discover the latest trends and unbeatable deals at our online
                  store{" "}
                  <span className="lg:absolute right-2 text-md">&gt; </span>
                </p>
              </div>
            </div>
          </Link>
          <div className="relative">
            <div className="sm:block hidden">
              <div className="mt-3 overflow-x-hidden ">
                {update.map((img, i) => (
                  <div key={i}>
                    <div>
                      <Image
                        src={img}
                        width={2500}
                        height={2500}
                        className="mx-1"
                        quality={100}
                        alt="WearYourDesign"
                        priority
                      />
                    </div>
                    <div className="absolute top-[45%] md:top-[50%] left-4 md:bg-white cursor-pointer rounded-full lg:w-10 lg:h-10 w-8 h-8  ">
                      <span onClick={() => BackImg(img)}>
                        <FaLessThan className="text-white md:text-black lg:size-5 size-4 lg:ml-[7px] ml-[5px]  lg:mt-[9px] md:mt-[7px] " />
                      </span>
                    </div>
                    <div className="absolute top-[45%] md:top-[50%] right-4 md:bg-white cursor-pointer rounded-full w-8 h-8 lg:w-10 lg:h-10 ">
                      <span onClick={() => ForwardImg(img)}>
                        <FaGreaterThan className=" text-white md:text-black font-light size-4 lg:size-5 lg:ml-[11px] lg:mt-[9px] md:mt-[7px] ml-[8px]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 justify-center w-full absolute top-[89%] lg:top-[93%] ">
                {images.map((v, i) =>
                  v == update ? (
                    <span
                      key={i}
                      className=" sm:w-3 sm:h-3  h-2 w-2 rounded-full bg-white dark:bg-white "
                    ></span>
                  ) : (
                    <span
                      key={i}
                      className="sm:w-3 sm:h-3 w-2 h-2  rounded-full bg-white bg-opacity-50"
                    ></span>
                  )
                )}
              </div>
            </div>

            <div className="sm:hidden">
              {update2.map((img, i) => (
                <div key={i}>
                  <div className=" mt-3 overflow-x-hidden relative w-[97vw] mx-auto h-[400px]  overflow-hidden ">
                    <Image
                      alt="WearYourDesign"
                      src={img}
                      fill
                      quality={100}
                      sizes="97vw"
                      priority
                    />
                  </div>
                  <div className="absolute top-[45%]  left-4 cursor-pointer rounded-full  w-8 h-8  ">
                    <span onClick={() => BackImgForMiniDevice(img)}>
                      <FaLessThan className="text-white  size-6  ml-[5px]" />
                    </span>
                  </div>
                  <div className="absolute top-[45%] m right-4 cursor-pointer rounded-full w-8 h-8  ">
                    <span onClick={() => ForwardImgforMiniDevice(img)}>
                      <FaGreaterThan className=" text-white font-light size-6  ml-[8px]" />
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 justify-center w-full absolute top-[92%]">
                {images2.map((v, i) =>
                  v == update2 ? (
                    <span
                      key={i}
                      className=" sm:w-3 sm:h-3  h-2 w-2 rounded-full bg-white dark:bg-white "
                    ></span>
                  ) : (
                    <span
                      key={i}
                      className="sm:w-3 sm:h-3 w-2 h-2  rounded-full bg-white bg-opacity-50"
                    ></span>
                  )
                )}
              </div>
            </div>
            <Link href={"/hoodies"}>
              <div className="w-full flex justify-center">
                <div
                  className=" absolute lg:top-[75%] sm:top-[67%] xl:top-[80%] bottom-14 bg-white lg:w-32 rounded-lg sm:h-10 sm:w-28 flex justify-center items-center  w-[85px] h-8"
                  data-aos="zoom-in-up"
                >
                  <button className="font-sans  text-sm sm:text-lg  font-bold">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <section className="text-gray-600 body-font">
            <h3 className=" dark:text-gray-100 font-sans font-bold text-black text-[31px] text-center mt-8 -mb-14">
              COLLECTIONS
            </h3>

            <div className="container px-5 py-24 mx-auto">
              <div className="grid sm:grid-cols-2  lg:grid-cols-3">
                {home.map((v, i) => (
                  <Link key={i} href={v.navigate}>
                    <div
                      className="aos-init aos-animate"
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <div className="lg:w-80 lg:h-80 xl:w-full p-4 w-full lg:mb-5 hover:-translate-y-1 hover:scale-110  overflow-hidden transition ease-in-out duration-300  ">
                        <Image
                          alt="ecommerce"
                          className="object-fill w-96 mx-auto h-[300px] block  rounded-lg "
                          src={v.img}
                          width={140}
                          height={50}
                          priority
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid sm:grid-cols-2  lg:grid-cols-3 lg:ml-[15%] lg:gap-48 xl:ml-0  xl:gap-0">
                {home2.map((v, i) => (
                  <Link key={i} href={v.navigate}>
                    <div
                      className="aos-init aos-animate"
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <div className="lg:w-80 lg:h-80  xl:w-full p-4 w-full lg:mb-5  hover:-translate-y-1 hover:scale-110  overflow-hidden transition ease-in-out duration-300  ">
                        <Image
                          alt="ecommerce"
                          className="object-fill mx-auto w-96 h-[300px] block  rounded-lg "
                          src={v.img}
                          width={140}
                          height={50}
                          priority
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div>
                <h4
                  data-aos="zoom-in-up"
                  data-aos-anchor-placement="top-bottom"
                  className=" aos-init aos-animate  dark:text-gray-100 font-sans font-bold text-black text-[28px]  mt-8 -mb-14"
                >
                  Bestselling Products
                </h4>
                <div className="bg-pink-500 w-[100px] h-1 rounded-full mt-[62px] mb-5"></div>
                <div className="md:grid  hidden md:grid-cols-3 mt-3 md:gap-4 gap-8 sm:gap-10 lg:gap-0  xl:mx-[12%] 2xl:mx-[15%] ">
                  {result1.map((v) => (
                    <div
                      key={v.slug}
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="top-bottom"
                      className="aos-init w-[74%] aos-animate lg:w-64 p-4 sm:w-full mx-auto shadow-lg lg:mb-4  dark:shadow-2xl"
                    >
                      <Link
                        href={`product/${v.slug}`}
                        className="block relative h-72 overflow-hidden transition ease-in-out delay-150 sm:bg-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300  sm:dark:bg-[#374151] bg-white dark:hover:bg-[#374151] dark:bg-[#1f2937]"
                      >
                        <Image
                          alt="ecommerce"
                          className="object-fill mx-auto w-auto sm:w-full h-full block"
                          src={v.img}
                          width={140}
                          height={50}
                          priority
                        />
                      </Link>
                      <div className="dark:bg-[#374151] relative rounded-b-lg -top-4 -left-4 h-[41%] w-[114.6%]">
                        <div className="relative top-8 left-5">
                          <h3 className="text-gray-500 dark:text-gray-400 pr-4 text-xs tracking-widest font-sans font-medium title-font mb-1">
                            {v.category.toString().toUpperCase()}
                          </h3>
                          <h2 className="text-gray-900 dark:text-gray-100 title-font font-sans text-lg font-medium">
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
                <div className="md:grid hidden  md:grid-cols-2 mt-4 dark:mt-8 gap-8 md:mx-[12%] xl:mx-[25%] lg:mx-[14%]  md:gap-0 ">
                  {result2.map((v) => (
                    <div
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="top-bottom"
                      key={v.slug}
                      className="aos-init aos-animate lg:w-64 p-4  mx-auto shadow-lg lg:mb-4 dark:shadow-2xl"
                    >
                      <Link
                        href={`product/${v.slug}`}
                        className="block relative h-72 overflow-hidden transition ease-in-out delay-150 bg-white sm:bg-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 dark:bg-[#374151] dark:hover:bg-[#374151]"
                      >
                        <Image
                          alt="ecommerce"
                          className="object-fill mx-auto w-auto lg:w-full h-full block"
                          src={v.img}
                          width={140}
                          height={50}
                          priority
                        />
                      </Link>
                      <div className="dark:bg-[#374151] relative rounded-b-lg -top-4 -left-4 h-[41%] w-[114.6%]">
                        <div className="relative top-8 left-5">
                          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest font-sans font-medium title-font mb-1">
                            {v.category.toString().toUpperCase()}
                          </h3>
                          <h2 className="text-gray-900 dark:text-gray-100 title-font font-sans text-lg font-medium">
                            {v.tittle}
                          </h2>
                          <p className="mt-3 mb-7 dark:text-gray-100">
                            ${v.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid md:hidden sm:grid-cols-2 mt-3 gap-10  ">
                  {result3.map((v) => (
                    <div
                      key={v.slug}
                      data-aos="zoom-in-up"
                      data-aos-anchor-placement="top-bottom"
                      className="aos-init w-[74%] aos-animate  p-4 sm:w-full mx-auto shadow-lg   dark:shadow-2xl"
                    >
                      <Link
                        href={`product/${v.slug}`}
                        className="block relative h-72 overflow-hidden transition ease-in-out delay-150 sm:bg-pink-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300  sm:dark:bg-[#374151] bg-white dark:hover:bg-[#374151] dark:bg-[#1f2937]"
                      >
                        <Image
                          alt="ecommerce"
                          className="object-fill mx-auto w-auto sm:w-full h-full block"
                          src={v.img}
                          width={140}
                          height={50}
                          priority
                        />
                      </Link>
                      <div className="dark:bg-[#374151] relative rounded-b-lg -top-4 -left-4 h-[41%] w-[114.6%]">
                        <div className="relative top-8 left-5">
                          <h3 className="text-gray-500 dark:text-gray-400 pr-4 text-xs tracking-widest font-sans font-medium title-font mb-1">
                            {v.category.toString().toUpperCase()}
                          </h3>
                          <h2 className="text-gray-900 dark:text-gray-100 pr-4 title-font font-sans text-lg font-medium">
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
              <section className="text-gray-600 body-font">
                <div className="w px-5 py-24">
                  <div
                    className="flex flex-wrap -m-4 aos-init aos-animate "
                    data-aos="zoom-in-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div className="xl:w-96 md:w-1/2 p-4 mx-auto w-full">
                      <div className="border border-gray-200 p-6 rounded-lg text-center dark:bg-[#334155] dark:border-0">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                          <TbHanger className="size-7  " />
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-sans dark:text-gray-100">
                          Premium Tshirts
                        </h2>
                        <p className="leading-relaxed text-base font-sans dark:text-gray-100">
                          Our T-Shirts are 100% made of cotton.
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-96 md:w-1/2 w-full mx-auto p-4 text-center ">
                      <div className="border border-gray-200 p-6 rounded-lg dark:bg-[#334155] dark:border-0 ">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                          <FaShippingFast className="size-7" />
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font font-sans mb-2 dark:text-gray-100">
                          Free Shipping
                        </h2>
                        <p className="leading-relaxed text-base font-sans dark:text-gray-100">
                          We ship all over Pakistan for FREE.
                        </p>
                      </div>
                    </div>
                    <div className="xl:w-96 md:w-1/2 p-4 lg:mt-2 font-sans text-center w-full mx-auto lg:ml-[25%] xl:ml-[35%] 2xl:ml-[37%]">
                      <div className="border border-gray-200 p-6 rounded-lg dark:bg-[#334155] dark:border-0">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                          <BiDollarCircle className="size-7" />
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-sans dark:text-gray-100">
                          Exciting Offers
                        </h2>
                        <p className="leading-relaxed text-base font-sans dark:text-gray-100">
                          We provide amazing offers & discounts on our products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
