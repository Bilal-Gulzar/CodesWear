// pages/api/search.js
import dbConnect from "@/app/middleWare/mongoose";
import product from "@/app/models/product";

export async function GET(req, res) {
//   const  query  = req.query
const  query = await req.nextUrl.searchParams

  await dbConnect();

  try {
    const results = await product.find({ $text: { $search: query } });
    if(results.length>0){
      
        return Response.json({ success: true, results: results });
    }else{
    return Response.json({ success:false,Message:"No result found" });

    }
  } catch (error) {
    // return Response.json({ error: "Failed to fetch search results" });
    return Response.json(error);
  }
}
