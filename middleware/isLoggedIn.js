import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const isLoggedIn = async(req,res,next)=>{
    if(!req.cookie.token){
        req.send("Log in first")
       return res.redirect('/')
    }

    try{
        const decoded=jwt.verify(req.cookie.token,process.env.JWT_TOKEN);
        const user = await User
        .find({email:decoded.email})
        .select("-passsword")

        req.user= user
    }catch(err){
        req.send("error","something went wrong")
        res.redirect('/')
    }
}