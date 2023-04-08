
const jwt = require("jsonwebtoken")

 const auth = (req,res,next)=>{

    let token = req.headers.authorization

    const decoded = jwt.verify(token, 'masai')
   req.body.userID = decoded.userID

    
    if(decoded){
        next()
    }else{
        res.send({"msg":"something went wrong"})
    }


 }

 module.exports = {auth}