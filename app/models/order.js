const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    products:[{
        productId:{type:String},
        quantity:{type:Number,default:1}
    }],
    address:{type:String,required:true},
    amount:{type:String,required:true},
    status:{type:String,default:'pending',required:true}
},{timestamps:true})

// export default mongoose.model("Order",OrderSchema);
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);