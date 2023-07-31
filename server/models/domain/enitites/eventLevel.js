const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const EventLevel = sequalize.define('eventLevel', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventLevelName: {type: DataTypes.STRING, allowNull: false}
});

module.exports = EventLevel;