"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaQuoteRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {

   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 500);
   }, []);

  return (
      <>
      {isLoading ? 
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
    <div className="pt-20 lg:pt-72 xl:pt-40 pb-1 dark:bg-[#1f2937]">
      <div>
        <img
          src="/codes.jpg"
          width={150}
          height={150}
          alt="codeswear.com"
          className="mx-auto"
        />
      </div>
      <div className="pt-10">
        <h1 className="font-sans break-words px-2 text-center font-semibold text-3xl sm:text-4xl dark:text-gray-100">
          Welcome to Codeswear.com
        </h1>
        <p className="mt-3 text-center text-xl leading-relaxed font-sans px-10 dark:text-gray-100">
          Buy{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially

              "T-Shirts",
              1000,
              "Hoodies",
              1000,
              "Mugs",
              1000,
              "Phones",
              1000,
              " Shoes",
              1000,
              "SweatShirts",
              1000,
              "ZipperHoodies",
              1000,
            ]}
            speed={50}
            wrapper="span"
            // style={{ fontSize: "20px" }}
            className="font-medium text-pink-700 dark:text-pink-600"
            repeat={Infinity}
          />
        </p>
      </div>
      <div className=" mt-3 md:w-[650px] xl:w-[60%] mx-auto ">
        <p className="font-sans break-words text-center px-9 md:px-0  dark:text-gray-100">
          Introducing CodesWear, a revolutionary e-commerce platform that
          delivers amazing products at unbeatable prices. Built on a foundation
          of NextJs and MongoDB, our website offers a seamless shopping
          experience powered by server-side rendering. Whether you're a tech
          enthusiast or simply looking for a stylish geek T-shirt, CodesWear has
          something for everyone. And for those curious about the development
          process, be sure to check out the CodeWithHarry NextJs playlist on
          YouTube. Shop now at CodesWear and experience the future of online
          shopping.
        </p>
      </div>
      <div className=" flex justify-center mt-7">
        <Link href="/tshirts">
          <button className="bg-pink-500 w-40 h-11 rounded font-sans font-semibold text-white text-lg dark:text-gray-100 hover:bg-pink-600">
            Start Shopping
          </button>
        </Link>
      </div>
      <div className="mt-24">
        <hr className=" py-5"></hr>
        <h3 className="font-sans font-semibold text-3xl  text-center md:text-start sm:ml-[7%] dark:text-gray-100">
          About Codeswear
        </h3>
        <div className="flex md:flex-row flex-col ">
          <div className="  w-[80vw] mx-auto md:w-[60%] text-start md:text-start md:ml-[7%] md:order-1 order-2 ">
            <p className=" font-sans pt-5 pr-4 leading-relaxed dark:text-gray-100">
              Codeswear.com is revolutionizing the way India shops for unique,
              geeky apparel. From our one-of-a-kind hoodie designs to our wide
              selection of stickers, mugs and other accessories, we have
              everything you need to express your individuality and stand out
              from the crowd. Say goodbye to the hassle of hopping from store to
              store in search of your perfect geeky look. With just a single
              click on our website, you can find it all!
              <br /> <br />
              But what sets Codeswear apart from the competition? The answer is
              simple: our unique designs and commitment to providing the highest
              quality products. We understand the importance of style and
              durability, which is why we put so much effort into creating
              unique designs and using only the best materials. Don't settle for
              mediocre clothing and accessories - choose Codeswear and make a
              statement with your wardrobe.
              <br /> <br />
              At Codeswear, we strive to be more than just an online store - we
              want to be a community where like-minded individuals can come
              together and express themselves through fashion. Whether you're a
              gamer, a programmer, or simply someone who loves all things geeky,
              we have something for you. Our collection is curated with the
              latest trends and fan favorites in mind, ensuring that you'll
              always find something new and exciting.
              <br /> <br />
              We also understand the importance of affordability and
              convenience. That's why we offer competitive prices and fast
              shipping, so you can get your hands on your new geeky apparel as
              soon as possible. Plus, with our easy-to-use website and secure
              checkout process, shopping with us is a breeze. So why wait? Visit
              Codeswear.com today and discover the latest in geeky fashion. With
              our unique designs and high-quality products, we're sure you'll
              find something you'll love. Join our community and express your
              individuality through fashion.
              <br /> <br />
              So why wait? Visit Codeswear.com today and discover the latest in
              geeky fashion. With our unique designs and high-quality products,
              we're sure you'll find something you'll love. Join our community
              and express your individuality through fashion.
            </p>
          </div>
          <div className="mt-10 md:mt-48 md:w-64 lg:w-96 md:order-2 order-1 md:mx-auto">
            <img src="/order.jpg" width={400} height={400} alt="order img" className='mx-auto' />
          </div>
        </div>
      </div>
      <div className="mt-[12%]">
        <h3 className="font-sans font-semibold text-center text-3xl dark:text-gray-100">
          Testimonials
        </h3>
        <div className="flex md:justify-center md:flex-row flex-col md:gap-8 mb-32">
          <div className="bg-gray-100 dark:bg-[#374151] w-[90vw] mx-auto  md:mx-0 md:w-[43%] rounded-lg h-auto mt-11 ">
            <p className="font-sans break-words px-12 py-9 dark:text-gray-100">
              <FaQuoteRight className="pb-4 size-9 dark:text-[#9ca3af]" />I
              recently discovered this site and I am so impressed with the
              quality and selection of hoodies and sweatshirts they offer. Not
              only are the prices incredibly affordable, but the quality of the
              clothing is top-notch. I have received many compliments on the
              items I've purchased and have been asked where I got them. The
              customer service is also excellent - they were very helpful with a
              question I had. I highly recommend this site to anyone looking for
              high-quality clothing at unbeatable prices.
            </p>
            <p className="font-sans font-semibold pl-12 dark:text-gray-100">
              Huzaifa Khan
            </p>
            <p className="font-sans pl-12 text-sm f pb-10 dark:text-gray-100">
              CUSTOMER
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-[#374151] w-[90vw] mx-auto md:mx-0 md:w-[43%] rounded-lg h-auto mt-11">
            <p className="dark:text-gray-100 font-sans break-all px-12 py-9">
              <FaQuoteRight className="pb-4 size-9 dark:text-[#9ca3af]" />I
              recently purchased a hoodie and t-shirt from this online ecommerce
              site and I couldn't be happier with my purchase! The quality of
              the clothing is top-notch and the designs are unique and stylish.
              The ordering process was easy and the shipping was fast. I also
              appreciate the wide variety of sizes available. I highly recommend
              this site to anyone looking for high-quality, fashionable clothing
              at a great price.
            </p>
            <p className="font-sans font-semibold pl-12 dark:text-gray-100">
              {" "}
              Abdul Rafay
            </p>
            <p className="font-sans pl-12 text-sm f pb-10 dark:text-gray-100">
              CUSTOMER
            </p>
          </div>
        </div>
      </div>
    </div>
}
</>
  );
}
