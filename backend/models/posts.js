const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Posts = new schema({
    name:{
        type: String,
        // default: "Niome"
    },
    category:{
        type: String,
        enum : [1, 2, 3, 10],
        default: 10
        
    },
    text:{
        type: String
    }
});

module.exports = mongoose.model('Posts', Posts);