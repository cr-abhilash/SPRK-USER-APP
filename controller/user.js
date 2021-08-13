const UserModel = require("../model/userModel");
const jwt = require('jsonwebtoken');
const { expiredTokens } = require("../helpers/Token");



exports.userSignUp = async (req, res) => {
    try {
        const { name, email } = req.body;
        const data = await UserModel.findOne({ email })
        if (data) {
            return res.status(400).json({ message: "User already regestered!." })
        }
        const newUser = new UserModel(req.body);
        const userData = await newUser.save();
        const token = jwt.sign({ name: name, email: email }, "Secret key", { expiresIn: "1d" });
        expiredTokens[email]=null;
        return res.status(200).json({ token, userData });
    }
    catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

exports.userSignIn = (req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email}).then(data=>{
        if(!data){
            return res.status(400).json({message:"User not found"})
        }
        else if(data.checkPassword(password)){
            const token=jwt.sign({name:data.name,email:email},"Secret key",{expiresIn:"1d"});
            expiredTokens[email]=null;
            return res.status(200).json({token,userData:data});
        }
        else{
           return  res.status(400).json({message:"Invalid Password"})
        }
    }).catch(error=>{
        return res.status(400).json({message:"User not found"})
    })
}
    
exports.signout=(req,res)=>{
    //currently useing variable to store expired tokens
    // we can use redis in memory data base to store the expired tokens
    const token = req.headers.authorization.split(" ")[1];
    expiredTokens[req?.body?.user?.email]=token;
    return res.status("200").json({msg:"User logout successfully"})
}

exports.getUsers=(req,res)=>{
    UserModel.find().then(data=>{
       return res.status(200).json({users:data});
    }).catch(error=>res.status(500).json({message:error.message}))
}

exports.searchUsers=(req,res)=>{
    const {text} =req.query;
    const regText = new RegExp(text,'i');
    
    UserModel.find(
        {$or:[
            {name: regText},
            {contact: regText},
        ]}
    ).then(data=>{
            return res.status(200).json({data})
    }).catch(error=>res.status(500).json({error:error.message}))
}