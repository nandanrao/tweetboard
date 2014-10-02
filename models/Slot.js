var mongoose = require('mongoose');

var slotSchema = mongoose.Schema({
  num: Number,
  tweet_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Tweet'},
});

var Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;