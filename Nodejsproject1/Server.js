const express = require ("express")
const app = express()

// app.use(express.urlencoded())
app.use(express.json())
const cors = require ("cors")
app.use(cors())
const path=require("path")
app.use('/files/uploads',express.static(path.join(__dirname,"files/uploads")))

const mongoose = require("mongoose")
const MONGODB_URL = "mongodb://127.0.0.1:27017/resturant"


const UserRouter = require("./Router/UserRouter")
app.use(UserRouter)

const ProductRoute = require("./Router/ProductRoute")
app.use(ProductRoute)


mongoose.connect(MONGODB_URL)
   .then(()=>{
       console.log("DB Connection Succeeded...");
   })
   .catch((err)=>{
        console.log("DB Connection failled...",err);
   })

   app.listen(4005,()=>{
    console.log("server lisitening on port 4005");

})  









