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
    },
    Department: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        require: true
    }
}

const PoliceComplaints = new mongoose.model("Policecomplaints", complaints);
module.exports = PoliceComplaints;