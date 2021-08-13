const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { userSignUp, userSignIn, signout, getUsers, searchUsers } = require('../controller/user');
const {validation,isRequestValidated, checkSignin} = require('../helpers/validation');


router.post('/signup',validation.userSignUp,isRequestValidated ,userSignUp);

router.post('/signin',validation.userSignIn,isRequestValidated,userSignIn);

router.post('/signout',checkSignin,signout);

router.get('/all',checkSignin,getUsers);

router.get('/search',checkSignin,searchUsers);

module.exports=router;