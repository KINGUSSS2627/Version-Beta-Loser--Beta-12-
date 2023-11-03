const mongoose = require('mongoose');
const complaints = {
    name: {
        type:String,
        required: true
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
    Date: {
        type: Date,
        required :true,
        default: new Date()
    },
    Description: {
        type: String,
        required: true
    }
}

const Complaints = new mongoose.model("complaints", complaints);
module.exports = Complaints;