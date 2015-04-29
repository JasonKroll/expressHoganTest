var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  res.locals = {title: 'Hello World'};
  res.render('welcome', {partials: {content: 'content'}});
});

module.exports = router;
