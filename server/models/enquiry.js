const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    interests: {
        type: String,
        required: true
    }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
