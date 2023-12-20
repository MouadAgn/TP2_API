const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Utilisateur = require('./utilisateur'); 

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    freezeTableName: true,
    timestamps: false, // Désactive les timestamps automatiques
});

Role.belongsToMany(Utilisateur, {
    through: 'utilisateur_role',
    foreignKey: 'role_id'
});
Utilisateur.belongsToMany(Role, {
    through: 'utilisateur_role',
    foreignKey: 'utilisateur_id'
});

module.exports = Role; // Module