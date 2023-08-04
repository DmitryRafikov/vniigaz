const sequalize = require('../db');
const {DataTypes} = require('sequelize');

const Organization = sequalize.define('organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}},
    {
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

module.exports = Organization;
