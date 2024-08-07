const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    pname:{type:String,required:true},
    desc:{type:String, required:true},
    price:{type:Number,required:true},
    Image:{type:String,required:true}
   
},{timestamps:true})

const ProductModel = new  mongoose.model("Product",ProductSchema)
module.exports = ProductModel