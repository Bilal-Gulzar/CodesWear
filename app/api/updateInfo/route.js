require("dotenv").config();
import dbConnect from "@/app/middleWare/mongoose";
import user from "@/app/models/user";
var jwt = require("jsonwebtoken");


export async function POST(req){
  try {
      let body = await req.json();
    //   console.log(body.name)
      await dbConnect();
      let {address, Phone, name, pin } = body;
      
    const verify = jwt.verify(body.token, process.env.JWT_SECRET_KEY);
    const User = await user.findOneAndUpdate({ email: verify.email},{ name: name,address:address,phone:Phone,pincode:pin });

     return Response.json({ success: true});
  } catch (error) {
    return Response.json(error);
  }
}
