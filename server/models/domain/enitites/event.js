const sequalize = require('../db');
const {DataTypes} = require('sequalize');
const organization = require('./organization');
const eventLevel = require('./eventLevel');
const eventType = require('./eventType');

const Event = sequalize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventTypeId: {type: DataTypes.INTEGER, allowNull: false},
    eventName: {type: DataTypes.STRING, allowNull: false},
    eventLevelId: {type: DataTypes.INTEGER, allowNull: true},
    eventOrganizer: {type: DataTypes.STRING, allowNull: false},
    organizationId: {type: DataTypes.INTEGER, allowNull: false}
});

organization.hasMany(Event);
Event.belongsTo(organization);

eventType.hasMany(Event);
Event.belongsTo(eventType);

eventLevel.hasMany(Event);
Event.belongsTo(eventLevel);



module.exports = Event;