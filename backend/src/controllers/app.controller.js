const User = require('../models/user.model')
const redis = require("../configs/redis")


async function getuser(req,res) {
    try{
        const cachedUser = await redis.get("users:data")
        if(cachedUser){
          console.log("cached hit")
          return res.status(200).json({user: JSON.parse(cachedUser)})
        }

        console.log("Cache MISS")
        const user = await User.find()
        await redis.set("users:data", JSON.stringify(user), "EX", 300)
        return res.status(200).json({ user })
    }
    catch(err){
        return res.status(500).json({msg : "Internal server error"})
    }
    
}


async function reg(req,res) {
    const {name,email} =req.body
    const user = await User.create({
        name,
        email
    })
    return res.status(200).json({msg : "User inserted done",user})
}

module.exports ={
    getuser,
    reg
}