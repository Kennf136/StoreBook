var express = require('express');
var router = express.Router();
const Schema= require("../db/schema.js");
const Forecast= Schema.Forecast;

/* GET home page. */
router.get('/', function(req, res, next) {
    Forecast.find()
    .then((x) => {
res.send(x)
    })
.catch((error)=>{console.log(error)})
});

module.exports = router;