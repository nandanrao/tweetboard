var db = require('../models');
var tweets = require('../models').slotTweets;

module.exports = function(io){
  io.on('connection', function(socket){
    // Initialize new connection with tweets
    tweets(function(tweets){
      socket.emit('init', tweets)   
    });
    // Update database + open clients on any change
    socket.on('newtweet', function(data){
      var slot = data.id;
      var name = data.name;
      var text = data.text;
      io.sockets.emit('newtweet', data);
      db.update(slot, name, text)
    });
  })
}  