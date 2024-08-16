import Product from "@/app/models/product";
import ConnectDB from "@/app/middleWare/mongoose";

export async function GET(req, res) {
  await ConnectDB(GET);
  // console.log(req.URL);
  try {
    let Products = await Product.find({});
    return Response.json(Products);
  } catch (error) {
    return Response.json({ error: "error" });
  }
}
export default ConnectDB(GET);
