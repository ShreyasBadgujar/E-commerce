import mongoose from "mongoose";
import dbgr from "debug";
import config from 'config'

const debug =dbgr('development:mongoose')
const mongoDB =mongoose
.connect(`${config.get('MONGODB_URL')}/e-commerce`)
.then(()=>{
    debug("Database connected");
})
.catch((err)=>{
   console.error(err);
})

export default mongoDB