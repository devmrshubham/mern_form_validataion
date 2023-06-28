const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            maxLangth:60
        },
        email:{
            type:String,
            maxLangth:40
        },
        contact:{
            type:Number,
            max:9999999999,
            min:1111111111
        },
        password:{
            type:Number,
            
            
        },
        gender:{
            type:String,
            enum:["male","female","other"]

        },
        createdAt:{
            type:String,
            Default: new Date().toLocaleDateString()
        }
    }
)

const User = mongoose.model("User",userSchema);
module.exports = User;