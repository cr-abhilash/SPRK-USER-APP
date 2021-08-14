const mongoose = require('mongoose');


const connectToDataBase = async () =>{
    await mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:true,
      useCreateIndex:true,
    })
}

module.exports=connectToDataBase;