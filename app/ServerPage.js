




export default async function ServerPage ({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  });
  let repo = await res.json();

  const fatching = await fetch(`http://localhost:3000/api/tittle/${slug}`, {
    cache: "no-store",
  });
  const Products = await fatching.json();

  let colorOption = {};
  Products.forEach((item) => {
    if (!colorOption[item.color]) {
      colorOption[item.color] = {};
    }
    colorOption[item.color][item.size] = item.slug;
  });

  return {
     props : {
      repo: repo 
     }
  }

  // useEffect(()=>{
  //   if(colorOption){
  // // setVariant(colorOption);
  //   }
  // },[colorOption])

  // setColor(colorOption)
  // this also usable logic
  //    if (!colorOption[item.color]) {

  //      colorOption[item.color] = {};

  //   }
  //   colorOption[item.color][item.size] =item.slug;
  // // }
  // console.log(params.slug)
  //   // console.log(colorOption)
}
