const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const Event = sequalize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventTypeId: {type: DataTypes.INTEGER, allowNull: false},
    eventName: {type: DataTypes.STRING, allowNull: false},
    eventLevelId: {type: DataTypes.INTEGER, allowNull: true},
    eventOrganizer: {type: DataTypes.STRING, allowNull: false},
    organizationId: {type: DataTypes.INTEGER, allowNull: false}
});

Event.hasMany(organization, {foreignKey: {organizationId:'id'}});

module.exports = Event;