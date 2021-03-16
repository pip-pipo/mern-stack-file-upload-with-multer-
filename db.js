/** @format */

import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

// URI = mongodb://localhost/todo
// URI = mongodb+srv://root2:root2@cluster0.wslry.mongodb.net/root2?retryWrites=true&w=majority

const uri = process.env.URI

const db = () =>
 mongoose.connect(uri, {
   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify:true
  })
  .then(() => console.log(`db Connection Success`))
  .catch(() => console.log("db connect Error"))

export  {db}
