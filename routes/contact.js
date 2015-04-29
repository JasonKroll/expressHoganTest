var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.locals = {title: 'Contact us'};
  res.render('contact');
});

module.exports = router;
