"use client";
// // contexts/CartContext.js
// // import React from "react";
// // import React, { createContext, useState, useContext, useEffect } from "react";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams,usePathname  } from "next/navigation";
var jwt = require("jsonwebtoken");


// // export const CartContext = createContext();


// // export const useCart = () => useContext(CartContext);

// // export const CartProvider = ({ children }) => {

// 


// //   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// // };

// // export default CartContext;

// // // export const useCart = () => {
// // //   return useContext(CartContext);
// // // };

const AppContext = createContext();

export function AppWrapper({ children }){
const [cart, setCart] = useState({});
const [subtotal, setSubtotal] = useState(0);
const [bar, setBar] = useState(false);
const [user,setUser] = useState({value:null})
const  pathname = usePathname()
const router = useRouter()
const param = useSearchParams()

useEffect(()=>{
 const checkTokenAndLogout = () => {
   const token = localStorage.getItem("token");
   // Check if token is absent or expired
   if (!token || jwt.decode(token).exp * 1000 < Date.now()) {
    localStorage.removeItem('token')
      setUser({ value: null })
   }
 };

checkTokenAndLogout()
},[pathname,param])

useEffect(()=>{
   
   try{
    if(localStorage.getItem("Cart")){
        setCart(JSON.parse(localStorage.getItem("Cart")))
        setSubtotal(JSON.parse(localStorage.getItem("subtotal")))
    }
}
catch(error){ 
    console.error(error)
    localStorage.clear()

}  
},[])

useEffect(()=>{

if(localStorage.getItem('token')){
  const Token = localStorage.getItem('token')
  setUser({value:Token})
}
},[param])

const Logout=()=>{
  localStorage.removeItem('token')
  setUser({value:null})
  router.push('/');
}




const SaveCart = (newCart) => {
  localStorage.setItem("Cart",JSON.stringify(newCart));
  // localStorage.setItem("Cart", JSON.stringify(cart));
  let subt = 0;
  let keys = Object.keys(newCart);
  for (let i = 0; i < keys.length; i++) {
    
    subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    
  }
  setSubtotal(subt.toFixed(0));
  localStorage.setItem("subtotal",JSON.stringify(subt.toFixed(0)));
};

const addToCart = (itemCode, qty, name, price, size, variant, img) => {
  let myCart = cart;
  if (itemCode in cart) {
    myCart[itemCode].qty = cart[itemCode].qty + qty;
  } else {
    myCart[itemCode] = { qty: 1, name, price, size, variant, img };
  }

  setCart(myCart);
  SaveCart(myCart);

}


const BuyNow = (itemCode, qty, name, price, size, variant, img) => {
  
  let newCart = { itemCode :{ qty, name, price, size, variant, img }};
  setCart(newCart);
  SaveCart(newCart);
  console.log(newCart)
  router.push('/checkOut',{redirect:true})
};

const clearCart = () => {
  setCart({});
  SaveCart({})
};

const removeItemFromCart = (itemCode, name, price, qty, size, variant, img) => {
  let myCart = cart;
  if (itemCode in cart) {
    myCart[itemCode].qty = cart[itemCode].qty - qty;
  }

  if (myCart[itemCode].qty <= 0) {
    delete myCart[itemCode];
  }
  setCart(myCart);
  SaveCart(myCart);
};

  return (
    <AppContext.Provider
      value={{addToCart, clearCart, removeItemFromCart, subtotal,cart,bar,setBar,BuyNow,Logout,user}}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(){
  return useContext(AppContext);
}