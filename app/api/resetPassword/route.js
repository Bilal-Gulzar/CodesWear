require("dotenv").config();
import dbConnect from "@/app/middleWare/mongoose";
import user from "@/app/models/user";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

export const POST = async (req) =>{
try{
    await dbConnect()
let body = await req.json()
const {token,pass,cpass} = body
const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
if(pass === cpass){
const resetPassword = await user.findByIdAndUpdate({_id:decoded.id},{password: CryptoJS.AES.encrypt(cpass,process.env.SECRET_KEY).toString()})
// const resetPassword = await user.findByIdAndUpdate({ _id:decoded.id},{password:"11111"});
return Response.json({success:true ,message:"password successfully reset "});


}
else{
    return Response.json({success:false, error:"pass and cpass not match"})
}

}
catch(error){
return Response.json({ success:false, error: "Token is invalid or expired "})


}

} 
