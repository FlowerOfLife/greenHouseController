var express = require('express');
var router = express.Router();
var app = require('../app.js')
/* GET home page. */

router.get('/', function (req, res) {
console.log(app)
    res.render('index', {
        title:JSON.stringify(app)
    });
});

module.exports = router;