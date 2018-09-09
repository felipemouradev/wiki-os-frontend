const express = require('express');
const router = express.Router();

module.exports = (app) => {
    app.use('/', router);
};


/* GET home page. */
router.get('/', (req, res, next) => {
    res.sendFile('./public/index.html');

});
