const mongoose = require('mongoose');
const complaints = {
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

const MunicipleComplaints = new mongoose.model("Municipalcomplaints", complaints);
module.exports = MunicipleComplaints;