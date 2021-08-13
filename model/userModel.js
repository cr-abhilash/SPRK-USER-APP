const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
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
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    hashPassword:{
        type:String,
        required:true
    }
},{timeStamps:true})

UserSchema.index({ name: 'text', contact: 'text' });

UserSchema.virtual('password').set( function(password){
    this.hashPassword= bcrypt.hashSync(password,10);
})

UserSchema.methods={
    checkPassword: function(password){
        return bcrypt.compare(password, this.hashPassword)
    }
}
const UserModel = mongoose.model('User',UserSchema);


module.exports = UserModel;