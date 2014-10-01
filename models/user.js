module.exports = function(sequelize){
	var User = sequelize.define('User', {
		name: Sequelize.STRING
	},
	{
		timestamps: false
	});
	return User
};