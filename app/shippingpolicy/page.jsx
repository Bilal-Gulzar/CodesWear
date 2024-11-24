"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function ShippingPolicy() {

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
          <div className="sm:ml-[8%] ml-4 pt-8 lg:pt-64 xl:pt-32 ">
            <h1 className="font-sans font-bold text-4xl dark:text-gray-100">
              Shipping Policy
            </h1>
            <div>
              <p className=" font-sans pt-5 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                At Codeswear, a brand owned by CWH Solutions, our primary focus
                is customer satisfaction, which is why we strive to provide the
                best products and services. Please note that product images on
                our website are for representational purposes only and may vary
                slightly due to lighting conditions or other factors.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                Shipping Time
              </h3>
              <p className=" font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                We understand the excitement of receiving your order promptly.
                Therefore, we aim to process the order within 1-2 days and
                deliver all the orders within 7 days of purchase. Please note
                that this timeframe may vary depending on product availability
                and any unforeseen circumstances. Rest assured, we're committed
                to getting your items to you as swiftly as possible.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                Shipping Method
              </h3>
              <p className=" font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                Orders are shipped via trusted courier services to ensure safe
                and timely delivery to your doorstep. Once your order has been
                dispatched, you will receive a confirmation email containing
                tracking information, allowing you to monitor the status of your
                delivery.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                Shipping Charges
              </h3>
              <p className="font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                Codeswear offers free shipping on all orders within the
                specified regions. Any additional shipping charges, such as
                expedited shipping or international delivery fees, will be
                clearly communicated to you during the checkout process.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                International Shipping
              </h3>
              <p className=" font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                While we primarily serve customers within our designated
                regions, international shipping may be available upon request.
                Please reach out to our customer support team for assistance
                with international orders, including shipping rates and delivery
                times.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                Order Tracking
              </h3>
              <p className=" font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                Stay informed about the whereabouts of your package by utilizing
                our order tracking feature. Once your order has been processed,
                you'll receive a unique tracking number to monitor its journey
                from our warehouse to your doorstep.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                Returns and Exchanges
              </h3>
              <p className="font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                At Codeswear, customer satisfaction is our top priority. If you
                encounter any issues with your order, such as receiving damaged
                or defective items, please contact us within 7 days of delivery.
                We'll gladly assist you with returns or exchanges to ensure your
                complete satisfaction with your purchase.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="font-sans font-semibold text-gray-900 text-xl dark:text-gray-100">
                Contact Us
              </h3>
              <p className=" font-sans pt-3 pr-7 sm:pr-20 2xl:pr-64 xl:pr-44 break-words leading-relaxed dark:text-gray-100">
                Should you have any questions or concerns regarding our shipping
                policy or any other inquiries, please don't hesitate to reach
                out to our dedicated customer support team. We're here to help
                and ensure that your shopping experience with Codeswear is
                nothing short of exceptional.
                <br />
                <br />
                Thank you for choosing Codeswear for your clothing needs. We
                appreciate your support and look forward to serving you again
                soon! If you have any questions or concerns regarding our Refund
                and Cancellation Policy, please contact us at:
              </p>
            </div>
            <div className="mt-5 mb-20">
              <p className="font-sans text-md leading-relaxed dark:text-gray-100">
                Call/Whatsapp: +92 349 025 0746
              </p>
              <p className="font-sans text-md dark:text-gray-100">
                Email: Codeswearr@gmail.com
              </p>
              <p className="font-sans text-md dark:text-gray-100">
                Support Hours: 10AM - 6PM
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
