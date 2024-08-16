// pages/api/search.js
import dbConnect from "@/app/middleWare/mongoose";
import product from "@/app/models/product";

export async function GET(req, res) {
  //   const  query  = req.query
  //   const query = await req.nextUrl.searchParams;
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const page = parseInt(searchParams.get("pageno"), 10);
  const query = searchParams.get("query")
  const pageSize = 12; // Number of items per pag
  await dbConnect();

  try {
     const skip = (page - 1) * pageSize;
    const results = await product.find({ $text: { $search: query } }).skip(skip).limit(pageSize).exec();
       const totalCount = await product.countDocuments({ $text: { $search: query } }).exec();
       const totalPages = Math.ceil(totalCount / pageSize);
      
    if (results.length > 0) {
      return Response.json({ success: true, results: results ,totalPages:totalPages });
    } else {
      return Response.json({ success: false, Message: "No result found" });
    }
  } catch (error) {
    // return Response.json({ error: "Failed to fetch search results" });
    return Response.json(error);
  }
}
