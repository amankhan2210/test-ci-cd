const User = require('../models/user.model')

async function getuser(req,res) {
    const user = await User.find()
    return res.status(200).json({user})
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