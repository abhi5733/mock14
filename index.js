const express = require("express")
require("dotenv").config()
const {connection} = require("./config/db")
const {auth} = require("./middleware/auth")
 const app = express()
const {userRouter} = require("./routes/userRoutes")
const {BankRouter}  = require("./routes/bankRoutes")
const cors = require("cors")
app.use(express.json())
app.use(cors())


app.use("/user" , userRouter)
app.use(auth)
app.use("/bank" , BankRouter)




 app.listen(process.env.port, async ()=>{

    try{

        await connection
        console.log({"msg":"connected to db"})

    }catch(err){
        
        console.log({"msg":" not connected to db"})
    }

    console.log({"msg":`connected to ${process.env.port}`})

 })