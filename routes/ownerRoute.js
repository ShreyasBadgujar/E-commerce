import express from 'express'
import Owner from '../models/owner.model.js'
const router = express.Router()

// console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV==='development'){
    router.post('/create',async(req,res)=>{
    const owner = await Owner.find()
    if(owner.length>0){ 
        return res.status(500).send("Sevice Unavaliable")
    }
    else{
        const {fullName,email,password}= req.body
        const createOwner = await Owner.create({
            fullName,
            email,
            password
        })
        res.send(createOwner)
    }
    
})
}
router.get('/',(req,res)=>{
    res.send("hello world")
})

export {router}