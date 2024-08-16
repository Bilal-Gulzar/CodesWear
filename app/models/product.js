const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    tittle:{type: String, required: true },
    slug:{type:String,required:true,unique:true},
    desc:{type:String ,required:true},
    img:{type:String ,required:true},
    category:{type:String ,required:true},
    size:{type:String},
    color:{type:String },
    price:{type:Number ,required:true},
    availableQty:{type:Number ,required:true}},
  { timestamps: true }
);


// Create a text index on the `name` and `description` fields
ProductSchema.index({ tittle: 'text', desc: 'text' });

// export default mongoose.model("Order",OrderSchema);
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
