import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url';
import mongoDB from './config/mongoose-connection.js';
import {router as ownerRoute} from './routes/ownerRoute.js'
import {router as productRoute} from './routes/productRoute.js'
import {router as userRoute} from './routes/userRoute.js'


const app= express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use('/owner',ownerRoute)
app.use('/product',productRoute)
app.use('/user',userRoute)

app.listen(3000,()=>{
    console.log("Server is Running on 3000")
})