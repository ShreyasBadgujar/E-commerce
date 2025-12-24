import express from 'express'
import Product from '../models/product.model.js'
import upload from '../config/multer-config.js'
const router = express.Router()

router.post('/create',upload.single('image'),async(req,res)=>{
    try{
        const {name,price,discount,bgcolor,panelcolor,textcolor} = req.body
    const newProduct = await Product.create({
        image:req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    })
    res.send("Producr Created  successfully")
    res.redirect('/owner/admin')
  }catch(err){
    res.send(err.message)
  }
})

export {router}