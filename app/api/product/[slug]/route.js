import Product from "@/app/models/product";
import ConnectDB from "@/app/middleWare/mongoose";

export async function GET(req,{params}) {
  const { slug } = params;
  
  await ConnectDB(GET);

  let Products = await Product.find({slug : slug});
  if(Products.length == 1){
  return Response.json({success:true,Products});
  }else{
    return Response.json({success:false,error:"Invalid slug"})
  }
}
