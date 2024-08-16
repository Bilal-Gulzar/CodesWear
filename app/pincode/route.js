import  pincode  from "./data.json";



export  async function GET(req,res) {
    return Response.json(pincode)

}