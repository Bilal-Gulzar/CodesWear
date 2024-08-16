import Product from "@/app/models/product";
import dbConnect from "@/app/middleWare/mongoose";
import product from "@/app/models/product";


export async function GET (req,{params}){
  const { slug } = params;
  // const page = await req.nextUrl.searchParams;
  const url = new URL(req.url)
  const searchParams = new URLSearchParams(url.searchParams)
  const page = parseInt(searchParams.get('pageno'),10)
  const pageSize = 12; // Number of items per page
  await dbConnect();
  // await ConnectDB(GET);
  try {
    // const skip = (page - 1) * pageSize; // Calculate items to skip
    // let Products = await product.find({ category: slug })
    //   .skip(skip)
    //   .limit(pageSize)
    //   .exec(); // Execute query to fetch items

    //   const totalCount = await product.countDocuments({ category: slug }).exec();
    //   const totalPages = Math.ceil(totalCount / pageSize);

    let Products = await product.find({ category: slug });
    let tshirts = {};
    for (let item of Products) {
      if (item.tittle in tshirts) {
        if (!tshirts[item.tittle].color.includes(item.color)) {
          if (item.color) {
            tshirts[item.tittle].color.push(item.color);
          }
        }
        if (!tshirts[item.tittle].size.includes(item.size)) {
          if (item.size) {
            tshirts[item.tittle].size.push(item.size);
          }
        }
      } else {
        tshirts[item.tittle] = JSON.parse(JSON.stringify(item));
        if (item.availableQty > 0) {
          tshirts[item.tittle].color = [item.color];
          tshirts[item.tittle].size = [item.size];
        }
      }
    }
    const keys = Object.keys(tshirts);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedTitles = keys.slice(start, end);
    // Prepare paginated result
    const paginatedProducts = {};
    paginatedTitles.map((title) => (paginatedProducts[title] = tshirts[title]));

     const totalCount = Object.keys(tshirts).length;
     const totalPages = Math.ceil(totalCount / pageSize);
    // // Check if there are more items
    // const totalCount = await Product.countDocuments({ category: slug }).exec();
    // const hasMore = skip + pageSize < totalCount;

    return Response.json({ tshirts:paginatedProducts, totalPages });
  } catch (error) {
    return Response.json({ error: "error" });
  }
}
// export default  ConnectDB(GET) ;





