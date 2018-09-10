const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Users = new schema({
    username:{
        type: String
    },
    password:{
        type: String
    }
});

module.exports = mongoose.model('Users', Users);