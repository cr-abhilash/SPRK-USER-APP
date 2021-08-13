const router = require('express').Router();
const jwt = require('jsonwebtoken');
const UserModel = require('../model/userModel');

router.post('/signup',(req,res)=>{
    console.log(req);
    const {name,email}=req.body;
    const newUser=new UserModel(req.body);
    newUser.save().then((data)=>{
        const token=jwt.sign({name:name,email:email},"Secret key",{expiresIn:"1d"});
        
        res.status(200).json({token,userData:data});
    })
    
})
module.exports=router;