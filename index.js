const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const otp = require('otp-generator');
const fast2sms = require('fast-two-sms')
const axios = require('axios');

dotenv.config();

const Admin = require("./models/admin")
const User = require("./models/user");
const Complaints = require("./models/complaints");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/Complaints" ,{useNewUrlParser :true, useUnifiedTopology :true});
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-0.lnlf8nt.${process.env.DB_HOST}/userDB`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
// Send otp
// var smsData = {
//     authorization: process.env.OTP_API,
//     message: 'The verification OTP for the complaints is',
//     numbers: '7009853177'
// }
// axios
//     .post('https://www.fast2sms.com/dev/bulkV2',smsData, {
//         headers:{
//             authorization: process.env.OTP_API
//         },
//     })
//     .then((response)=>{
//         console.log("Sms Sent", response.data);
//     })
//     .catch((error) => {
//         console.log(error.response.data);
//     })



app.get("/", (req,res)=>{
    res.redirect("login");
})

app.get("/login", (req,res)=>{
    res.render("login");
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(result => {
            if (result && result.password === password) {
                res.render("user");
            } else {
                res.redirect("/login");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error");
        });
});

app.get("/signup", (req,res)=>{
    res.render("signup");
})

app.post("/signup", (req,res)=>{
    const newUser = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        mobile : req.body.phone
    });

    newUser.save()
        .then(() => {
            console.log("The data of newUser has been added to the database");
            res.render("user");
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
})

app.get("/user", (req,res)=>{
    res.render("user");
})

app.get("/complaints", (req,res)=>{
    res.render("complaints");
})

app.post("/complaints", (req,res)=>{
    const {name, email, mobile, description} = req.body;
    const departmet = req.body.radio;
    console.log(name);
    console.log(departmet);
    const Otp = otp.generate(4, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false});
})

app.get("/prevComplaints", (req,res)=>{
    res.render("prevComplaints");
})

app.listen(3000, ()=>{console.log("Server is live at port 3000")});
