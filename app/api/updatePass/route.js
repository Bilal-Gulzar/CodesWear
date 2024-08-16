require("dotenv").config();
import dbConnect from "@/app/middleWare/mongoose";
import user from "@/app/models/user";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

export async function POST(req) {
  try {
    let body = await req.json();
    //   console.log(body.name)
    await dbConnect();
    let {token,pass,CPass,nPass } = body
    const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const User = await user.findOne({ email: verify.email });
    var bytes = CryptoJS.AES.decrypt(User.password, process.env.SECRET_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    if(pass === originalText && CPass === nPass){
      const updatePassword =  await user.findOneAndUpdate({email:User.email},{password:CryptoJS.AES.encrypt(nPass,process.env.SECRET_KEY).toString()})
    return Response.json({ success: true});
    }
    else{
        return Response.json({success:false , error:"current password not match"})
    }
  }
   catch (error) {
    return Response.json(error);
  }
}
