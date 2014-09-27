var express = require('express');
var router = express.Router();
var store = require('../store')

/* GET users listing. */
router.get('/:name', function(req, res) {
	var user = req.params.name;
	var list = store.find({name: user});
	res.render('index', {title: user + "\'s page", list: list})
}); 

module.exports = router;
