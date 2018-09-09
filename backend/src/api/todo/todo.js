const restful = require('node-restful')
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  text: {type: String, required: true, default: 1}
});

module.exports = restful.model('Todo', todoSchema);
