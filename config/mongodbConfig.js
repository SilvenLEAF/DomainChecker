const mongoose = require('mongoose');







mongoose.connect(process.env.MONGODB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },



  (err) =>{
    if(err) throw err;
    console.log('connected to MongoDB');
  }
)