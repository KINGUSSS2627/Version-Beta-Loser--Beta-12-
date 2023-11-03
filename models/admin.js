const mongoose = require('mongoose');
const admin = {
    email: {
        type:String,
        required: true
    },
    password : {
        type: String,
        required : true
    }
}

const Admin = new mongoose.model("admin",admin);
module.exports = Admin;