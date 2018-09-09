const express = require('express');
const router = express.Router();
const posts = require('../controls/posts');


router.get('/', posts.get);
router.post('/', posts.post);
router.put('/:id', posts.put);
router.delete('/:id', posts.delete);

module.exports = (app) => {
    app.use('/post', router);
};