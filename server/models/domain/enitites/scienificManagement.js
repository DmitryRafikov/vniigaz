const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const ScienificManagement = sequalize.define('scienificManagement', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organizationId: {type: DataTypes.INTEGER, allowNull: false},
    fullName: {type: DataTypes.STRING, allowNull: false},
    post: {type: DataTypes.STRING, allowNull: false},
    educationName: {type: DataTypes.STRING, allowNull: false},
    studentsQuantity: {type: DataTypes.INTEGER, allowNull: false}
});

ScienificManagement.hasMany(organization, {foreignKey: {organizationId:'id'}});

module.exports = ScienificManagement;