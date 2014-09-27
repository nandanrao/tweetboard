var express = require('express');
var router = express.Router();
var store = require('../store')

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = store.list();
  res.render('index', { title: 'Twitta', tweets: tweets, show_form: true });
});


module.exports = router;
