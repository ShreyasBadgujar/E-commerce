import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js'

export const registerUser =async(req,res)=>{
    try{
        const {fullName,email,password}= req.body
        const user = await User.findOne({email})
        if(user) return res.status(401).send('User already exsist')
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

export const loginUser = async (req,res)=>{
    const {email,password}= req.body
    const user= await User.findOne({email:email})
    if(!user) return res.status(402).send("Email or Password incorrect")
    
    bcrypt.compare(password,user.password,(err,result)=>{
        if(err) return res.status(500).send(err.message)
        if(result){
            const token= generateToken(user)
            res.cookie("token",token)
            res.send("User loggedIn")
        }else{
             return res.status(402).send("Email or Password incorrect")
        }
    })
    
}

export const logoutUser = (req,res)=>{
    res.cookie("token","")
    res.redirect('/')
}