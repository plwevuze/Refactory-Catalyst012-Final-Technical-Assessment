const mongoose = require("mongoose");

mongoose.connect(process.env.DB_DV).then(()=>{
    console.log("db connected successfully");
}).catch(e=>{
    console.log(e);
});

exports.mongoose = mongoose;
