var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.locals = {title: 'About us'};
  res.render('about');
});

module.exports = router;
