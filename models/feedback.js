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
    }
}

const feedback = new mongoose.model("feedback", complaints);
module.exports = feedback;