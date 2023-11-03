const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const otp = require('otp-generator');
const sms = require('fast-two-sms');

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
var options = {
    authorization: process.env.OTP_API,
    message: 'The verification OTP for the complaints is',
    numbers: ['7009853177']
}

async function smsSend(options){
    const response = await sms.sendMessage(options)
    console.log(response)
}


app.get("/", (req,res)=>{

    smsSend(options);
    res.send("Hi");
})




app.get("/login", (req,res)=>{
    res.render("login");
})

app.get("/signup", (req,res)=>{
    res.render("signup");
})

app.get("/customer", (req,res)=>{
    res.render("customer");
})

app.get("/complaints", (req,res)=>{
    res.render("complaints");
})

app.post("/complaints", (req,res)=>{
    const {name, email, mobile, description} = req.body;
    const Otp = otp.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false});
})

app.get("/prevComplaints", (req,res)=>{
    res.render("prevComplaints");
})

app.listen(3000, ()=>{console.log("Server is live at port 3000")});
