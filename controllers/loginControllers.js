const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/genrateJWT')
const loginUser = asyncHandler(async(req, res)=>{
    const{email, password} = req.body
    try {
        if(!email || !password){
            res.status(400).json({error:"field not be empty"})
        }
        const user = await User.findOne({email : email});
        if(user){
            const isMatched = await bcrypt.compare(password, user.password)

            if(!isMatched){
                res.status(400).json({error:"invalid credentials"})
            }
            else{

                // res.cookie('jwtoken', token , {
                //     expires :new Date(Date.now() + 2592000000), 
                //     httpOnly:true
                // })
                const token = generateToken(user._id)
                res.send
                ({id:user._id,
                    name: user.name,
                    phone: user.phone,
                    email : user.email,
                    token: token,
                })
            }


        }

    } catch (error) {
        console.log(error)
    }
    
    
})

module.exports= loginUser;