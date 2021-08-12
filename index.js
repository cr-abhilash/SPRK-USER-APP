
const express = require('express');
const dotenv  = require('dotenv');

const app = express();

//config env variables
dotenv.config();

app.on('error',(err)=>{
    console.log("custom error",err)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
}).on('error',(err)=>console.log(err))
