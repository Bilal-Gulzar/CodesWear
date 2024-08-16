"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../contexts/page';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import Image from 'next/image';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function CheckOut() {
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [address,setAddress] = useState('')
const [state,setState] = useState('')
const [city,setCity] = useState('')
const [phone,setPhone] = useState('')
const [pin,setPin] = useState('')
const [code,setCode] = useState('')
const [isLoading, setIsLoading] = useState(true);

const [isTrue,setIsTrue] = useState(true)
  const router = useRouter();  
 
  useEffect(()=>{

const check = name.length > 3 && email.length > 3 && address.length >3 && pin.toString().length >4 && phone.toString().length;
setIsTrue(!check)
//  console.log(phone.toString().length); 
// console.log( typeof pin)

},[name,email,address,phone,pin])

 
useEffect(() => {
  const Token = localStorage.getItem("token")
  if (!Token) {
    router.push("/login");
  }
    FetchData(Token)
 setTimeout(() => {
   setIsLoading(false);
 }, 500);
   
  }, []);
  
  const FetchData = async (token) => {
    let data = { token: token };
    let res = await fetch("http://localhost:3000/api/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let response = await res.json();
    
    if (response.success) {
      setEmail(response.data.email);
      setAddress(response.data.address);
      setPhone(response.data.phone);
      setName(response.data.name);
      setPin(response.data.pincode);
      let data = await fetch("http://localhost:3000/pincode");
      let jsonData = await data.json();
      let pin = (response.data.pincode).toString()
      setCode(jsonData)
    if (Object.keys(jsonData).includes(pin)) {
      setCity(jsonData[response.data.pincode][0]);
      setState(jsonData[response.data.pincode][1]);
          
    }
    
  };
 
}


let {cart,subtotal,addToCart,removeItemFromCart,setBar }=useAppContext()
useEffect(()=>{
  setBar(false)
},[])

let setValue = async(evt)=>{
  if (evt.target.name === "name") {
    setName(evt.target.value);
  } else if (evt.target.name === "email") {
    setEmail(evt.target.value);
  } else if (evt.target.name === "address") {
    setAddress(evt.target.value);
  } else if (evt.target.name === "state") {
    setState(evt.target.value);
  } else if (evt.target.name === "city") {
    setCity(evt.target.value);
  } else if (evt.target.name === "phone") {
    setPhone(evt.target.value);
  } else if (evt.target.name === "pin") {
    setPin(evt.target.value);
    if(evt.target.value.length == 5){
     let data = await fetch("http://localhost:3000/pincode");
    let jsonData = await data.json();
     setCode(jsonData)
    if (Object.keys(jsonData).includes(evt.target.value)) {
      setCity(jsonData[evt.target.value][0]);
      setState(jsonData[evt.target.value][1]);
      // console.log(checkPin[0])
    } else {
      setCity("");
      setState("");
    }
    } 
    else{
           setCity("");
           setState("");
    }
  }
  }



  const Payement=()=>{
  if(!Object.keys(code).includes(pin.toString())){
  toast.error('This pin code is not serviceable')
    
  }

}

  return (
     <>
    {isLoading?
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
    <div className="dark:bg-[#1f2937] pb-1">
      <div className="-mt-9 lg:mt-0 lg:pt-44  xl:pt-14  container mx-auto">
        <h3 className="text-center dark:text-gray-100 text-2xl font-sans font-bold relative top-14">
          <span>
            <img src="/codes.jpg" className="w-10 inline mb-1" />
          </span>
          Check Out
        </h3>
        <h2 className="ml-[3vw] sm:ml-0 text-lg font-bold pt-32  pb-6 dark:text-gray-100 font-sans">
          1.Delivery Details
        </h2>
        <div className="flex ">
          <div className="ml-[3vw] sm:ml-0">
            <label
              htmlFor="name"
              className="block text-sm font-medium dark:text-gray-100 font-sans leading-6 text-gray-500"
            >
              Name
            </label>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="email"
                required
                onChange={setValue}
                value={name}
                className="block lg:w-[505px] md:w-[370px] sm:w-[310px] w-[45vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-2 outline-none dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
              />
            </div>
          </div>
          <div className="ml-4 mr-[5vw] sm:mr-0">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 dark:text-gray-100 font-sans text-gray-500"
            >
              Email
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={setValue}
                className="block lg:w-[500px] md:w-[370px] sm:w-[310px] w-[45vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-2 outline-none dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
              />
            </div>
          </div>
        </div>
        <div className="mt-7">
          <label
            htmlFor="address"
            className="block ml-[3vw]  sm:ml-0 text-sm font-medium leading-6 dark:text-gray-100 font-sans text-gray-500"
          >
            Address
          </label>
          <div>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="text"
              required
              onChange={setValue}
              value={address}
              className="block w-[93vw] mx-auto sm:mx-0 xl:w-[1020px]  sm:w-full h-20  rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 px-2 pb-10 outline-none dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
            />
          </div>
        </div>
        <div className="flex mt-7">
          <div className="ml-[3vw]  sm:ml-0">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 dark:text-gray-100 font-sans  text-gray-500"
            >
              Phone
            </label>
            <div>
              <input
                id="phone"
                name="phone"
                type="number"
                autoComplete="number"
                required
                onChange={setValue}
                value={phone}
                className="block lg:w-[505px]  md:w-[370px] sm:w-[310px] w-[45vw]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6  pl-2 outline-none  dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
              />
            </div>
          </div>
          <div className="ml-4 mr-[4vw] sm:mr-0">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 dark:text-gray-100 font-sans text-gray-500"
            >
              District
            </label>
            <div>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="city"
                required
                onChange={setValue}
                value={city}
                readOnly
                className="block lg:w-[500px]  md:w-[370px] sm:w-[310px] w-[45vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 pl-2 outline-none dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-7 ml-[3vw]  sm:ml-0">
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium leading-6 dark:text-gray-100 font-sans text-gray-500"
            >
              State
            </label>
            <div>
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="text"
                required
                value={state}
                onChange={setValue}
                readOnly
                className="block lg:w-[505px]  md:w-[370px] sm:w-[310px] w-[45vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 pl-2 outline-none  dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
              />
            </div>
          </div>
          <div className="ml-4 mr-[4vw] sm:mr-0">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium leading-6 dark:text-gray-100 font-sans text-gray-500"
            >
              Pincode
            </label>
            <div>
              <input
                id="pincode"
                name="pin"
                type="number"
                autoComplete="number"
                required
                value={pin}
                onChange={setValue}
                className="block lg:w-[500px]  md:w-[370px] sm:w-[310px]  w-[45vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 pl-2 outline-none  dark:bg-[#121212] dark:text-gray-100 dark:focus:ring-1"
              />
            </div>
          </div>
        </div>
        <h2 className="ml-[3vw] sm:ml-0  text-lg font-bold mt-8 mb-7 dark:text-gray-100 font-sans">
          2.Rewiew Cart Items & Pay
        </h2>
        <div className="mb-24 mt-4">
          <div className=" w-[90vw] mx-auto sm:mx-0 sm:w-full xl:w-[1020px] h-auto dark:bg-[#374151] bg-pink-100 ">
            <div>
              {/* <h3 className="text-[] font-bold ml-7 pt-6">Shopping Cart</h3> */}
              {Object.keys(cart).length == 0 && (
                <div>
                  <p className="text-[15px] font-semibold font-sans pt-8 pb-6 ml-14 dark:text-gray-100">
                    Your cart is Empty!
                  </p>
                </div>
              )}
              <div className="pt-9">
                {Object.keys(cart).map((k) => {
                  return (
                    <div key={k} className="flex mx-9 pt-5  relative">
                      <div className="w-[50px] rounded-lg h-[72px] relative">
                        <Image
                          src={cart[k].img}
                          width={0}
                          height={0}
                          sizes='100vw'
                          alt="img"
                          className="rounded-lg object-fill w-full h-full"
                          priority
                        />
                      </div>
                      <div className="w-[160px]">
                        <p className="font-semibold  ml-2 mt-[5px] text-[13px] break-words dark:text-gray-100">
                          {cart[k].name}{" "}
                          {cart[k].variant && cart[k].size ? (
                            <>
                              ({cart[k].variant}/{cart[k].size} )
                            </>
                          ) : (
                            ""
                          )}
                        </p>
                        <div className="flex absolute sm:right-36 -right-4 bottom-8 lg:right-64 ">
                          <span>
                            <AiFillPlusCircle
                              onClick={() =>
                                addToCart(
                                  k,
                                  1,
                                  cart[k].name,
                                  cart[k].price,
                                  cart[k].size,
                                  cart[k].variant,
                                  cart[k].img
                                )
                              }
                              className="text-pink-500 size-5 cursor-pointer"
                            />
                          </span>
                          <span className="font-semibold dark:text-gray-100 mx-[3px]">
                            {cart[k].qty}
                          </span>
                          <span>
                            <AiFillMinusCircle
                              onClick={() =>
                                removeItemFromCart(
                                  k,
                                  cart[k].name,
                                  cart[k].price,
                                  1,
                                  cart[k].size,
                                  cart[k].variant,
                                  cart[k].img
                                )
                              }
                              className="text-pink-500 size-5 cursor-pointer "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 className="font-bold mt-9 dark:text-gray-100 font-sans ml-9 pb-5">
                Subtotal: ${subtotal}
              </h3>
            </div>
          </div>
          <div>
            <button
              disabled={isTrue}
              onClick={Payement}
              className=" disabled:bg-pink-300 hover:bg-pink-600 w-16 h-[35px] bg-pink-500 rounded text-[14px] text-white ml-[5vw] sm:ml-1 mt-2 font-bold"
            >
              Buy
            </button>
          </div>
          <ToastContainer
            position="top-left"
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      </div>
    </div>
}
</>
  );
}
