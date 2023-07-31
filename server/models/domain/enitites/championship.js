const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const Championship = sequalize.define('championship', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organizationId: {type: DataTypes.INTEGER, allowNull: false},
    participantFullName: {type: DataTypes.STRING, allowNull: false},
    department: {type: DataTypes.STRING, allowNull: false},
    post: {type: DataTypes.STRING, allowNull: false},
    isWinner: {type: DataTypes.BOOLEAN, allowNull: false}
});

Championship.hasMany(organization, {foreignKey: {organizationId:'id'}});

module.exports = Championshipship;