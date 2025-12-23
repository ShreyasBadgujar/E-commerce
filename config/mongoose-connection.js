import mongoose from "mongoose";

const mongoDB =mongoose
.connect('mongodb://127.0.0.1:27017/e-commerce')
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
   console.error(err);
})

export default mongoDB