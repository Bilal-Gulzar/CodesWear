"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Privacy() {
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
    <div className="dark:bg-[#1f2937]  pb-1">
      <div className="sm:ml-[8%] ml-4 pt-8 lg:pt-64 xl:pt-32">
        <h1 className="font-sans font-bold text-4xl dark:text-gray-100">
          Privacy Policy
        </h1>
        <div className="mt-8">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            1. Introduction
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            This Privacy Policy describes how CWH Solutions ("Codeswear," "we,"
            "us," or "our") collects, uses, and discloses your personal
            information when you use our ecommerce website (the "Website"). By
            accessing or using the Website, you consent to the terms of this
            Privacy Policy.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            2. Information We Collect
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-2 dark:text-gray-100">
            We may collect various types of information from you when you
            interact with our Website, including:
          </p>
          <ul className="mt-5 list-disc ml-9">
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Email address
            </li>
            <li className=" font-sans pr-5 leading-relaxed dark:text-gray-100">
              First name and last name
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Shipping and billing address
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Phone number
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Payment information
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Order history
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Device information (e.g., IP address, browser type)
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Usage data (e.g., pages visited, products viewed)
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            3. How We Use Your Information
          </h3>
          <p className=" font-sans pt-4 pr-20 break-all leading-2 dark:text-gray-100">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="mt-5 list-disc ml-9">
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Providing and personalizing our services
            </li>
            <li className=" font-sans pr-5 leading-relaxed dark:text-gray-100">
              Processing and fulfilling orders
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Improving our Website and user experience
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Communicating with you, including for customer support
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Sending promotional emails and marketing communications
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Preventing fraud and ensuring the security of our Website
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Complying with legal obligations
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            4. Information Sharing and Disclosure
          </h3>
          <p className=" font-sans pt-4 pr-20 break-all leading-2 dark:text-gray-100">
            We may share your information with third parties in the following
            circumstances:
          </p>
          <ul className="mt-5 list-disc ml-7 sm:ml-9">
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              With service providers and business partners involved in the
              operation of our Website and service
            </li>
            <li className=" font-sans pr-5 leading-relaxed dark:text-gray-100">
              For order fulfillment, shipping, and payment processing
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              With law enforcement or government authorities as required by
              applicable law
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              In response to legal process, such as a subpoena or court order
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              To protect our rights, property, or safety, and the rights,
              property, and safety of others
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              Order history
            </li>
            <li className=" font-sans pr-5 leading-2 dark:text-gray-100">
              With your consent or at your direction
            </li>
          </ul>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            5. Your Choices and Rights
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            You have certain rights regarding your personal information,
            including the right to access, update, and delete your information.
            You may also opt-out of receiving marketing communications from us.
            Please contact us using the information provided below to exercise
            your rights or for any privacy-related inquiries.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-gray-900 text-2xl dark:text-gray-100">
            6. Data Security
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, please be
            aware that no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-gray-900 text-2xl dark:text-gray-100">
            7. Changes to this Privacy Policy
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the revised version will be
            effective as of the updated date. We encourage you to review this
            Privacy Policy periodically for any updates.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-gray-900 text-2xl dark:text-gray-100">
            8. Contact Us
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us at:
          </p>
        </div>
        <div className="mt-5 mb-20">
          <p className="font-sans text-md dark:text-gray-100 ">CWH Solutions</p>
          <p className="font-sans text-md dark:text-gray-100">
            {" "}
            225, Korangi No.5/1/2 Near DHA
          </p>
          <p className="font-sans text-md dark:text-gray-100 ">
            Sindh, karachi
          </p>
          <p className="font-sans text-md leading-relaxed dark:text-gray-100 ">
            Phone: +92 349 025 0746
          </p>
          <p className="font-sans text-md dark:text-gray-100 ">
            Email: Codeswearr@gmail.com
          </p>
        </div>
      </div>
    </div>
}
</>
  );
}
