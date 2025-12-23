import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js'

export const registerUser =async(req,res)=>{
    try{
        const {fullName,email,password}= req.body
        bcrypt.genSalt(12,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
                if(err) return res.status(500).res(err.message)
                else{
                    const user = await User.create({
                    fullName,
                    email,
                    password:hash
                    })
                 const token= generateToken(user)
                 res.cookie("token",token)
                 res.send("user created successfully")
                }     
            })
        })
       
                
    }catch(err){
        console.log(err.message)
    }
}