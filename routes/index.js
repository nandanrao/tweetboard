var express = require('express');
var router = express.Router();

var tweets = require('../models').slotTweets;

/* GET home page. */
router.get('/', function(req, res) {
    tweets(function(tweets){
      // console.log(tweets);
      res.render('index', { title: 'Twitta', tweets: tweets, show_form: true }); 
    })
});

module.exports = router;
