const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

console.log("ok");

const routesPath = path.join(__dirname,"/../routes");
fs.readdirSync(routesPath).forEach(route => {
    route = route.replace(".js","");
    console.log("CARREGAMENTO AUTOMATICA DA ROTA: "+route);
    require(routesPath+ "/" + route)(app);
});
mongoose.connect('mongodb://localhost/wikiorg');
mongoose.Promise = global.Promise;
module.exports = app;