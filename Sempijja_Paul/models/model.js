require("dotenv");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students_regestry").then(()=>{
    console.log("db connected successfully");
}).catch(e=>{
    console.log(e);
});

exports.mongoose = mongoose;
