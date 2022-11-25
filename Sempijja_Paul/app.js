require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { error } = require("./middleware/exceptionHandler");
const { Register } = require("./routes/register");

let upload = multer();
let app = express();

app.set('view engine', 'pug');
app.set('view');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());

app.use("/",Register);

app.get("/register", (req,res) => {
    res.render('register')
})

app.use(error);

const port = process.env.PORT || 3000;

app.listen(port, (err)=>{
    if (err) {
        throw err
    }
    console.log(`Server running on port ${port}`);
});