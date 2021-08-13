const {check,validationResult} = require('express-validator');

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

