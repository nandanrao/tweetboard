var async = require('async');
var Sequelize = require('sequelize')
	, sequelize = new Sequelize('twitterjs', 'root', null, {
		port: 3306,
	});

sequelize.authenticate().complete(function(err){
	if (!!err){
		console.log('cant connect to DB:', err)
	} else {
		console.log('connection made!')
	}
});

// Load your two models
var tweets = sequelize.import('../../../models/tweets.js');
var slots = sequelize.import('../../../models/slots.js');

// Associate your two models
slots.hasMany(tweets);
tweets.belongsTo(slots);

sequelize.sync();

module.exports = {
	slotTweets: function(callback){
		slots.findAll({include:[tweets]}).complete(function(err, slots){
			if (err) {
				throw err;
			}			
				async.mapSeries(slots, function(slot, cb){
					slot.getTweets({order: 'id DESC'}).success(function(tweets){
						cb(null, tweets[0].values);
					})
				},
				function(err, results){
					callback(results);
				})
		});
	},
	tweets : tweets,
	slots: slots,
	update: function(slot, name, text){
		tweets.create({name: name, text: text, slotId: slot}).success(function(tweet){
			slots.find({where: {id: slot}}).success(function(item){
	      item.updateAttributes({id: slot, tweet_id: tweet.null})        
      });
    });
	},
};