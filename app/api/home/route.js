import dbConnect from "@/app/middleWare/mongoose";
import product from "@/app/models/product";
import { connect } from "mongoose";

export const GET = async(req,res)=>{
try{
    await dbConnect()
  const products = await product.find()
  const homePageProducts = products.filter(
    (v) =>
      v.slug === "js-oversizedtshirt-black-s" ||
      v.slug === "i-have-3-moods-tshirt-bottlegreen M" ||
      v.slug ===
        "we-are-all-artist-music-graphic-regular-fit-tshirt-lavender-s" ||
      v.slug === "yes-iam-different-hoodie-bottlegreen-s" ||
      v.slug === "rabbit-face-design-hoodie-black-s"
  );

  const p1 = homePageProducts.slice(0,3)
  const p2 = homePageProducts.slice(3)
 return Response.json({ success:true, product1:p1, product2:p2 }) 
}
catch(error){
    return Response.json(error)
}


} 