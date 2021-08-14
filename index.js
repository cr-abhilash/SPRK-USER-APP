
const express = require('express');
const dotenv  = require('dotenv');
const connectToDataBase = require('./database/connection');
const cors = require('cors');

const app = express();

//config env variables
dotenv.config();

//database connection
connectToDataBase().then((e)=>console.log("Database connected")).catch(err=> console.log(err));


app.get('/', (req,res)=>{
    res.send("Welcome to user app")
})

//middleware
app.use(cors());
app.use(express.json());
app.use('/api/user',require('./routes/userRoute'));


//handleing invalid routes
app.use((req,res,next)=>{
    res.status(404).json({message:"Not found"});
})
 


app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running at ${process.env.PORT || 3000}`)
}).on('error',(err)=>console.log(err))

