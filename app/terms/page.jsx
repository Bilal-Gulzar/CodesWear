"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Terms() {
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
          Terms and Conditions
        </h1>

        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            1. Introduction
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            Welcome to Codeswear, a brand owned by CWH Solutions! These terms
            and conditions ("Terms") govern your access to and use of our
            ecommerce website (the "Website"). By using the Website, you agree
            to be bound by these Terms. If you do not agree with these Terms,
            please refrain from using our Website.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            2. Intellectual Property
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            All intellectual property rights, including but not limited to
            trademarks, logos, and designs, displayed on the Website are the
            property of Codeswear, a brand owned by CWH Solutions. You are
            prohibited from using, copying, or distributing any content from the
            Website without our prior written consent.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            3. Product Information
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            We make every effort to provide accurate and up-to-date information
            about our products on the Website. However, we do not guarantee the
            accuracy, completeness, or reliability of any product information.
            You acknowledge that the actual colors, dimensions, and
            specifications of products may differ from the images and
            descriptions displayed on the Website.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            4. Order Acceptance and Pricing
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            All orders placed through the Website are subject to our acceptance.
            We reserve the right to refuse or cancel any order at any time for
            any reason. In the event of a pricing error on the Website, we may
            refuse or cancel any such orders, even if the order has been
            confirmed and payment has been made. We will notify you of any
            changes or cancellations related to your order.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            5. Limitation of Liability
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            To the extent permitted by applicable law, Codeswear, a brand owned
            by CWH Solutions shall not be liable for any direct, indirect,
            incidental, consequential, or exemplary damages, including but not
            limited to loss of profits, data, or business opportunities arising
            out of your use of the Website or any products purchased from us.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            6. Changes to the Terms and Conditions
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            We reserve the right to modify or update these Terms at any time
            without prior notice. Any changes will be effective immediately upon
            posting on the Website. Your continued use of the Website after the
            posting of changes constitutes your acceptance of the revised Terms.
          </p>
        </div>
        <div className="mt-7">
          <h3 className="font-sans font-semibold text-black text-2xl dark:text-gray-100">
            7. Contact Us
          </h3>
          <p className=" font-sans pt-4 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
            If you have any questions or concerns regarding these Terms, please
            contact us at:
          </p>
        </div>
        <div className="mt-5 mb-20">
          <p className="font-sans text-md  dark:text-gray-100">CWH Solutions</p>
          <p className="font-sans text-md dark:text-gray-100">
            {" "}
            225, Korangi No.5/1/2 Near DHA
          </p>
          <p className="font-sans text-md dark:text-gray-100">Sindh, karachi</p>
          <p className="font-sans text-md leading-relaxed dark:text-gray-100">
            Customer Support: Call/Whatsapp: +92 349 025 0746
          </p>
          <p className="font-sans text-md dark:text-gray-100 ">
            Email: Codeswearr@gmail.com
          </p>
          <p className="font-sans text-md dark:text-gray-100">
            Support Hours: 10 AM - 6 PM (Morning)
          </p>
        </div>
      </div>
    </div>
}
</>
  );
}
