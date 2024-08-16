const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required:true },
    phone: { type: Number, required: true },
    pincode: { type: Number,required:true},
    address: { type: String, default: "", required: true },
  },
  { timestamps: true }
);




// OR mongoose.models = 
// export default mongoose.model("Order",OrderSchema);
export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
