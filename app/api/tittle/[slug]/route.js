import Product from "@/app/models/product";
import ConnectDB from "@/app/middleWare/mongoose";
import product from "@/app/models/product";

export async function GET(req, { params }) {
  const { slug } = params;

  await ConnectDB(GET);

  let Products = await Product.find({ slug: slug });

 
  let Tittle = Products[0].tittle
  let Category = Products[0].category
    

 let getall = await product.find({tittle: Tittle ,category:Category })

  return Response.json(getall);
}
