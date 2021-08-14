const {check,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const { expiredTokens } = require('./Token');
const validation={
    userSignUp:[
   check('name').notEmpty().withMessage("User name is required."),
   check('email').isEmail().withMessage("user email is required."),
   check('password').isLength({min:6}).withMessage("Password should be at least 6 charactors long."),
   check('contact').notEmpty().withMessage("Contact info is required.")
],
   userSignIn :[
    check('email').isEmail().withMessage("user email is required"),
    check('password').notEmpty().withMessage("Password is required"),
   ]
}

module.exports.validation=validation;

module.exports.isRequestValidated=(req,res,next)=>{
    const error= validationResult(req);
    if(error.array().length>0){
        return res.status(400).json({error:error.array()})
    }
    next();
}

exports.checkSignin=(req,res,next)=>{
 const token = req.headers.authorization.split(" ")[1];
 const data = jwt.verify(token,process.env.SECRET_KEY,(err,data)=>{
    if(err){
        return res.status(401).json({error:"Invalid auth token"});
    }
    if(data && !expiredTokens[data.email]){
        req.body.user=data;
        next();
    }
    else{
        return res.status(401).json({error:"Invalid auth token"});
    }
 });
}