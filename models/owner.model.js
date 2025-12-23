import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
    fullName: {
        type:String,
        minLength:5,
        trim:true,
    },
    email:String,
    password:String,
    cart:{
        type: Array,
        default:[]
    },
    isAdmin:Boolean,
    products: {
        type: Array,
        default:[]
    },
    picture: String,
    gstin: String,
})

const Owner = mongoose.model('owner',ownerSchema)
export default Owner