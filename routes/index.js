// var express = require('express');
// var router = express.Router();

// router.get('/', (req, res) => {
//     res.send("hello, express");
// })


// module.exports = router;

module.exports = function (app) {
   app.get('/', (req, res) => {
    res.send("hello, express");
})
  // app.use('/', function (req, res) {
  //     res.redirect('/posts');
  //   });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/users', require('./users'))
    app.use('/posts', require('./posts'));
  };