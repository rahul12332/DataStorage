const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const registerUser = asyncHandler(async(req, res)=>{
    const{name, email, phone, password, } = req.body
       
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400).json({error: "this email is salready exit"})
        throw new Error("user is already Exist")
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password : hashedPassword,
    })
 const token = jwt.sign( {email: user.email, id: user._id},process.env.JWT_SECRET );

    if(user){
        res.status(201).json({
           message:user, token: token})
    }
    else{
        res.status(400).json({message: "registration is failed"})
        throw new Error("Error occured!")
    }
    
    
})

module.exports= registerUser;