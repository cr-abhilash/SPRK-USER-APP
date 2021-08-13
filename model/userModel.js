const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        tags: { type: [String], index: true }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    contact:{
        type:Number,
        required:true,
        tags:{type:[Number],index:true}
    },
    gender:{
        type:String,
    },
    password:{
        type:String,
        required:true
    }
})


const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;