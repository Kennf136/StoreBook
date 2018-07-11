var express = require('express');
var router = express.Router({mergeParams: true});const Schema= require("../db/schema.js");
const Users= Schema.Users;

/* GET home page. */
router.get('/', function(req, res, next) {
    Users.find()
    .then((x) => {
res.send(x)
    })
.catch((error)=>{console.log(error)})
});


module.exports = router;