require("dotenv").config();
import dbConnect from "@/app/middleWare/mongoose";
import user from "@/app/models/user";
var jwt = require("jsonwebtoken");
// import jwt from "jsonwebtoken";
//


export async function POST (req){
try{
    const body =  await req.json()
// const token = req.authorization
// console.log(token)
await dbConnect()
const decode = jwt.verify(body.token,process.env.JWT_SECRET_KEY)
 const User = await user.findOne({email:decode.email})
        let {email,address,phone,name,pincode} = User        
        let dbUser =  {email,address,phone,name,pincode}     
  return Response.json({success:true, data:dbUser});
}catch(error){

    return Response.json(error)
}
};
