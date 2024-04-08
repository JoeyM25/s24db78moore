var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('houseplant', { title: 'Search results for houseplants' });
});

module.exports = router;

