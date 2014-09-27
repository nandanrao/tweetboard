var _ = require('underscore')

var store = [];

module.exports = {
	push: function(name, text, id){
		var entry = store[id-1]
		entry.id = id;
		entry.name = name;
		entry.text = text;
	},
	list: function(){
		return store;
	},
	find: function(properties){
		return _.where(store, properties);
	},
};


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
 
var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
 
var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};
 
for(var i=1; i<=10; i++) {
	store.push({
		"id": i,
		"name": getFakeName(),
		"text": getFakeTweet(),
	});
}
