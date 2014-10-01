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
		slots.gettweets({order: 'id'}).success(function(err, tweets){
			if (err) {
				throw err;
			}
			// the slots findAll returns an object with a key 'tweet', 
			// which contains all the info from the tweets table, which is what you actually want
			callback(tweets.map(function(obj){
				console.log(obj);
				return obj.values.tweet
			})); // sort because front-end just loops in begining (TODO!)
		});
	},
	tweets : tweets,
	slots: slots,
	update: function(slot, name, text){
		tweets.create({name: name, text: text, slot: slot}).success(function(tweet){
      slots.find({where: {slot: slot}}).success(function(item){
        item.destroy();
        slots.create({slot: slot, id: tweet.null})
      });        
    });
	},
};