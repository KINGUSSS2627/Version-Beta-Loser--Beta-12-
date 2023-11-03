const mongoose = require('mongoose');
const user = {
    name: {
        type : String,
        required : true
    },
    email: {
        type:String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    password : {
        type: String,
        required : true
    }
}

const User = new mongoose.model("user", user);
module.exports = User;