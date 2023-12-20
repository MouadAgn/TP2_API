const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Utilisateur = sequelize.define('Utilisateur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_super_admin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});





module.exports = Utilisateur;
