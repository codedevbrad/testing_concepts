const Sequelize = require('sequelize');
const db = require('../../util/database');

const Writable = db.define('writable', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	data: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: false
	},
	workspace: {
        type: Sequelize.STRING
    } 
});

module.exports = Writable;