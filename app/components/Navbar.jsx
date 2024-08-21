"use client";
require("dotenv").config();
import { useRef } from "react";
// import { useCart } from "./contexts/page";
import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { use, useEffect, useState } from "react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useAppContext } from "../contexts/contextApi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Search from "../search/page";
import { document } from "postcss";

export default function Navbar() {
  const inputRef = useRef(null);
  let {
    user,
    bar,
    setBar,
    cart,
    subtotal,
    clearCart,
    removeItemFromCart,
    addToCart,
    Logout,
  } = useAppContext();
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hidebar, setHidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(undefined);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  //  console.log(darkMode);
  // console.log(results);
  useEffect(() => {
    setSearch(true);
    handleSearch();
    // console.log(query)
    if (query) {
      setMenu(false);
    }
  }, [query]);
  const handleSearch = async () => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/searchNavbar?query=${query}`);
    const data = await res.json();
    if (data.success) {
      setResults(data.results.slice(0, 5));
      setSearch(false);
    } else {
      setResults([]);
    }
  };

  const selected = () => {
    // router.push(`/product/${slug}`)
    setResults([]);
  };
  const handleSubmit = () => {
    setResults([]);
    setSearch(false);
  };

  const handleImage = (index) => {
    let remove = results.filter((v, i) => i !== index);
    setResults(remove);
  };
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);


useEffect(()=>{
  inputRef.current.focus();
},[hidebar])

  return (
    <>
      <div
        className={`bg-white  dark:bg-[#111827] w-screen lg:h-[210px] xl:items-center xl:p-2 ${
          hidebar ? "md:h-[175px] sm:h-[155px] h-[139px]" : "h-auto"
        } xl:h-[85px] xl:flex  xl:flex-row shadow-md lg:fixed sticky top-0 -mt-[6px] lg:mt-0 z-10`}
      >
        <div className="mt-1 outline-none  xl:mb-2">
          <GiHamburgerMenu
            onClick={() => {
              setMenu(!menu), setSearch(false), setResults([]);
            }}
            className="lg:hidden  absolute top-8 sm:top-9 right-2 size-6 sm:size-8 md:top-11 text-pink-600"
          />
          <Link href={"/"}>
            <Image
              src="/codeswear.jpg"
              width={350}
              height={350}
              alt="logo"
              priority
              className="sm:mx-auto mx-auto pt-2 pb-3 sm:pb-4 lg:pb-0 lg:pt-2 md:w-[360px] w-[275px] sm:w-[290px]  xl:w-[14vw]"
            />
          </Link>
        </div>
        <div
          className={`mx-w-1300px overflow-x-hidden 2xl:w-[34vw] lg:block ${
            hidebar ? "" : "hidden"
          } `}
        >
          <div
            className="grid lg:grid-cols-[50%_5%] md:grid-cols-[55%_7%] gap-2 relative lg:left-72 md:left-44 sm:grid-cols-[55%_7%] sm:left-36 grid-cols-[50%_12%] left-[20%] mb-3 pt-1 lg:mt-2
          sm:mb-3 xl:hidden  "
          >
            {query && (
              <span
                onClick={() => setQuery("")}
                className=" absolute sm:left-[51%] sm:top-[33%] md:left-[52%] left-[45%] top-[37%] lg:left-[47%] cursor-pointer text-pink-400 "
              >
                <ImCancelCircle className="size-3 sm:size-4" />
              </span>
            )}
            <input
              placeholder="Search From Our Products"
              onChange={(e) => {
              setQuery(e.target.value);
              }}
              value={query}
              ref={inputRef}
              // defaultValue={searchParams.get("query")?.toString()}
              className="border-[1px] border-gray-300 rounded  outline-none pl-3 text-sm  focus:border-pink-400 font-sans  md:h-9 sm:h-8 h-8 left-20 sm:text-md pb-[1px] pr-8 sm:pr-10 "
            />
            <button
              onClick={handleSubmit}
              disabled={!query}
              className="bg-pink-600 xl:w-[4vw] md:h-9 sm:h-8 h-8 md:rounded-[5px] outline-none   hover:bg-pink-700 rounded"
            >
              <Link href={`/search?Query=${query}`}>
                {" "}
                <FaSearch className="size-auto md:mx-auto mx-auto text-white" />
              </Link>
            </button>
          </div>
        </div>
        <div className="lg:ml-[30%] lg:mr-[20%] xl:hidden hidden lg:block  mt-6 text-[14px]">
          <ul className="absolute sm:bottom-3 xl:bottom-5 flex gap-4 mb-0 dark:text-gray-100 items-center ">
            <Link href="/tshirts">
              <li className=" text-[17px] font-sans hover:text-pink-500 font-bold dark:font-medium ">
                T-Shirts
              </li>
            </Link>
            <Link href="/hoodies">
              {" "}
              <li className="text-[17px] xl:text-lg font-sans hover:text-pink-500 font-bold dark:font-medium ">
                Hoodies
              </li>
            </Link>
            <Link href="/mugs">
              <li className=" text-[17px] xl:text-lg font-sans hover:text-pink-500  font-bold dark:font-medium  ">
                Mugs
              </li>
            </Link>
            <Link href="/phones">
              <li className="text-[17px] xl:text-lg font-sans hover:text-pink-500 font-bold dark:font-medium ">
                Phone
              </li>
            </Link>
            <Link href="/shoes">
              <li className="text-[17px] xl:text-lg font-sans hover:text-pink-500 font-bold dark:font-medium ">
                Shoes
              </li>
            </Link>
            <li>
              <div className="relative">
                <button onClick={() => setBar(true)} className="">
                  <AiOutlineShoppingCart className="size-8 text-pink-600 sm:-mb-2  hover:text-pink-700 " />
                </button>
                {/* {Object.keys(cart).length > 0 && ( */}
                <div className="absolute left-[58.2%] bottom-[15px] bg-pink-600 rounded-[50%] w-[19px] h-[19px]">
                  <span className=" text-[11px] relative top-[-2px] left-[5px] font-extrabold dark:text-gray-100 dark:font-normal  ">
                    {Object.keys(cart).length}
                  </span>
                </div>
              </div>
            </li>
            <li className="-mr-5">
              {!user.value && (
                <Link href="/login">
                  <button className="hover:bg-pink-700 w-14 h-[31px] font-sans bg-pink-600 rounded-md text-[14px] dark:font-normal sm:-mb-2  text-white font-bold">
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li>
              {user.value && (
                <button
                  // onMouseOver={() => setNav(true)}
                  onMouseEnter={() => setNav(true)}
                  className=""
                >
                  <MdOutlineAccountCircle className="size-[30px] sm:-mb-2  text-pink-600 hover:text-pink-700" />
                </button>
              )}
            </li>
            <li>
              <div
              // className={`absolute  bottom-2"  ${
              //   !user.value ? "left-[66%]" : "left-[64%]"
              // } `}
              >
                <button onClick={() => setDarkMode(!darkMode)}>
                  <BsFillMoonStarsFill className="size-7 text-pink-600 sm:-mb-2  outline-none hover:text-pink-700 " />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={` lg:hidden   ${
            menu ? "" : "hidden"
          }  text-[14px] h-auto bg-white shadow-md dark:bg-[#374151]`}
        >
          <ul className="  dark:text-gray-100 py-2  text-center">
            <Link href="/tshirts">
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className=" text-[17px] font-sans p-1 text-pink-600 font-bold dark:font-medium "
              >
                T-Shirts
              </li>
            </Link>
            <Link href="/hoodies">
              {" "}
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className="text-[17px] font-sans p-1 text-pink-600 font-bold dark:font-medium "
              >
                Hoodies
              </li>
            </Link>
            <Link href="/mugs">
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className=" text-[17px] font-sans p-1 text-pink-600  font-bold dark:font-medium  "
              >
                Mugs
              </li>
            </Link>
            <Link href="/phones">
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className="text-[17px] font-sans p-1 text-pink-600 font-bold dark:font-medium "
              >
                Phone
              </li>
            </Link>
            <Link href="/shoes">
              <li
                onClick={() => {
                  setMenu(false);
                }}
                className="text-[17px] font-sans p-1 text-pink-600 font-bold dark:font-medium "
              >
                Shoes
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden flex justify-around w-screen bg-white dark:bg-[#111827] fixed -bottom-1 z-10 shadow-lg h-11">
          <div>
            <Link href="/">
              <AiFillHome className="size-7 mt-2  dark:text-pink-600" />
            </Link>
          </div>
          <div>
            <MdOutlineSearch
              onClick={() => {
                setHidebar(!hidebar),
                  setSearch(false),
                  setResults([]),
                  setQuery("");
              }}
              className="size-8 mt-2 dark:text-pink-600"
            />
          </div>
          <div>
            <div className="relative">
              <AiOutlineShoppingCart
                onClick={() => setBar(true)}
                className="size-8 dark:text-pink-600 mt-[7px]  "
              />
              <div className="absolute -right-1 flex justify-center items-center bottom-[17px] bg-pink-600 rounded-[50%] w-[17px] h-[17px]">
                <span className=" text-[10px]  text-white font-medium dark:text-gray-100 dark:font-normal  ">
                  {Object.keys(cart).length}
                </span>
              </div>
            </div>
          </div>
          <div>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="size-7 dark:text-pink-600 mt-2  "
            />
          </div>
          <div>
            {nav && (
              <Link href="/login ">
                <div
                  onClick={() => setNav(false)}
                  className={`${
                    user.value ? "hidden" : ""
                  } max-w-24 h-12  items-center font-sans bg-pink rounded  dark:text-gray-100  text-[14px] dark:font-normal text-black cursor-pointer shadow-lg font-bold flex absolute px-3 bottom-12 right-1 text-sm  dark:bg-[#111827] bg-white`}
                >
                  <BiLogIn className="size-5 mr-1 " /> Login
                </div>
              </Link>
            )}
            {nav && (
              <div
                // onMouseOver={() => setNav(true)}
                onMouseLeave={() => setNav(false)}
                className={`${
                  user.value ? "" : "hidden"
                } w-[150px] h-[80px] bg-white shadow-2xl dark:bg-[#374151] cursor-pointer z-10 font-extrabold text-[14px] text-center py-2 rounded dark:text-gray-100 dark:font-normal absolute bottom-[46px] right-1`}
              >
                <Link href="/myAccount">
                  <p
                    onClick={() => setNav(false)}
                    className=" hover:text-pink-500"
                  >
                    MY Account
                  </p>
                </Link>
                <Link href="/order">
                  <p
                    onClick={() => setNav(false)}
                    className=" hover:text-pink-500"
                  >
                    Orders
                  </p>
                </Link>
                <p
                  onClick={() => {
                    Logout();
                    setNav(false);
                  }}
                  className=" hover:text-pink-500"
                >
                  LogOut
                </p>
              </div>
            )}

            <MdOutlineAccountCircle
              onClick={() => setNav(!nav)}
              className="size-[31px]  mt-[5px]  dark:text-pink-600"
            />
          </div>
        </div>
        {nav && (
          <div
            // onMouseOver={() => setNav(true)}
            onMouseLeave={() => setNav(false)}
            className="lg:block hidden  xl:hidden  w-[150px] h-[80px] bg-white shadow-2xl dark:bg-[#374151] cursor-pointer z-10 font-extrabold text-[14px] text-center py-2 rounded dark:text-gray-100 dark:font-normal absolute lg:left-[55.8%] top-[75%]  sm:left-[63%]"
          >
            <Link href="/myAccount">
              <p onClick={() => setNav(false)} className=" hover:text-pink-500">
                MY Account
              </p>
            </Link>
            <Link href="/order">
              <p onClick={() => setNav(false)} className=" hover:text-pink-500">
                Orders
              </p>
            </Link>
            <p
              onClick={() => {
                Logout();
                setNav(false);
              }}
              className=" hover:text-pink-500"
            >
              LogOut
            </p>
          </div>
        )}
        {bar && (
          <div className="sm:w-[380px] xl:w-[450px] w-screen  h-[100vh] overflow-y-scroll bg-pink-100  dark:bg-[#374151] fixed z-20 right-0 top-0 transition-all duration-1000 ">
            <button
              onClick={() => setBar(false)}
              className="absolute right-4 top-7 cursor-pointer"
            >
              <ImCancelCircle className="size-6 dark:text-gray-100" />
            </button>
            <div>
              <h3 className="text-2xl font-bold font-sans ml-7 pt-6 dark:text-gray-100 ">
                Shopping Cart
              </h3>
              <div className="w-full h-[0.8px] dark:block hidden mt-2 bg-slate-100"></div>
              {Object.keys(cart).length == 0 && (
                <div>
                  <p className="text-[15px] font-sans font-semibold mt-8 ml-14 dark:text-gray-100 ">
                    Your cart is Empty!
                  </p>
                </div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <div key={k} className="flex mx-9 mt-11">
                    <div className="w-[50px] rounded-lg h-[72px] relative">
                      <Image
                        src={cart[k].img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="img"
                        priority
                        className="rounded-lg object-fill w-full h-full"
                      />
                      <div className="absolute left-10 top-[-12px] m-0 p-0 bg-pink-600 rounded-[50%] w-[20px] h-[20px]">
                        <span className="text-[10px] w-full h-full flex justify-center items-center font-extrabold dark:text-gray-100 dark:font-normal">
                          {cart[k].qty}
                        </span>
                      </div>
                    </div>
                    <div className="w-[150px]">
                      <p className="font-semibold font-sans ml-2 mt-[5px] text-[13px] break-words  dark:text-gray-100 ">
                        {cart[k].name}
                        {cart[k].variant && cart[k].size ? (
                          <>
                            ({cart[k].variant}/{cart[k].size} )
                          </>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>

                    <div className="absolute right-9 flex mt-4">
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
                      <span className="font-semibold mx-[3px] dark:text-gray-100 ">
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
                );
              })}
              <h3 className="font-bold dark:text-gray-100 font-sans text-[17px] mt-9 ml-9">
                Subtotal: ${subtotal}
              </h3>
            </div>
            <div className="flex mb-7">
              <Link href="/checkOut">
                <button
                  disabled={Object.keys(cart).length == 0}
                  className="disabled:bg-pink-300 hover:bg-pink-600 w-20 h-[35px] bg-pink-500 rounded text-[14px] text-white ml-9 mt-6"
                >
                  Checkout
                </button>
              </Link>

              <button
                onClick={clearCart}
                disabled={Object.keys(cart).length == 0}
                className=" disabled:bg-pink-300 w-16 h-[35px] bg-pink-500 rounded text-[14px] text-white ml-9 mt-6 relative right-7 hover:bg-pink-600"
              >
                Clear
              </button>
            </div>
          </div>
        )}
        <div className="z-10 shadow-2xl mx-auto w-[61vw] sm:w-[67vw] lg:w-[55.9vw] xl:w-[35vw] 2xl:w-[38vw] relative h-auto dark:bg-[#374151] bg-white xl:left-[19vw] xl:top-[90%] xl:absolute   ">
          {!search &&
            results.map((res, index) => (
              <Link key={res._id} href={`/product/${res.slug}`}>
                <div
                  className="p-4 flex hover:bg-pink-200 dark:hover:bg-pink-600 cursor-pointer"
                  onClick={selected}
                >
                  <div className="w-10 h-12 rounded-lg">
                    <Image
                      priority
                      src={res.img}
                      width={0}
                      height={0}
                      quality={100}
                      sizes="100vw"
                      alt={res.tittle}
                      className="rounded-lg object-fill w-full h-full"
                      onError={() => {
                        handleImage(index);
                      }}
                    />
                  </div>
                  <p className="sm:block hidden md:hidden font-sans pl-2 font-medium pb-2 dark:text-gray-100">
                    {res.tittle.length > 30 ? (
                      <span>{res.tittle.substr(0, 30)}...</span>
                    ) : (
                      res.tittle
                    )}
                  </p>
                  <p className="sm:hidden font-sans pl-2 font-medium pb-2 dark:text-gray-100">
                    {res.tittle.length > 16 ? (
                      <span>{res.tittle.substr(0, 18)}...</span>
                    ) : (
                      res.tittle
                    )}
                  </p>
                  <p className="font-sans md:block hidden pl-2 font-medium pb-2 dark:text-gray-100">
                    {res.tittle}
                  </p>
                </div>
              </Link>
            ))}
          {search && query && (
            <div className="animate-pulse flex space-x-4 p-5 dark:bg-[#1f2937]">
              <div className="rounded bg-slate-700 h-12 w-12"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded "></div>
                <div className="space-y-3">
                  <div className="h-2 bg-slate-700 rounded "></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" xl:block hidden xl:mx-[4vw] 2xl:absolute 2xl:left-[15vw] space-x-2 ">
          {query && (
            <span
              onClick={() => setQuery("")}
              className=" absolute z-50  top-[44%]  2xl:top-[45%] xl:left-[47%] 2xl:left-[34vw] cursor-pointer text-pink-400 "
            >
              <ImCancelCircle className="size-3 sm:size-4" />
            </span>
          )}
          <input
            placeholder="Search From Our Products"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            // defaultValue={searchParams.get("query")?.toString()}
            className="border-[1px] border-gray-300 rounded  outline-none pl-3  focus:border-pink-400 font-sans  xl:w-[30vw] 2xl:w-[35vw] xl:h-9  xl:text-md pr-10 "
          />
          <Link href={`/search?Query=${query}`}>
            <button
              onClick={handleSubmit}
              disabled={!query}
              className="bg-pink-600 xl:w-[4vw] xl:h-9 relative top-3 rounded-[5px] outline-none   hover:bg-pink-700"
            >
              <FaSearch className="size-auto md:mx-auto mx-auto text-white" />
            </button>
          </Link>
        </div>
        <div className="xl:block hidden mt-6 text-[14px]">
          <ul className="absolute xl:bottom-5 2xl:right-[4vw] flex gap-4 mb-0 dark:text-gray-100 items-center ">
            <Link href="/tshirts">
              <li className=" text-[17px] font-sans hover:text-pink-500 font-bold dark:font-medium ">
                T-Shirts
              </li>
            </Link>
            <Link href="/hoodies">
              {" "}
              <li className="text-[17px] xl:text-lg font-sans hover:text-pink-500 font-bold dark:font-medium ">
                Hoodies
              </li>
            </Link>
            <Link href="/mugs">
              <li className=" text-[17px] xl:text-lg font-sans hover:text-pink-500  font-bold dark:font-medium  ">
                Mugs
              </li>
            </Link>
            <Link href="/phones">
              <li className="text-[17px] xl:text-lg font-sans hover:text-pink-500 font-bold dark:font-medium ">
                Phone
              </li>
            </Link>
            <Link href="/shoes">
              <li className="text-[17px] xl:text-lg font-sans hover:text-pink-500 font-bold dark:font-medium ">
                Shoes
              </li>
            </Link>
            <li>
              <div className="relative">
                <button onClick={() => setBar(true)} className="">
                  <AiOutlineShoppingCart className="size-8 text-pink-600 sm:-mb-2  hover:text-pink-700 " />
                </button>
                {/* {Object.keys(cart).length > 0 && ( */}
                <div className="absolute left-[58.2%] bottom-[15px] bg-pink-600 rounded-[50%] w-[19px] h-[19px]">
                  <span className=" text-[11px] relative top-[-2px] left-[5px] font-extrabold dark:text-gray-100 dark:font-normal  ">
                    {Object.keys(cart).length}
                  </span>
                </div>
              </div>
            </li>
            <li className="-mr-5">
              {!user.value && (
                <Link href="/login">
                  <button className="hover:bg-pink-700 w-14 h-[31px] font-sans bg-pink-600 rounded-md text-[14px] dark:font-normal sm:-mb-2  text-white font-bold">
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li className="relative">
              {user.value && (
                <button
                  // onMouseOver={() => setNav(true)}
                  onMouseEnter={() => setNav(true)}
                  className=""
                >
                  <MdOutlineAccountCircle className="size-[30px] sm:-mb-2  text-pink-600 hover:text-pink-700" />
                </button>
              )}
              {nav && (
                <div
                  // onMouseOver={() => setNav(true)}
                  onMouseLeave={() => setNav(false)}
                  className="xl:block hidden   w-[150px] h-[80px] bg-white shadow-2xl dark:bg-[#374151] cursor-pointer z-10 font-extrabold text-[14px] text-center py-2 rounded dark:text-gray-100 dark:font-normal absolute xl:-right-11 xl:-top-3 "
                >
                  <Link href="/myAccount">
                    <p
                      onClick={() => setNav(false)}
                      className=" hover:text-pink-500"
                    >
                      MY Account
                    </p>
                  </Link>
                  <Link href="/order">
                    <p
                      onClick={() => setNav(false)}
                      className=" hover:text-pink-500"
                    >
                      Orders
                    </p>
                  </Link>
                  <p
                    onClick={() => {
                      Logout();
                      setNav(false);
                    }}
                    className=" hover:text-pink-500"
                  >
                    LogOut
                  </p>
                </div>
              )}
            </li>
            <li>
              <div
              // className={`absolute  bottom-2"  ${
              //   !user.value ? "left-[66%]" : "left-[64%]"
              // } `}
              >
                <button onClick={() => setDarkMode(!darkMode)}>
                  <BsFillMoonStarsFill className="size-7 text-pink-600 sm:-mb-2  outline-none hover:text-pink-700 " />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
