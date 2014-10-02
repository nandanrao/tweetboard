var mongoose = require('mongoose');

var uristring =
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';


mongoose.connect('mongodb://localhost/twitterjs')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
  console.log('database connected!')
});

var Tweet = require('./Tweet');
var Slot = require('./Slot');
var async = require('async');

module.exports = {
  slotTweets: function(callback){
    Slot.find().populate('tweet_id').exec(function(err, slots){
      if (err) throw err;
      async.map(slots, function(slot, cb){
        cb(null, slot.tweet_id)      
      }, function(err, slots){
        callback(slots)
      });
    });
  },
  update: function(slot, name, text){
    Tweet.create({name: name, text: text, slot: slot}, function(err, tweet){
      if (err) throw err;
      // Update the slot in the db
      Slot.findOneAndUpdate({num: tweet.slot}, {tweet_id: tweet._id}, function(err, slot){
        console.log(slot, 'updated!')
      })
    })
  }
};