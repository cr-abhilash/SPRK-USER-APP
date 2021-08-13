const mongoose = require('mongoose');


const connectToDataBase = async () =>{
    await mongoose.connect('mongodb+srv://root:abhilash@27@cluster0.jtcuz.mongodb.net/employeeDatabase?retryWrites=true&w=majority',
    { useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:true,
      useCreateIndex:true,
    })

    console.log("Database connected")
}

module.exports=connectToDataBase;