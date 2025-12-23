import mongoose from "mongoose";

mongoose.connect('https://127.0.0.1:27017/e-commerce').then(()=>{
    console.log("Database connected");
})

const userSchema = mongoose.Schema({
    fullName: String,
    email:String,
    password:String,
    cart:{
        type: Array,
        default:[]
    },
    isAdmin:Boolean,
    orders: {
        type: Array,
        default:[]
    },
    contact: Number,
    picture: String
})

const User = mongoose.model('user',userSchema)
export default User