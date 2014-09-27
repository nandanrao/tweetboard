var express = require('express');
var router = express.Router();
var store = require('../store')

/* GET users listing. */
router.get('/:name/tweets/:id', function(req, res) {
	var user = req.params.name;
	var id = parseInt(req.params.id);
	var list = store.find({name: user, id: id});
	res.render('index', {title: "Dis da page of da tweet #" + id, list: list, id: id})
});

module.exports = router;