
const express = require("express")
const jwt = require("jsonwebtoken")
const BankRouter = express.Router()
const {userModel} = require("../models/userModels")


BankRouter.get("/" ,async(req,res)=>{



    try{

        let user = await userModel.findById({_id:req.body.userID})
        res.send(user)
    
    }catch(err){
        res.send({"msg":"login successfull" , "token":token})
    }

})

BankRouter.patch("/updateKYC" ,async(req,res)=>{



    try{

        let user = await userModel.findByIdAndUpdate({_id:req.body.userID},req.body)
        res.send({"msg":"updated successfully"})
    
    }catch(err){
        res.send({"msg":"something went wrong"})
    }

})

BankRouter.patch("/transfer" ,async(req,res)=>{

    const {Email,Pan,prev,Balance} = req.body

    let users = await userModel.findOne({Email,Pan})
if(users){
    try{
        let obj1={Balance: +users.Balance + +Balance }
        await userModel.findByIdAndUpdate({_id:users._id},obj1)
let obj={Balance: +prev- +Balance }
         await userModel.findByIdAndUpdate({_id:req.body.userID},obj)
        res.send({"msg":"updated successfully"})
    
    }catch(err){
        res.send({"msg":"something went wrong"})
    }
}else{
    res.send({"msg":"something went wrong"})
}
})

BankRouter.delete("/close" , async (req,res)=>{

    const {userID} = req.body

    try{
        await userModel.findByIdAndDelete({_id:userID})
        res.send({"msg":"deleted successfully"})

    }catch(err){
        res.send({"msg":"something went wrong"})
    }

})







module.exports = {BankRouter}

