const sequalize = require('../db');
const {DataTypes} = require('sequalize');
const organization = require('./organization');

const Grand = sequalize.define('grand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organizationId: {type: DataTypes.INTEGER, allowNull: false},
    competitionName: {type: DataTypes.STRING, allowNull: false},
    topic: {type: DataTypes.STRING, allowNull: false},
    participantQuantity: {type: DataTypes.INTEGER, allowNull: false},
    winnersQuantity: {type: DataTypes.INTEGER, allowNull: false}
});

organization.hasMany(Grand);
Grand.belongsTo(organization);

module.exports = Grand;