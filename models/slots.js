module.exports = function(sequelize, dataTypes) {
  return sequelize.define('slot', {
    slot: dataTypes.INTEGER,
    id: dataTypes.INTEGER
  }, 
  {
    timestamps: false
  })
}