"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function ReturnPolicy() {

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
        <div className="dark:bg-[#1f2937] pb-1 2xl:max-w-[1600px] 2xl:mx-auto">
          <div className="ml-[8%] pt-8 lg:pt-64 xl:pt-32 ">
            <h1 className="font-sans  dark:text-gray-100 font-bold text-4xl">
              Refund and Cancellation Policy
            </h1>
            <h3 className="font-sans font-medium text-2xl dark:text-gray-100 mt-7">
              Refund Policy
            </h3>
            <div className="">
              <p className=" font-sans pt-5 pr-12 break-words leading-relaxed dark:text-gray-100">
                At Codeswear, a brand owned by CWH Solutions, our primary focus
                is customer satisfaction, which is why we strive to provide the
                best products and services. Please note that product images on
                our website are for representational purposes only and may vary
                slightly due to lighting conditions or other factors.
              </p>
              <p className=" font-sans pt-5 pr-12  leading-relaxed dark:text-gray-100">
                If you are unsatisfied with a product due to a major defect, we
                will review your case and provide a refund. The following
                conditions apply to our refund policy:
              </p>
              <ul className="mt-8 list-disc ml-7 sm:ml-9">
                <li className=" font-sans pr-5 leading-relaxed dark:text-gray-100">
                  Items can only be returned within a 7-day window from the date
                  of delivery.
                </li>
                <li className=" font-sans pr-12  leading-relaxed dark:text-gray-100">
                  To initiate a return request, customers can visit{" "}
                  <span className="text-blue-600 dark:text-[#3b82f6]">
                    codeswear.com/return
                  </span>
                  .
                </li>
                <li className=" font-sans  pr-5  leading-relaxed dark:text-gray-100">
                  A valid reason is required for returning an item.
                </li>
                <li className=" font-sans pr-12  leading-relaxed dark:text-gray-100">
                  Repeatedly returning items as an abuse of our return policy
                  may result in declined return requests.
                </li>
                <li className=" font-sans pr-12  leading-relaxed dark:text-gray-100">
                  Customers cannot apply for a full refund if the item is part
                  of a "Deal of the Day" offer.
                </li>
                <li className=" font-sans  pr-12 leading-relaxed dark:text-gray-100">
                  In some cases where there is a slight mismatch between the
                  product pictures and the actual product, return requests
                  related to such mismatches may be rejected.
                </li>
                <li className=" font-sans pr-12  leading-relaxed dark:text-gray-100">
                  In rare cases where return pickup is not available with our
                  courier partner, the customer is responsible for sending the
                  product back to us for refund or replacement processing.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="font-sans font-medium text-2xl dark:text-gray-100">
                Cancellation Policy
              </h3>
              <p className=" font-sans pt-5 pr-12  leading-relaxed dark:text-gray-100">
                To cancel your order, please contact us using the provided
                contact link. Orders can be canceled until they are shipped from
                our warehouse. Requests received more than 7 business days prior
                to the product delivery date will not be processed.
                <br />
                <br />
                If you have any questions or concerns regarding our Refund and
                Cancellation Policy, please contact us at:
              </p>
              <div className="mt-5 mb-20">
                <p className="font-sans text-md leading-relaxed  dark:text-gray-100">
                  Call/Whatsapp: +92 349 025 0746
                </p>
                <p className="font-sans text-md  dark:text-gray-100">
                  Email: Codeswearr@gmail.com
                </p>
                <p className="font-sans text-md  dark:text-gray-100">
                  Support Hours: 10AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
