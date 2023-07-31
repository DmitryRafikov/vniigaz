const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const EventData = sequalize.define('eventData', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eventId: {type: DataTypes.INTEGER, allowNull: false},
    dataType: {type: DataTypes.STRING, allowNull: false},
    data: {type: DataTypes.INTEGER, allowNull: false}
});

EventData.hasMany(organization, {foreignKey: {organizationId:'id'}});

module.exports = EventData;