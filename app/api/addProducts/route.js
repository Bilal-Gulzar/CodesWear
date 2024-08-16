 "  use server"
// import ConnectDB from "@/app/middleWare/mongoose";
import dbConnect from "@/app/middleWare/mongoose";
import product from "@/app/models/product";


export async function POST(req,res) {
  await dbConnect();
  
  const body = await req.json();
  // tittle,    
  //  slug,
  //  desc,
  //  img,
  //  category,
  //  size,
  //  color,
  //  price,
  //  availableQty
  // console.log(body)

  // // if(req.body === 'POST'){}
  // const { tittle, slug, desc, img, category, size, color, price, availableQty } = await req.json();

  try {
    for(let i=0; i < body.length; i++){
    let data = new product(body[i])
    let a = await data.save();

     } 

    return Response.json({ success: "true" });
  }  
  catch (error) {
    return Response.json({ Status:400 , error: "Sluge must be unique" });
  }
}

// export default dbConnect();







