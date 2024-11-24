"use client"
require("dotenv").config();
import{ useEffect,React ,useState}from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function MyAccount() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [pass, setPass] = useState("");
const [nPass, setNPass] = useState("");
const [CPass, setCPass] = useState("");
const [pin, setPin] = useState("");
const [Phone, setPhone] = useState("");
const [tracking, setTracking] = useState(false);
const [tname, setTname] = useState("");
const [taddress, setTaddress] = useState("");
const [tpin, setTpin] = useState("");
const [tphone, setTphone] = useState("");
const [isTrue, setIsTrue] = useState(false);
const [isLoading, setIsLoading] = useState(true);


const track = {
  password:'',
  nPassword:'',
  cPassword:''
}

useEffect(()=>{
const isChanged = tname !== name || taddress !==address || tphone != Phone || tpin != pin;
setTracking(isChanged)
},[name,address,pin,Phone])

useEffect(()=>{
  const isChanged = track.password != pass || track.nPassword !=nPass || track.cPassword !=CPass
  setIsTrue(isChanged)
},[pass,CPass,nPass])


  const router = useRouter();
    useEffect(() => {
      const Token =(localStorage.getItem('token'))
    if (!Token) {
      router.push("/");

    }
    FetchData(Token)
      
    setTimeout(() => {
        setIsLoading(false);
      }, 500);

  }, []);

  const FetchData = async (token) => {
  
    let data = {token:token };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let response = await res.json();

    if(response.success){
    setEmail(response.data.email);
    setAddress(response.data.address);
    setPhone(response.data.phone);
    setName(response.data.name);
    setPin(response.data.pincode);
    setTname(response.data.name);
    setTaddress(response.data.address);
    setTpin(response.data.pincode);
    setTphone(response.data.phone);


  }
};

 const handleSubForm = async (evt) => {
evt.preventDefault()
    const token =  localStorage.getItem('token')  
   let data = { token, name,pin,Phone,address };
   let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateInfo`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   });

   let response = await res.json();
     if(response.success){
 toast.success("Account has been updated successfully!")
    // setTracking(false)
     }
     else{
      toast.error("something went wrong")
     }
   }

 const handlePass = async (evt) => {
   evt.preventDefault();
    if (CPass.length < 8 || nPass.length < 8)
      return toast.error("Your Password must contain at least 8 characters ");
   const token = localStorage.getItem("token");
   if(CPass === nPass){
   let data = { token,pass,CPass,nPass };
   let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatePass`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   });

   let response = await res.json();
   if (response.success) {
     toast.success("Password has been updated successfully!");
   } else {
     toast.error(response.error);
   }
   setPass("")
   setCPass("")
   setNPass("")

  }
  else{
     toast.error("New password and Confirm Password doesn't match");
      setPass("");
      setCPass("");
      setNPass("");
  }
 };



  let setValue = async(evt)=>{
  if (evt.target.name === "name") {
    setName(evt.target.value);
  } else if (evt.target.name === "email") {
    setEmail(evt.target.value);
  } else if (evt.target.name === "address") {
    setAddress(evt.target.value);
  } else if (evt.target.name === "pass") {
    setPass(evt.target.value);
  } else if (evt.target.name === "cPass") {
    setCPass(evt.target.value);
  } else if (evt.target.name === "nPass") {
    setNPass(evt.target.value);
  } else if (evt.target.name === "pin") {
    setPin(evt.target.value);
  }
  else if(evt.target.name === "phone"){
    setPhone(evt.target.value)
  }
    // if(evt.target.value.length == 5){
    //  let data = await fetch("http://localhost:3000/pincode");
    // let jsonData = await data.json();
    //  setCode(jsonData)
  //   if (Object.keys(jsonData).includes(evt.target.value)) {
  //     // setCity(jsonData[evt.target.value][0]);
  //     // setState(jsonData[evt.target.value][1]);
  //     // // console.log(checkPin[0])
  //   } else {
  //   //   setCity("");
  //   //   setState("");
  //   // }
  //   } 
  //   else{
  //   //        setCity("");
  //   //        setState("");
  //   // }
  // }
    }
  
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
        <div className="dark:bg-[#1f2937] pb-20 ">
          <div className="-mt-8 lg:mt-44  xl:mt-14  w-[100%] pb-10 overflow-hidden ">
            {/* <figure className="w-32  absolute top-20 left-[45%] "> */}
            {/* <img
          src="/codes.jpg"
          className="w-10"
        /> */}
            {/* </figure> */}
            <h3 className="text-center dark:text-gray-100 text-2xl font-sans font-bold relative top-14">
              <span>
                <img src="/codes.jpg" className="w-10 inline mb-1" />
              </span>
              My Account
            </h3>
            <div className=" sm:relative md:-left-48 sm:-left-40  lg:-left-72 sm:top-24 mt-24 sm:mt-0">
              <form
                onSubmit={handleSubForm}
                className="lg:max-w-sm mx-auto md:w-[330px] sm:w-[275px] w-[80vw]"
                method="POST"
              >
                <p className="font-sans font-medium text-lg dark:text-gray-100 mb-8 pt-3 sm:hidden text-black">
                  1.Update Personal Info
                </p>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-100 "
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="pin"
                    className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-100 "
                  >
                    Pincode
                  </label>
                  <input
                    type="number"
                    id="pin"
                    name="pin"
                    value={pin}
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    placeholder=""
                    required
                  />
                </div>
                <div className="flex items-start -mt-3 mb-4">
                  <label
                    htmlFor="remember"
                    className="ms-2 text-[12px] font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your Postal/zip pincode
                  </label>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 "
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    value={Phone}
                    name="phone"
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    placeholder=" Enter your 11 digit phone number"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 "
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    name="address"
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    required
                  />
                </div>

                <button
                  disabled={!tracking}
                  onClick={handleSubForm}
                  type="submit"
                  className="text-white bg-pink-600 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-600 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-600"
                >
                  {tracking ? "Submit" : "Update"}
                </button>
              </form>
            </div>
            <div className="sm:relative lg:left-64 md:left-48 sm:left-40 pt-8 sm:pt-0 sm:mt-0 sm:-top-80">
              <form
                onSubmit={handlePass}
                className="lg:max-w-sm md:w-[330px] sm:w-[275px] mx-auto w-[80vw]"
                method="POST"
              >
                <p className="font-sans font-medium text-lg dark:text-gray-100 mb-8 mt-8 sm:hidden text-black">
                  2.Update Password
                </p>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    readOnly
                    value={email}
                    name="email"
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    placeholder=""
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="flex items-start -mt-3 mb-4">
                  <label
                    htmlFor="alert"
                    className="ms-2 text-[12px] font-medium text-gray-900 dark:text-gray-400 "
                  >
                    Email can't be changed
                  </label>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="pass"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 "
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="pass"
                    value={pass}
                    name="pass"
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="npassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 "
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="npassword"
                    value={nPass}
                    name="nPass"
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    placeholder="••••••••"
                    required
                    autoComplete="New-password"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="Cpassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="Cpassword"
                    value={CPass}
                    name="cPass"
                    onChange={setValue}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-pink-600 dark:focus:border-pink-600 outline-none focus:ring-[1.4px]"
                    required
                    placeholder="••••••••"
                    autoComplete="confirm-password"
                  />
                </div>

                <button
                  disabled={!isTrue}
                  onClick={handlePass}
                  type="submit"
                  className="text-white bg-pink-600 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-600 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-600"
                >
                  {isTrue ? "Submit" : "Update"}
                </button>
              </form>
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
      )}
    </>
  );
}

