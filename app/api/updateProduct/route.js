
import dbConnect from "@/app/middleWare/mongoose";
import product from "@/app/models/product";



export async function POST(req, res) {

await dbConnect(POST);


  try {
let data = await req.json();
for(let item in data){
  // console.log ()
    let update = await product.findByIdAndUpdate(data[item]._id,data[item]);


  }     

// Fetch all products from MongoDB
    return Response.json({success:"true"});
  }
  
  catch (error) {
    console.error("Error fetching products:", error);
    return Response.json({ error: "Failed to fetch products" });
  }
}
