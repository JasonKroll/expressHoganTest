var express = require('express');
var router = express.Router();
var uploadManager = require('./uploadManager')(router);

/* GET home page. */
router.get('/', function(req, res) {
  res.locals = {title: 'Upload image'};
  res.render('files');
});

module.exports = router;
