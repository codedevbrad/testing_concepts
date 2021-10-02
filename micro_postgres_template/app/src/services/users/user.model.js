const Sequelize = require('sequelize');
const db = require('../../util/database');
const Writable = require('../writable/writable.model');

const User = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	} ,
    password: {
		type: Sequelize.STRING,
		allowNull: false
    }
});

User.hasMany( Writable , {
	foreignKey: {
		allowNull: false
	}
 } );
Writable.belongsTo( User );

module.exports = User;