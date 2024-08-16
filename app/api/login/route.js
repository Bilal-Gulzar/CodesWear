require("dotenv").config();
import dbConnect from "@/app/middleWare/mongoose";
import user from "@/app/models/user";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

export async function POST(req) {
  const body = await req.json();

  try {
    await dbConnect();

    let User = await user.findOne({ email: body.email });
    if (User) {
      var bytes = CryptoJS.AES.decrypt(User.password,process.env.SECRET_KEY);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
       if (User.email === body.email && originalText === body.password) {
        var token = jwt.sign({ name: User.name, email: User.email ,phone:User.phone,pincode:User.pincode ,address:User.address},process.env.JWT_SECRET_KEY,{ expiresIn: '1d' });
         return Response.json({success: true, token});
       } else {
         return Response.json({ success: false, error: "Invalid Credentials" });
       }
    } else {
      return Response.json({ success: false, error: "User Not found" });
    }
  } catch (error) {
    return Response.json({ status: 400, error: "Internal serval Error" });
  }
}
