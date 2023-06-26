const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', UserSchema);