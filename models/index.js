if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null
 
  if (process.env.HEROKU_POSTGRESQL_COPPER_URL) {
    // the application is executed on Heroku ... use the postgres database
    var match = process.env.HEROKU_POSTGRESQL_COPPER_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
 
    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
 	sequelize = new Sequelize('twitterjs', 'nandanrao', 'fuz', {
 		dialect: 'postgres',
 		port: 5432,
	});
 };
};

sequelize.authenticate().complete(function(err){
	if (!!err){
		console.log('cant connect to DB:', err)
	} else {
		console.log('connection made!')
	}
});

var async = require('async');

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
  Sequelize: Sequelize,
  sequelize: sequelize,
	update: function(slot, name, text){
		tweets.create({name: name, text: text, slotId: slot}).success(function(tweet){
			slots.find({where: {id: slot}}).success(function(item){
				console.log(tweet);
	      item.updateAttributes({id: slot, tweet_id: tweet.id})        
      });
    });
	},
};