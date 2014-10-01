module.exports = function(sequelize, dataTypes) {
  return sequelize.define('slot', {
    id: dataTypes.INTEGER,
    tweet_id: dataTypes.INTEGER
  }, 
  {
    timestamps: false
  })
}