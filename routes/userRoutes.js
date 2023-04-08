
const express = require("express")
const jwt = require("jsonwebtoken")
const userRouter = express.Router()
const {userModel} = require("../models/userModels")



userRouter.post("/openAccount" , async (req,res)=>{

    const {Email,Pan} = req.body

    let users = await userModel.findOne({Email,Pan})
console.log(users)
    if(!users){

     try{

        let user = new userModel(req.body)
         await user.save()
         console.log(user)
        const token = jwt.sign({ userID: user._id }, 'masai')

      res.send({"msg":"succesfully created" , "token":token})

     }catch(err){
        res.send({"msg":"something went wrong"})
     }
    }else{
        const token = jwt.sign({ userID: users._id }, 'masai')
        res.send({"msg":"login successfull" , "token":token})
    }


   
} )



module.exports = {userRouter}

