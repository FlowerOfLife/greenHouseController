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


/*



module.exports = function(io) {
  return router.get('/', function(req, res) {
    if(!req.user || req.user.status !== 'ENABLED') {
      return res.redirect('/login');
    }

    // emit to all connected sockets that the user is loading the page
    io.emit('user-connecting', { name: req.user.name });

    res.render('home', {
      title: 'Home',
      user: req.user
    });
  });
}


*/
