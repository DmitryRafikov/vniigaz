const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const EventType = sequalize.define('eventType', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventTypeName: {type: DataTypes.STRING, allowNull: false}
});

module.exports = EventType;