const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const ProjectGroup = sequalize.define('projectGroup', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organizationId: {type: DataTypes.INTEGER, allowNull: false},
    topic: {type: DataTypes.STRING, allowNull: false},
    participantsQuantity: {type: DataTypes.INTEGER, allowNull: false},
    youngParticipantsQuantity: {type: DataTypes.INTEGER, allowNull: false}
});

ProjectGroup.hasMany(organization, {foreignKey: {organizationId:'id'}});

module.exports = ProjectGroup;