
 const mongoose = require("mongoose")


 const userSchema = mongoose.Schema({
 Name :String,
 Gender:String,
DOB:String,
Email:String,
Mobile:String,
Balance:Number,
Adhar:String,
Pan :String,
 })

 const userModel = mongoose.model("account" , userSchema)

 module.exports = {userModel}