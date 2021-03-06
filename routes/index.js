var express = require('express');
var router = express.Router();
var uploadManager = require('./uploadManager')(router);

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.locals = {title: 'Hello World'};
  res.render('welcome', {partials: {content: 'content', files: 'files'}});
});

module.exports = router;
