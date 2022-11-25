const { exception } = require("../middleware/exceptionHandler");
const { validation, StudentRegisterModel } = require("../models/register");

const router = require("express").Router();

router.post("/register",exception(async (req, res) => {
    const {surname, givenname, title, photo, gender, nationality, por, dob, country} = req.body;
    let data = {surname, givenname, title, photo, gender, nationality, por, dob, country};
    const {error} = validation(data);
   if (error) {
        return res.render('register', {msg: error.details[0].message, type: "err"});
   } 

   if (!photo){
    photo = "";
   }
   if(!title) {
       title = "";
   }
   let student = new StudentRegisterModel({
        surname,
        givenname,
        title,
        photo,
        gender,
        dob,
        por,
        country,
        nationality
   });

   await student.save();
   res.render("register", {msg: "Successfully registered", type: "info"});

}));