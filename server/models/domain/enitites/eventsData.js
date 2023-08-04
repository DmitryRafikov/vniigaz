const sequalize = require('../db');
const {DataTypes} = require('sequalize');
const event = require('./event');

const EventData = sequalize.define('eventData', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventId: {type: DataTypes.INTEGER, allowNull: false},
    dataType: {type: DataTypes.STRING, allowNull: false},
    data: {type: DataTypes.INTEGER, allowNull: false}
});

event.hasMany(EventData);
EventData.belongsTo(event);

module.exports = EventData;