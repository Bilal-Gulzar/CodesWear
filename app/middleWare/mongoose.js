// import mongoose from "mongoose";


// const ConnectDB = handler=> async (req,res)=>{

//     if(mongoose.connection[0].readyState){
//         return handler(req,res);
//     }

//     await mongoose.connect(process.env.MONGO_URI)
//     return handler(req,res);
    
// }

// export default ConnectDB;





// / lib/dbConnect.js

// import mongoose from "mongoose";

// const MONGODB_URI = "mongodb://localhost:27017/codesWear";

// let cachedDb = null;

// export default async function dbConnect() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   try {
//     const db = await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//     cachedDb = db;
//     return db;
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//     throw err;
//   }
// }

import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/codesWear";

let cachedDb = null;

export default async function dbConnect() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
    cachedDb = db;
    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
