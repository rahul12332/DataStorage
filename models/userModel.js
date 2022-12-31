const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')

userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        phone:{
            type: Number,
            required: true
        },
        password:{
            type: String,
            required: true
        },

    }
    ,
        
            {timestamps : true}  
);

// userSchema.pre('save', async function(next){
//     if(!this.isModified('password')){
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// })

const User = mongoose.model('User', userSchema)

module.exports=User;