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
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    location: {
        type: String,
        require: true
    }
}

const PoliceComplaints = new mongoose.model("Policecomplaints", complaints);
module.exports = PoliceComplaints;