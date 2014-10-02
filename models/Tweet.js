var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
  name: String,
  text: String,
  slot: Number,
});

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;