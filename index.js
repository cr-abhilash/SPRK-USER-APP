
const express = require('express');
const dotenv  = require('dotenv');
const connectToDataBase = require('./database/connection');


const app = express();

//config env variables
dotenv.config();

//database connection
connectToDataBase();

app.get('/', (req,res)=>{
    res.send("Welcome to user app")
})

//middleware
app.use(express.json());
app.use('/api/user',require('./routes/userRoute'))



app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
}).on('error',(err)=>console.log(err))
