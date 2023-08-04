const sequalize = require('../db');
const {DataTypes} = require('sequalize');
const organization = require('./organization');

const ProjectGroup = sequalize.define('projectGroup', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organizationId: {type: DataTypes.INTEGER, allowNull: false},
    topic: {type: DataTypes.STRING, allowNull: false},
    participantsQuantity: {type: DataTypes.INTEGER, allowNull: false},
    youngParticipantsQuantity: {type: DataTypes.INTEGER, allowNull: false}
});

organization.hasMany(ProjectGroup);
ProjectGroup.belongsTo(organization);

module.exports = ProjectGroup;