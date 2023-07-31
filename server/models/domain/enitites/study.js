const sequalize = require('../db');
const {DataTypes} = require('sequalize');

const Study = sequalize.define('study', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organizationId: {type: DataTypes.INTEGER, allowNull: false},
    fullName: {type: DataTypes.STRING, allowNull: false},
    organization: {type: DataTypes.STRING, allowNull: false},
    admissionYear: {type: DataTypes.INTEGER, allowNull: false}
});

Study.hasMany(organization, {foreignKey: {organizationId:'id'}});

module.exports = Study;