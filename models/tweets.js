module.exports = function(sequelize, dataTypes) {
  return sequelize.define('tweet', {
    name: dataTypes.STRING,
    text: dataTypes.STRING,
    slot: dataTypes.INTEGER,
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true, 
    }
  },
  {
    timestamps: false
  });
};