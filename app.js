import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url';
import mongoDB from './config/mongoose-connection.js';
import {router as ownerRoute} from './routes/ownerRoute.js'
import {router as productRoute} from './routes/productRoute.js'
import {router as userRoute} from './routes/userRoute.js'
import dotenv from 'dotenv';
import flash from 'flash';
import expressSession from 'express-session';

dotenv.config();

const app= express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use(
//     expressSession({
//         resave:false,
//         saveUninitialized:false,
//         secret:process.env.EXPRESS_SESSION_SECRET
//     })
// )
// app.use(flash())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get('/',(req,res)=>{
    res.render('authPage')
})
app.use('/owner',ownerRoute)
app.use('/product',productRoute)
app.use('/user',userRoute)

app.listen(3000,()=>{
    console.log("Server is Running on 3000")
})