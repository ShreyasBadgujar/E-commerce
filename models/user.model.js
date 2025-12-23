import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type:String,
        minLength:5,
        trim:true,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cart:{
        type: Array,
        default:[]
    },
    orders: {
        type: Array,
        default:[]
    },
    contact: Number,
    picture: String
})

const User = mongoose.model('user',userSchema)
export default User