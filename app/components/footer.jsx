"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  
  return (
    <div className="bg-slate-100 dark:bg-[#111827]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
            <Link
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center"
            >
              <figure>
                <img src="/codeswear.jpg" alt="logo" className="w-48 " />
              </figure>
            </Link>
            <p className="mt-2 text-md text-gray-600 break-words px-4 font-sans dark:text-gray-100  ">
              Wear the &lt;code&gt; premium coding tshirts, hoodies and apparals
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-sans dark:text-gray-100 text-gray-600 tracking-widest text-sm mb-3">
                SHOP
              </h2>
              <nav className="list-none mb-10">
                <Link href="/tshirts">
                  <li className="dark:text-gray-100 dark:hover:text-pink-500 text-gray-600 font-sans  hover:text-pink-500">
                    T-Shirts
                  </li>
                </Link>
                <Link href="/hoodies">
                  <li className="dark:text-gray-100 dark:hover:text-pink-500 text-gray-600 font-sans  hover:text-pink-500">
                    Hoodies
                  </li>
                </Link>
                <Link href="/phones">
                  <li className="text-gray-600 font-sans  hover:text-pink-500 dark:text-gray-100 dark:hover:text-pink-500">
                    Phones
                  </li>
                </Link>
                <Link href="/mugs">
                  <li className="text-gray-600 font-sans  hover:text-pink-500 dark:text-gray-100 dark:hover:text-pink-500">
                    Mugs
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-sans text-gray-600 tracking-widest text-sm mb-3 dark:text-gray-100 ">
                CUSTOMER SERVICE
              </h2>
              <nav className="list-none mb-10">
                <Link href="/contact">
                  <li className="text-gray-600 hover:text-pink-500 font-sans dark:text-gray-100 dark:hover:text-pink-500">
                    Contact Us
                  </li>
                </Link>
                <Link href="/about">
                  <li className="text-gray-600 hover:text-pink-500 font-sans dark:text-gray-100 dark:hover:text-pink-500 ">
                    About Us
                  </li>
                </Link>
                <Link href="/returnpolicy">
                  <li className="text-gray-600 hover:text-pink-500 font-sans dark:text-gray-100 dark:hover:text-pink-500">
                    Return Policy
                  </li>
                </Link>
                <Link href={"/shippingpolicy"}>
                  <li className="text-gray-600 hover:text-pink-500 font-sans dark:text-gray-100 dark:hover:text-pink-500 ">
                    Shipping Policy
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold font-sans text-gray-600  tracking-widest text-sm mb-3 dark:text-gray-100">
                POLICY
              </h2>
              <nav className="list-none mb-10">
                <Link href="/privacy">
                  <li className="text-gray-600 hover:text-pink-500 font-sans  dark:text-gray-100 dark:hover:text-pink-500">
                    Privacy Policy
                  </li>
                </Link>
                <Link href="/terms">
                  <li className="text-gray-600 hover:text-pink-500 font-sans dark:text-gray-100 dark:hover:text-pink-500">
                    Terms and <br /> Condition
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-[#1f2937]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 dark:text-gray-100 font-sans text-sm text-center sm:text-left">
              © 2024 CodesWear.com —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1 font-sans dark:text-gray-100"
                target="_blank"
              >
                All Rights Reserved
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
