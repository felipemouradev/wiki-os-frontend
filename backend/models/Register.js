const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Register = new schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    repeat_password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Register', Register);